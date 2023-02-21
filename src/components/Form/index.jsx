import './style.css'

import { Title } from '../Title'
import { Input } from '../Input'
import { Button } from '../Button'

export function Form() {
    return (
        <form>
            <Title text='Criar Conta' />
            <Input placeholder='Nome de Usuário' type='text' />
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Senha' type='password' />
            <Input placeholder='Confirmar Senha' type='password' />
            <Button text='criar conta' type='primary' />
        </form>
    )
}