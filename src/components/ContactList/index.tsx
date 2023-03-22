import './styles.css'
import { ContactCard } from '../ContactCard'
import { Input } from '../Input'

type AgendaProps = {
  children: React.ReactNode
}
export function ContactList({ children }: AgendaProps) {
  return (
    <>
      <header>
        <Input placeholder='Localizar' type='text' />
      </header>
      <main className='contactList'>
        {/* <ContactCard /> */}
        {children}
      </main>

    </>
  )
}