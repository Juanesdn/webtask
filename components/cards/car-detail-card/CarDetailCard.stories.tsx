import { ComponentMeta, ComponentStory } from '@storybook/react';
import CarDetailCard, { ICarDetailCard } from './CarDetailCard';
import { mockCarDetailCardProps } from './CarDetailCard.mocks';

export default {
  title: 'cards/CarDetailCard',
  component: CarDetailCard,
  argTypes: {},
} as ComponentMeta<typeof CarDetailCard>;

const Template: ComponentStory<typeof CarDetailCard> = (args) => (
  <CarDetailCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockCarDetailCardProps.base,
} as ICarDetailCard;
