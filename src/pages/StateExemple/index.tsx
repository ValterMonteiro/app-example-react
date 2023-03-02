import './styles.css'

export function StateExemple() {
    console.log('renderizou');
    let name = 'Caio';

    function handleInput(event){
        name = event.target.value;
        console.log(name);
    }

    return (
        <>
            <input onInput={handleInput} className='inputName' type="text" />
            <h1>{`Olá ${name}`}</h1>
        </>
    );
}