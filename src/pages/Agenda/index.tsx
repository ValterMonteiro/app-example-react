import './styles.css'
import { Title } from '../../components/Title';
import { ContactList } from '../../components/ContactList';
import { ContactCard } from '../../components/ContactCard';
import { Children } from 'react';

type AgendaProps = {
  children: React.ReactNode
}

export function Agenda() {
  return (
    <>
      <header>
        <Title text='Agenda de Contatos' />
      </header>
      <main>
        <ContactList >
          <ContactCard
            nome='Valter'
            email='nome@email.com' />
        </ContactList>
      </main>

    </>

  )
}