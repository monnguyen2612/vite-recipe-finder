import type { Meta, StoryObj } from "@storybook/react";
import { CustomLink } from "./index";
import "./CustomLink.scss";

const meta = {
  title: "Common/CustomLink",
  component: CustomLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof CustomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyCustomLink: Story = {
  args: {
    href: "https://www.cerealbio.fr/sites/default/files/Image%201_0.png",
    children: "2",
  },
};
