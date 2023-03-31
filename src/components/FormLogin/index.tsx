import './style.css'

import { Input } from '../Input'

export function FormLogin() {
    return (
        <form action="">
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Senha' type='password' />
        </form>

    )
}