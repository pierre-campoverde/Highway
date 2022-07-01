import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Body from "../components/Atoms/Body";

export default {
  title: "Design System/Atoms/Text",
  component: Body,
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Text = Template.bind({});
Text.args = {
  content: "highway car",
};
