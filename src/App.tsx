import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';
import { Envelope, Lock } from 'phosphor-react';

export function App() {

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-gray-500 flex-col">
      <header className='flex flex-col items-center'>
      <Logo />

      <Heading size="lg" className='mt-4'>
        Dev System
      </Heading>

      <Text size="lg" className='mt-1'>
        Faça login agora e comece!
      </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='usuario@example.com' />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='*********' />
          </TextInput.Root>

          <Button type='submit' className='mt-4'>ENTRAR</Button>
        </label>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
        <a href="" className='text-gray-500 underline hover:text-white'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
        <a href="" className='text-gray-500 underline hover:text-white'>Não possui conta? Cadastre-se</a>
        </Text>
      </footer>
    </div>
  )
}
