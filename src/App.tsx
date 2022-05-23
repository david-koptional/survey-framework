import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/survey/:id" element={<SurveyPage />} />
    </Routes>
  )
}

export default App
