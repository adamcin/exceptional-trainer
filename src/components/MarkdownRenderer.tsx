import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { View } from '@adobe/react-spectrum';

export interface MarkdownRendererProps {
  content: string;
}

/**
 * Renders markdown content with GitHub Flavored Markdown support
 * Styled using Spectrum typography patterns
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <View
      UNSAFE_className="markdown-content"
      UNSAFE_style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: 'var(--spectrum-global-color-gray-800)',
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Heading styles
          h1: ({ children }) => (
            <h1 style={{
              fontSize: '2em',
              fontWeight: 'bold',
              marginTop: '1em',
              marginBottom: '0.5em',
              color: 'var(--spectrum-global-color-gray-900)',
            }}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 style={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: 'var(--spectrum-global-color-gray-900)',
            }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 style={{
              fontSize: '1.25em',
              fontWeight: 'bold',
              marginTop: '1.25em',
              marginBottom: '0.5em',
              color: 'var(--spectrum-global-color-gray-900)',
            }}>
              {children}
            </h3>
          ),
          // Paragraph styles
          p: ({ children }) => (
            <p style={{
              marginTop: '0.5em',
              marginBottom: '0.5em',
            }}>
              {children}
            </p>
          ),
          // List styles
          ul: ({ children }) => (
            <ul style={{
              marginTop: '0.5em',
              marginBottom: '0.5em',
              paddingLeft: '2em',
            }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{
              marginTop: '0.5em',
              marginBottom: '0.5em',
              paddingLeft: '2em',
            }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{
              marginTop: '0.25em',
              marginBottom: '0.25em',
            }}>
              {children}
            </li>
          ),
          // Code styles
          code: ({ children, ...props }) => {
            const isInline = !String(props.className).includes('language-');
            return isInline ? (
              <code style={{
                backgroundColor: 'var(--spectrum-global-color-gray-200)',
                padding: '0.2em 0.4em',
                borderRadius: '3px',
                fontSize: '0.9em',
                fontFamily: 'monospace',
              }}>
                {children}
              </code>
            ) : (
              <code style={{
                display: 'block',
                backgroundColor: 'var(--spectrum-global-color-gray-200)',
                padding: '1em',
                borderRadius: '4px',
                fontSize: '0.9em',
                fontFamily: 'monospace',
                overflowX: 'auto',
                marginTop: '0.5em',
                marginBottom: '0.5em',
              }}>
                {children}
              </code>
            );
          },
          // Blockquote styles
          blockquote: ({ children }) => (
            <blockquote style={{
              borderLeft: '4px solid var(--spectrum-global-color-gray-400)',
              paddingLeft: '1em',
              marginLeft: '0',
              marginTop: '0.5em',
              marginBottom: '0.5em',
              color: 'var(--spectrum-global-color-gray-700)',
              fontStyle: 'italic',
            }}>
              {children}
            </blockquote>
          ),
          // Link styles
          a: ({ href, children }) => (
            <a
              href={href}
              style={{
                color: 'var(--spectrum-global-color-blue-600)',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              {children}
            </a>
          ),
          // Horizontal rule
          hr: () => (
            <hr style={{
              border: 'none',
              borderTop: '1px solid var(--spectrum-global-color-gray-300)',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            }} />
          ),
          // Table styles (GFM)
          table: ({ children }) => (
            <table style={{
              borderCollapse: 'collapse',
              width: '100%',
              marginTop: '0.5em',
              marginBottom: '0.5em',
            }}>
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th style={{
              border: '1px solid var(--spectrum-global-color-gray-300)',
              padding: '0.5em',
              backgroundColor: 'var(--spectrum-global-color-gray-100)',
              textAlign: 'left',
              fontWeight: 'bold',
            }}>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td style={{
              border: '1px solid var(--spectrum-global-color-gray-300)',
              padding: '0.5em',
            }}>
              {children}
            </td>
          ),
          // Task list items (GFM)
          input: ({ type, checked }) => {
            if (type === 'checkbox') {
              return (
                <input
                  type="checkbox"
                  checked={checked}
                  disabled
                  style={{ marginRight: '0.5em' }}
                />
              );
            }
            return <input type={type} />;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </View>
  );
}
