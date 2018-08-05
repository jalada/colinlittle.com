import React from 'react'
import Link from 'gatsby-link'
import { Container, Title } from 'bloomer'

const IndexPage = () => (
  <Container hasTextAlign="centered">
    <iframe src="https://giphy.com/embed/3bgFvn00K0zW8" width="480" height="188" style={{maxWidth: '100%'}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <Title isSize="4" style={{paddingTop: '1rem'}}>
      Thank you for your interest, but Colin is no longer providing consultancy
      services.
    </Title>
  </Container>
)

export default IndexPage
