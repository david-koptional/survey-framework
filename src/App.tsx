import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'
import SurveyPage from './pages/SurveyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/survey/:id" element={<SurveyPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  )
}

export default App
