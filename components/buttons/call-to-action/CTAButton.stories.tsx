import { ComponentMeta, ComponentStory } from '@storybook/react';
import CTAButton, { ICTAButton } from './CTAButton';
import { mockCTAButtonProps } from './CTAButton.mocks';

export default {
  title: 'buttons/CTAButton',
  component: CTAButton,
  argTypes: {},
} as ComponentMeta<typeof CTAButton>;

const Template: ComponentStory<typeof CTAButton> = (args) => (
  <CTAButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCTAButtonProps.base,
} as ICTAButton;
