import { Route, Routes } from 'react-router-dom'
import CreateResumePage from './pages/CreateResume/CreateResumePage'
import { ThemeProvider } from '@mui/material'
import theme from './Theme.ts'
import MainPage from './pages/MainPage/MainPage.tsx'
import ViewDocumentPage from './pages/ViewDocumentPage/ViewDocumentPage.tsx'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/resumeviewform" element={<ViewDocumentPage />} />
          <Route path="/resumeform" element={<CreateResumePage />} />
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
