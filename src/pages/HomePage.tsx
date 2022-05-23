import { Button, Heading, Stack, VStack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <VStack align="stretch">
      <Heading textAlign="center">Choose a Survey</Heading>
      <Stack>
        <Button>Survey 1</Button>
        <Button>Survey 2</Button>
      </Stack>
    </VStack>
  )
}

export default HomePage
