import { ContactList } from '../../components/ContactList';
import { ContactCard } from '../../components/ContactCard';
import { useEffect, useState } from 'react';
import { getContacts } from '../../services/api';
import { Contact } from '../../Types';
import { BaseLayout } from '../../Layout/BaseLayout';
import { TextField, CircularProgress } from '@mui/material';

export function Contacts() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const filteredContacts = () => {

  }

  useEffect(() => {
    async function listContacts() {
      setIsLoading(true)
      setContacts(await getContacts())
      setIsLoading(false)
    }
    listContacts();
  }, [])
  return (
    <BaseLayout appBarTitle='Agenda de Contatos'>

      <TextField variant='outlined' fullWidth />

      {/* logica boolean para renderizar ou a loading ou a contactList */}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ContactList >

          {
            contacts.map(contact => {
              return <ContactCard key={contact.login.uuid} contactData={contact} />
            })
          }
        </ContactList>
      )
      }
    </BaseLayout>
  );
}