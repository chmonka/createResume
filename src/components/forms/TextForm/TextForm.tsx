import './styles/styles.scss'
import { ChangeEvent, FC } from 'react'

interface ITextFormProps {
  align: string
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeSelect: (align: string) => void
}

const TextForm: FC<ITextFormProps> = ({ value, onChange, onChangeSelect }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeSelect(e.target.value)
  }

  return (
    <div className='text-form'>
      <div className='text-form__layout'>
        <label htmlFor='' className='text'>
          Расположение
        </label>
        <select name='city' className='text-form__select' id='city-select' onChange={handleChange}>
          <option value='left'>Слева</option>
          <option value='center'>Центр</option>
          <option value='right'>Справа</option>
        </select>
      </div>
      <div className='text-form__content'>
        <h2 className='text'>Контент</h2>
        <textarea
          className='text-form__textarea'
          value={value}
          onChange={onChange}
          placeholder='Введите текст'
        ></textarea>
      </div>
    </div>
  )
}

export default TextForm
