import './styles/button.scss'
import {FC} from "react";


interface ButtonProps{
    onClick?: () => void,
    innerText: string
    className: string
}


const Button: FC<ButtonProps> = ({onClick,innerText,className}) => {
    return (
        <button onClick={onClick} className={`button ${className}`}>{innerText}</button>
    )
}
export default Button