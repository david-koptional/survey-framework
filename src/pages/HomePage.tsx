import { Button } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Choose a survey</h1>

      <Link to="/survey/survey1">
        <Button>Survey 1</Button>
      </Link>
      <Link to="/survey/survey2">
        <Button>Survey 1</Button>
      </Link>
    </div>
  )
}

export default HomePage
