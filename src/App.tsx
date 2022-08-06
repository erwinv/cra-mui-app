import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  keyframes,
  Link,
  Stack,
  Typography,
} from '@mui/material'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

function App() {
  return (
    <Container maxWidth='xs'>
      <Stack>
        <Card>
          <CardMedia
            component='img'
            image='/logo.svg'
            alt='logo'
            sx={{
              animation: `${spin} infinite 20s linear`
            }}
          />
          <CardContent>
            <Typography>
              Edit <code>src/App.tsx</code> and save to reload.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}

export default App;
