import './styles.css'
import { Button } from '../Button';
import { Contact } from '../../Types';

type ContactCardProps = {
  contactData: Contact,
}


export function ContactCard({ contactData }: ContactCardProps) {
  const { name, email, picture } = contactData;
  return (
    <>
      <section className="contactCard">
        <div>
          <img src={picture.medium} alt="" />
        </div>
        <div className='dadosContatos'>
          <div>
            <p>{name.first}</p>
            <p>{email}</p>
            <Button text="Detalhes" type='primary' />
          </div>
        </div>
      </section>
    </>
  )
}