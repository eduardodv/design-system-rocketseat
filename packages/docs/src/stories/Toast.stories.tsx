import type { StoryObj, Meta } from '@storybook/react'
import { Toast, Button, ToastProps } from '@eduardodv-ignite-ui/react'
import { useState } from 'react';

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => { setOpen(true) }}>
        Agendar
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Data Display/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
