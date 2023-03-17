import { Button } from '../Button';

type ContactCardProps = {
  nome: String,
  children: React.ReactNode

}

export async function ContactCard() {

  let response = await fetch(`https://randomuser.me/api/json`);

  let dadosContato = await response.json();

  return (
    <>
      <section className="contato">
        <p>nome: {dadosContato.name}</p>
        <Button text="Detalhes" type='primary' />

      </section>
    </>
  )
}