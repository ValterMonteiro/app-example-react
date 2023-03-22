import './styles.css'
import { Button } from '../Button';

type ContactCardProps = {
  nome: String,
  email: String,
  /* children: React.ReactNode */

}

export function ContactCard({ nome, email/* , children  */ }: ContactCardProps) {


  return (
    <>
      <section className="container">
        <img src="#" alt="" />
        <div className='dadosContatos'>
          <div>
            {nome}
          </div>
          <div>
            {email}
            { }
          </div>
          <div>
            {/* {children} */}
            <Button text="Detalhes" type='primary' />
          </div>
        </div>
      </section>
    </>
  )
}