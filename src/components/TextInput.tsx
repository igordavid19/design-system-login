import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
  <div className=' flex items-center gap-3 h-12 py-4 px-3 rounded focus-within:ring-2 ring-cyan-300'>
    {props.children}
  </div>
  )
}


TextInputRoot.displayname = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return(
    <Slot className='w6 h-6 text-gray-800'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayname = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 bg-gray-500 w-full text-gray-800 text-xs placeholder:text-black "
      {...props}
    />
  )
}


TextInputInput.displayname = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}