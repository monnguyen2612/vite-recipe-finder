import type { Meta, StoryObj } from "@storybook/react";
import { RFLogo } from ".";
import "./RFLogo.scss";

const meta = {
  title: "RF/RFLogo",
  component: RFLogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof RFLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyRFLogo: Story = { args: { src: 'https://www.cerealbio.fr/sites/default/files/Image%201_0.png'} };

