import { ComponentMeta, ComponentStory } from '@storybook/react';
import CarDetail, { ICarDetail } from './CarDetail';
import { mockCarDetailProps } from './CarDetail.mocks';

export default {
  title: 'utility/CarDetail',
  component: CarDetail,
  argTypes: {},
} as ComponentMeta<typeof CarDetail>;

const Template: ComponentStory<typeof CarDetail> = (args) => (
  <CarDetail {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCarDetailProps.base,
} as ICarDetail;
