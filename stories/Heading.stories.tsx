import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "../components/Atoms/Heading";

export default {
  title: "Design System/Atoms/Text",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  blackText: "Hello this is",
  redText: "highway car",
};
