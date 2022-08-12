import {
  Card,
  CardContent,
  Container,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'

function Landing() {
  const subdomains = {
    docs: "Docs",
    demo: "GitHub Search Demo",
    json: "C JSON API",
    meet: "Google Meet Clone",
    todo: "To Do (React toy)",
  }
  const proto = window.location.protocol
  const domain = window.location.hostname.split('.').reverse().slice(0, 2).reverse().join('.')
  return (
    <Container maxWidth='xs'>
      <Stack spacing={1}>
        <Card>
          <CardContent>
            <Typography variant='h4'>Links</Typography>
            <List>
              {Object.entries(subdomains).map(([subdomain, label], i) =>
                <ListItem id={`subdomain-${i}`}>
                  <Link
                    href={`${proto}//${subdomain}.${domain}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {label}
                  </Link>
                </ListItem>
              )}
            </List>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}

export default Landing
