import { Title } from '../../components/Title';
import { } from '../../components/ContactList';
import { } from '../../components/ContactCard';

type AgendaProps = {
  children: React.ReactNode
}

export function Agenda() {
  return (
       <>
        <header>
          <Title text='Agenda de Contatos' />
        </header></>
        <main>
    {/* <ContactList> */}
      {/* <ContactCard/> */}
      {/* <ContactCard/> */}
      {/* <ContactCard/> */}
    {/* </ContactList> */}
        </main>
       
       </> 

  )
}