import { writePsdBuffer } from 'ag-psd';
import { writeFileSync } from 'fs';

// Create a messy PSD with 30 unorganized layers
const width = 1200;
const height = 800;

// Helper to create a canvas and draw on it
function createCanvas(w, h) {
  const canvas = { width: w, height: h };
  const imageData = new Uint8Array(w * h * 4);
  return { canvas, imageData };
}

// Helper to fill canvas with a color
function fillCanvas(imageData, r, g, b, a = 255) {
  for (let i = 0; i < imageData.length; i += 4) {
    imageData[i] = r;
    imageData[i + 1] = g;
    imageData[i + 2] = b;
    imageData[i + 3] = a;
  }
}

// Helper to draw a rectangle
function drawRect(imageData, width, height, x, y, w, h, r, g, b, a = 255) {
  for (let dy = 0; dy < h; dy++) {
    for (let dx = 0; dx < w; dx++) {
      const px = x + dx;
      const py = y + dy;
      if (px >= 0 && px < width && py >= 0 && py < height) {
        const i = (py * width + px) * 4;
        imageData[i] = r;
        imageData[i + 1] = g;
        imageData[i + 2] = b;
        imageData[i + 3] = a;
      }
    }
  }
}

// Helper to draw a circle
function drawCircle(imageData, width, height, cx, cy, radius, r, g, b, a = 255) {
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      if (dx * dx + dy * dy <= radius * radius) {
        const px = cx + dx;
        const py = cy + dy;
        if (px >= 0 && px < width && py >= 0 && py < height) {
          const i = (py * width + px) * 4;
          imageData[i] = r;
          imageData[i + 1] = g;
          imageData[i + 2] = b;
          imageData[i + 3] = a;
        }
      }
    }
  }
}

// Random names to simulate a messy file
const messyNames = [
  'Layer 1 copy 3',
  'Rectangle 147',
  'Untitled-1',
  'Shape 1',
  'Layer 23',
  'new layer',
  'Background copy 2',
  'header graphic',
  'Circle 2',
  'temp',
  'Layer 1',
  'blue thing',
  'Shape Layer 1',
  'asdf',
  'final version',
  'old background',
  'test layer',
  'shape copy',
  'red box',
  'Layer 45',
  'gradient layer',
  'main content',
  'copy of layer 3',
  'footer stuff',
  'temporary layer 2',
  'Shape 8',
  'untitled',
  'backup',
  'Layer 100',
  'random shape'
];

// Create layers with variety
const layers = [];

for (let i = 0; i < 30; i++) {
  const layerWidth = Math.floor(100 + Math.random() * 400);
  const layerHeight = Math.floor(100 + Math.random() * 300);
  const x = Math.floor(Math.random() * (width - layerWidth));
  const y = Math.floor(Math.random() * (height - layerHeight));

  const { imageData } = createCanvas(layerWidth, layerHeight);

  // Random color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Randomly choose shape type
  const shapeType = Math.random();
  if (shapeType < 0.4) {
    // Rectangle
    fillCanvas(imageData, r, g, b, 255);
  } else if (shapeType < 0.7) {
    // Circle
    drawCircle(imageData, layerWidth, layerHeight, layerWidth / 2, layerHeight / 2, Math.min(layerWidth, layerHeight) / 2, r, g, b, 255);
  } else {
    // Multiple rectangles
    fillCanvas(imageData, 255, 255, 255, 0); // Transparent background
    const numRects = Math.floor(2 + Math.random() * 4);
    for (let j = 0; j < numRects; j++) {
      const rectW = Math.floor(20 + Math.random() * 100);
      const rectH = Math.floor(20 + Math.random() * 100);
      const rectX = Math.floor(Math.random() * (layerWidth - rectW));
      const rectY = Math.floor(Math.random() * (layerHeight - rectH));
      drawRect(imageData, layerWidth, layerHeight, rectX, rectY, rectW, rectH, r, g, b, 255);
    }
  }

  layers.push({
    name: messyNames[i],
    left: x,
    top: y,
    right: x + layerWidth,
    bottom: y + layerHeight,
    imageData: {
      width: layerWidth,
      height: layerHeight,
      data: imageData,
    },
    // Mix of visible/invisible (70% visible)
    hidden: Math.random() > 0.7,
    // Mix of locked/unlocked (30% locked)
    protected: {
      transparency: Math.random() < 0.3,
      position: Math.random() < 0.3,
    },
    opacity: Math.random() < 0.8 ? 255 : Math.floor(128 + Math.random() * 127),
  });
}

// Create the PSD document
const psd = {
  width,
  height,
  children: layers.reverse(), // Reverse so they're in a random stacking order
};

// Write the PSD file
const buffer = writePsdBuffer(psd);
writeFileSync('./public/assets/messy-layers.psd', Buffer.from(buffer));

console.log('✓ Generated messy-layers.psd with 30 unorganized layers');
console.log('  Location: public/assets/messy-layers.psd');
console.log('  Dimensions: 1200x800px');
console.log('  Layers: 30 (mix of rectangles, circles, and multi-shape layers)');
console.log('  Variety: ~70% visible, ~30% locked, various opacities');
