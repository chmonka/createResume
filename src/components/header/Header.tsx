import './styles/header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <h2 className='nav-text'>logo</h2>
        <nav>
          <ul className='navigation'>
            <li>
              <Link to='/' className='nav-text'>
                Главная страница
              </Link>
            </li>
            <li className='nav-text'>Вход</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header
