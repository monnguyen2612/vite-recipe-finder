import type { Meta, StoryObj } from "@storybook/react";
import { RFInputForm } from ".";
import "./RFInputForm.scss";

const meta = {
  title: "RF/RFInputForm",
  component: RFInputForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof RFInputForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MyRFInputForm: Story = { args: {}};
