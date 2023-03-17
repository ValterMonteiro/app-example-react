import { Input } from '../Input'
import { Title } from '../Title'


type AgendaProps = {
  children: React.ReactNode
}
export function ContactList() {
  return (
    <>
      <header>
      </header>
      <main>
        <Input placeholder='Localizar' type='text' />
        {/* <Contato /> */}

      </main>

    </>
  )
}