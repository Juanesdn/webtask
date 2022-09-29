import { ComponentMeta, ComponentStory } from '@storybook/react';
import Photos, { IPhotos } from './Photos';
import { mockPhotosProps } from './Photos.mocks';

export default {
  title: 'utility/Photos',
  component: Photos,
  argTypes: {},
} as ComponentMeta<typeof Photos>;

const Template: ComponentStory<typeof Photos> = (args) => <Photos {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPhotosProps.base,
} as IPhotos;
