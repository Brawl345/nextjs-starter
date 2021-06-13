import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import AppHead from '@/components/shared/AppHead';

export default function Home() {
  return (
    <Container>
      <AppHead pageTitle="Home" description="Welcome!" />

      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome to Next.js Starter!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
