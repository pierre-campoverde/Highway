import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Subheading from "../components/Atoms/Subheading";

export default {
  title: "Design System/Atoms/Text",
  component: Subheading,
} as ComponentMeta<typeof Subheading>;

const Template: ComponentStory<typeof Subheading> = (args) => (
  <Subheading {...args} />
);

export const H2 = Template.bind({});
H2.args = {
  blackText: "Hello",
  redText: "World",
};
