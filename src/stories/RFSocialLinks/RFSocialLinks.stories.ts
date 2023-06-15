import type { Meta, StoryObj } from "@storybook/react";
import { RFSocialLinks } from ".";
import "./RFSocialLinks.scss";

const meta = {
  title: "RF/RFSocialLinks",
  component: RFSocialLinks,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof RFSocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyRFSocialLinks: Story = { args: { listIcon: ['youtube', 'instagram', 'facebook'] } };
