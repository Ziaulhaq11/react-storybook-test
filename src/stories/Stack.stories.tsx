import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

type StoryProps = ComponentProps<typeof Stack> & {
  numberofChildren: number;
};

const meta: Meta<StoryProps> = {
  component: Stack,
  tags : ["autodocs"],
  argTypes: {
    numberofChildren: {
      options: [1, 5, 10],
      control: {
        type: "select",
      },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    numberofChildren: 5, //It will be initial value
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberofChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberofChildren)}</Stack>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberofChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberofChildren)}</Stack>
  ),
};

function createChildren(numberofChildren: number) {
  return Array(numberofChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        />
      );
    });
}
