import { ComponentProps } from 'react'
import { ToastClose, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from './styles'
import { X } from 'phosphor-react';

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastRoot { ...props }>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X size={20} weight='light' />
        </ToastClose>
      </ToastRoot>
      
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
