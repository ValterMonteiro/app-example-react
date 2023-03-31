import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { MenuItem } from '../../components/MenuItem'
import { AddressBook, ImageSquare } from 'phosphor-react'
import { BaseLayout } from '../../Layout/BaseLayout'

export function Home() {
    return (
        <BaseLayout appBarTitle='Dashboard'>
            <Menu>
                <Link to={`/Contacts`}>
                    <MenuItem icon={<AddressBook size={24} />} text='Agenda' />
                </Link>
                <Link to={`/Gallery`}>
                    <MenuItem icon={<ImageSquare size={24} />} text='Galeria' />
                </Link>
            </Menu>
        </BaseLayout>
    )
}