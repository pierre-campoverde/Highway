import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavLink from "../components/Atoms/Navlink";

export default {
  title: "Design System/Atoms/Links",
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

// export const Navlink: ComponentStory<typeof NavLink> = () => (
//   <NavLink label={"Hello"} />
// );

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Navlink = Template.bind({});

Navlink.args = { label: "Hello" };
