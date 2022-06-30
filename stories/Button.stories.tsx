import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Atoms/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button type="primary" label="Button" />
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button type="secondary" label="Button" />
);

export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button type="terciary" label="Button" />
);
