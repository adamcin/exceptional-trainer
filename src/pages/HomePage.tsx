import { View, Heading, Content, Button, Flex, Divider, Text, Well } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <View padding="size-400">
      <Flex direction="column" gap="size-400" maxWidth="800px">
        {/* Hero Section */}
        <View>
          <Heading level={1} marginBottom="size-200">
            Welcome to Exceptional Trainer
          </Heading>
          <Content>
            A structured learning path to master Adobe Photoshop techniques needed to create
            exceptional image compositions.
          </Content>
        </View>

        <Divider size="S" />

        {/* About Section */}
        <View>
          <Heading level={2} marginBottom="size-200">
            About This Curriculum
          </Heading>
          <Content>
            This application provides a hands-on, skills-based curriculum designed to help you
            master the essential Photoshop techniques required for advanced image composition.
            Through a series of structured exercises, challenges, and assessments, you'll develop
            the expertise needed to execute complex creative projects.
          </Content>
        </View>

        {/* How It Works */}
        <View>
          <Heading level={2} marginBottom="size-200">
            How It Works
          </Heading>
          <Flex direction="column" gap="size-300">
            <Well>
              <Heading level={3} UNSAFE_style={{ fontSize: '16px' }}>
                1. Complete Modules Sequentially
              </Heading>
              <Text>
                Progress through modules in order, building upon skills learned in previous modules.
              </Text>
            </Well>

            <Well>
              <Heading level={3} UNSAFE_style={{ fontSize: '16px' }}>
                2. Practice with Exercises
              </Heading>
              <Text>
                Each module contains guided exercises to help you practice specific techniques in
                Adobe Photoshop.
              </Text>
            </Well>

            <Well>
              <Heading level={3} UNSAFE_style={{ fontSize: '16px' }}>
                3. Take on Challenges
              </Heading>
              <Text>
                Apply what you've learned in more complex scenarios that combine multiple skills.
              </Text>
            </Well>

            <Well>
              <Heading level={3} UNSAFE_style={{ fontSize: '16px' }}>
                4. Self-Assess Your Progress
              </Heading>
              <Text>
                Complete module assessments to verify your mastery before moving to the next module.
              </Text>
            </Well>
          </Flex>
        </View>

        {/* Key Features */}
        <View>
          <Heading level={2} marginBottom="size-200">
            Key Features
          </Heading>
          <Flex direction="column" gap="size-150">
            <Text>✓ Structured, sequential learning path</Text>
            <Text>✓ Hands-on exercises and challenges</Text>
            <Text>✓ Self-paced learning with progress tracking</Text>
            <Text>✓ Export and import your progress</Text>
            <Text>✓ Detailed assessments for skill validation</Text>
          </Flex>
        </View>

        <Divider size="S" />

        {/* Call to Action */}
        <Flex direction="row" gap="size-200" wrap="wrap">
          <Button variant="accent" onPress={() => navigate('/dashboard')}>
            View Dashboard
          </Button>
          <Button variant="secondary" onPress={() => navigate('/module/01-layer-management')}>
            Start First Module
          </Button>
        </Flex>

        {/* Footer Note */}
        <View marginTop="size-600">
          <Text UNSAFE_style={{ fontSize: '14px', color: 'var(--spectrum-global-color-gray-700)' }}>
            Your progress is automatically saved to your browser's local storage. Use the export
            feature on the dashboard to create a backup of your progress.
          </Text>
        </View>
      </Flex>
    </View>
  );
}
