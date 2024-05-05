import Header from './components/header/Header'
import MainPage from './pages/MainPage/MainPage'
// import CreatePortfolioPage from "./pages/CreatePortfolioPage/CreatePortfolioPage";
import { Route, Routes } from 'react-router-dom'
import './scss/prinсipal.scss'
import CreateResumePage from './pages/CreateResume/CreateResumePage'
import { ThemeProvider } from '@mui/material'
import theme from './Theme.ts'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path='/createPortfolio' element={<CreatePortfolioPage />}></Route> */}
          <Route path="/createResume" element={<CreateResumePage />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
