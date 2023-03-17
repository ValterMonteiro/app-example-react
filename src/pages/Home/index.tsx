import './style.css'

import { Button } from '../../components/Button'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'
import { AddressBook, ImageSquare } from 'phosphor-react'

export function Home() {


    return (
        <>
            <header>
                <Title text='Bem vindo' />
            </header>
            <main>
                <Menu>
                    <Link to={`/Agenda`}>
                        <MenuItem icon={<AddressBook size={24} />} text='Agenda' />
                    </Link>
                    <Link to={`/Gallery`}>
                        <MenuItem icon={<ImageSquare size={24} />} text='Galeria' />
                        {/* <Button text="Veja a galeria" type='primary' /> */}
                    </Link>
                </Menu>
                {/* <div className="action-buttons">
                    <Link to={`/Login`}>
                        <Button text="Login" type='primary' />
                    </Link>
                    <Link to={`/Register`}>
                        <Button text="Criar Conta" type='primary' />
                    </Link>
                </div> */}
            </main>
        </>
    )

}