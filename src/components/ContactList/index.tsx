import { List } from '@mui/material'

type ContactListProps = {
  children: React.ReactNode
}
export function ContactList({ children }: ContactListProps) {
  return (
    <>
      <List>
        {children}
      </List>
    </>
  )
}