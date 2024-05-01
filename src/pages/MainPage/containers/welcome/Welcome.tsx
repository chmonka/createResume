import './styles/welcome.scss'
import Button from '../../../../components/buttons/Button.js'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <section className='welcome'>
      <div className='container'>
        <div className='welcome_desc'>
          <h2 className='title'>Создание вашего портфолио</h2>
          <p className='text'>Займет всего несколько минут вашего времени</p>
        </div>
        <Link to='/createResume'>
          <Button className='button' innerText={'Сделать портфолио'} />
        </Link>
      </div>
    </section>
  )
}
export default Welcome
