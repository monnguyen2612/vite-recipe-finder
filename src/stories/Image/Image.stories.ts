import type { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";
import "./Image.scss";

const meta = {
  title: "Common/Image",
  component: Image,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyImage: Story = { args: { src: 'https://www.cerealbio.fr/sites/default/files/Image%201_0.png'} };
