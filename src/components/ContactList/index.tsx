import { List } from '@mui/icons-material'

type ContactListProps = {
  children: React.ReactNode
}
export function ContactList({ children }: ContactListProps) {
  return (
    <>
      <List sx={{}}>
        {children}
      </List>
    </>
  )
}