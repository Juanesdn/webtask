import { ComponentMeta, ComponentStory } from '@storybook/react';
import Slider, { ISlider } from './Slider';
import { mockSliderProps } from './Slider.mocks';

export default {
  title: 'utility/Slider',
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockSliderProps.base,
} as ISlider;
