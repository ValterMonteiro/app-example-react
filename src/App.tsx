import './App.css'

import { Button } from './components/Button'
import { Title } from './components/Title'
import { Form } from './components/Form'

function App() {
  return (
    <div id="App">
      <header>
        <Title text='Bem vindo' />
      </header>
      <main>
        <div className="action-buttons">
          <Button text="Login" type='primary'/>
          <Button text="Cadastro" type='default'/>
        </div>
        <div className='form-container'>
          <Form/>
        </div>
      </main>
    </div>
  )
}

export default App
