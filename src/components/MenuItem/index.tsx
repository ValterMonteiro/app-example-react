import './styles.css';

type MenuItemProps = {
  icon: React.ReactNode,
  text: String
}

export function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <>
      <button className='menuItem'>
        {icon}{text}
      </button>
    </>
  )
}