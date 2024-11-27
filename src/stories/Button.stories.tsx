import { ComponentProps } from "react";
import { Button } from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import {fn} from "@storybook/test"

// type StoryProps = ComponentProps<typeof Button>; //ComponentProps takes all of the prop types of the given Component
type StoryProps = ComponentProps<typeof Button> & {
  //For children based on type we'll add new type
  buttonText: string;
};
const meta: Meta<StoryProps> = {
  component: Button,
  tags : ["autodocs"],
  argTypes: {
    variant: {
      options : ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type  : "select"
      }
    }
  },
  args: {
    onClick : fn()
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const Secondary: Story = {
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

/*export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Test", //Two ways to render children
  },
  // render: (args) => <Button {...args}>Test</Button>,
  render: (args) => <Button {...args}/>
};*/
