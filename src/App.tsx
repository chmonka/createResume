

import { Route, Routes } from 'react-router-dom'
import './scss/prinсipal.scss'
import CreateResumePage from './pages/CreateResume/CreateResumePage'
import { ThemeProvider } from '@mui/material'
import theme from './Theme.ts'
import DocumentViewPage from './pages/CreateResume/DocumentViewPage.tsx'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/resumeviewform" element={<DocumentViewPage />} />
          <Route path="/" element={<CreateResumePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
