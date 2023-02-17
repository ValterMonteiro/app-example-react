import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Register } from './components/Register'
import { Title } from './components/Title'

function App() {
  return (
    <div id="App">
       <header>
            <Title text='Bem vindo'/>
        </header>
        <main>
            <div className="action-buttons">
                <Button text="Login" type='primary'/>
                <Button text="Cadastro" type='default'/>
                <Input type="text" placeholder="Nome de Usuário"/>
            </div>
        </main>
    </div>
  )
}

export default App
