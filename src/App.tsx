import Header from './components/header/Header'
import MainPage from './pages/MainPage/MainPage'
// import CreatePortfolioPage from "./pages/CreatePortfolioPage/CreatePortfolioPage";

import { Route, Routes } from 'react-router-dom'
import './scss/prinсipal.scss'
import CreateResumePage from './pages/CreateResume/CreateResumePage'
function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />} />
        {/* <Route path='/createPortfolio' element={<CreatePortfolioPage />}></Route> */}
        <Route path='/createResume' element={<CreateResumePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
