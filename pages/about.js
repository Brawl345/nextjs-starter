import { Card, Col, Container, Row } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Card bg="info" text="light">
            <Card.Header as="h5">What is Next.js Starter?</Card.Header>
            <Card.Body>
              Next.js Starter is a template to quickly get started with Next.js.
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
