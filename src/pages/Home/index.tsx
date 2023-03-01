import './style.css'

import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { NavMenu } from '../../components/NavMenu'
import { Login } from '../Login'
import { Link } from 'react-router-dom'

export function Home() {


    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <div className="action-buttons">
                    <Link to={`/Login`}>
                        <Button text="Login" type='primary' />
                    </Link>
                    <Link to={`/Register`}>
                        <Button text="Criar Conta" type='primary' />
                    </Link>
                    {/* <NavMenu /> */}
                </div>
            </main>
        </>
    )

}