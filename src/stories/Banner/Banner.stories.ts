import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Common/Banner",
  component: Banner,
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MyBanner: Story = {
  args: {
    children: `<h1>Nous acheter</h1>
    <p>Non, chez Céréal Bio, nos produits ne jouent pas à "cache-cache". Pour vous faciliter l'accès à vos produits veggies préférés, nous vous avons renseigné dans quelles enseignes les trouver 🔍</p>`,
    style: {
      backgroundImage: `url("https://www.cerealbio.fr/sites/default/files/2021-08/Groupe%2022695_0.png")`,
    },
  },
};
