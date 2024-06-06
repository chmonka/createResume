import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './Theme.ts'
import MainPage from './pages/MainPage/MainPage.tsx'
import ViewDocumentPage from './pages/ViewDocumentPage/ViewDocumentPage.tsx'
import ResumeFormPage from './pages/ResumeFormPage/ResumeFormPage.tsx'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/resumeviewform" element={<ViewDocumentPage />} />
          <Route path="/resumeform" element={<ResumeFormPage />} />
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
