import { AddressBook } from 'phosphor-react';
import { ButtonIU } from '../ButtonUI';
import './styles.css';

type MenuItemProps = {
  icon: React.ReactNode,
  text: String
}

export function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <>
      <button className='menuItem'>{icon}{text}</button>
      {/* <ButtonIU text='agenda' /> */}
    </>
  )
}