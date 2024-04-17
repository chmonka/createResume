
import './styles/cardText.scss'
import {FC} from "react";


interface ICardProps{
    className:string
    initialText:string
    handleBlock:(index:number,type:string) => void
    index:number
    type:string
}



const Card:FC<ICardProps> = ({ className, initialText, handleBlock, index, type }) => {

  return (
    <li className={`card-text ${className}`} onClick={() => handleBlock( index, type)}>
      <p className='text' >{initialText}</p>
    </li>
  )
}

export default Card