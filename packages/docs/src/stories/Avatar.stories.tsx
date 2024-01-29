import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@eduardodv-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/eduardodv.png',
    alt: 'Eduardo Dalla Vecchia',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
