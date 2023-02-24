import './style.css'

import { Button } from '../../components/Button'
import { Title } from '../../components/Title'

export function Home() {
    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <div className="action-buttons">
                    <Button text="Login" type='primary' />
                    <Button text="Criar Conta" type='primary' />
                </div>
            </main>
        </>
    )

}