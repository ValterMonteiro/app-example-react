import './style.css'

type InputProps = {
    type:"text"|"email"|"password",
    placeholder:string
}

export function Input(props:InputProps){
    return(        
        <input className={`input-${props.placeholder} {props.type}`} />
        
    )
}