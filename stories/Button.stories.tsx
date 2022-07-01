import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Atoms/Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: "primary", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { type: "secondary", label: "Button" };

export const Tertiary = Template.bind({});
Tertiary.args = { type: "terciary", label: "Button" };
