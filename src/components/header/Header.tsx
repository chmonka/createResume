import './styles/header.scss'
import { Link } from 'react-router-dom'
import CustomContainer from '../container/CustomContainer.tsx'
import { Box,  Slide, Typography } from '@mui/material'

function Header() {
  return (
    <Box>
      <CustomContainer>
        <Typography component='h2' variant='h4'>logo</Typography>
        <Slide>
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/" className="nav-text">
                  Главная страница
                </Link>
              </li>
              <li className="nav-text">Вход</li>
            </ul>
          </nav>
        </Slide>
      </CustomContainer>
    </Box>
  )
}

export default Header
