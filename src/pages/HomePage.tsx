import { Button, Grid, Page, Text } from '@geist-ui/core'
import GridContainer from '@geist-ui/core/esm/grid/grid-container'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Page>
      <Page.Header>
        <Text h1 style={{ textAlign: 'center' }}>
          Choose a survey
        </Text>
      </Page.Header>
      <Page.Content>
        <GridContainer justify="center" gap={2}>
          <Grid xs={24} justify="center">
            <Link to="/survey/facility">
              <Button>Facility Survey</Button>
            </Link>
          </Grid>
          <Grid xs={24} justify="center">
            <Link to="/survey/resident">
              <Button>Resident Survey</Button>
            </Link>
          </Grid>
        </GridContainer>
      </Page.Content>
    </Page>
  )
}

export default HomePage
