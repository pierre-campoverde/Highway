import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SocialmediaLink from "../components/Atoms/SocialmediaLink";

export default {
  title: "Design System/Atoms/Links",
  component: SocialmediaLink,
} as ComponentMeta<typeof SocialmediaLink>;

const Template: ComponentStory<typeof SocialmediaLink> = (args) => (
  <SocialmediaLink {...args} />
);

export const Instagram = Template.bind({});
Instagram.args = {
  to: "/",
  platform: "instagram",
};
export const Facebook = Template.bind({});
Facebook.args = {
  to: "/",
  platform: "facebook",
};
export const Twitter = Template.bind({});
Twitter.args = {
  to: "/",
  platform: "twitter",
};
