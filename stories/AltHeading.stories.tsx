import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AltHeading from "../components/Atoms/AltHeading";

export default {
  title: "Design System/Atoms/Text",
  component: AltHeading,
} as ComponentMeta<typeof AltHeading>;

const Template: ComponentStory<typeof AltHeading> = (args) => (
  <AltHeading {...args} />
);

export const H3 = Template.bind({});

H3.args = {
  label: "Hello world",
};
