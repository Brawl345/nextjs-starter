import { Button, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import AppHead from '@/components/shared/AppHead';

export default function Error404() {
  return (
    <Container>

      <AppHead
        pageTitle="404 Not Found"
        description="404 Error"
      />

      <Row>
        <Col className="text-center">
          <h1>404 Error</h1>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <p>This site was not found.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className="text-center">
          <Link href="/">
            <Button variant="success" size="lg">To home page</Button>
          </Link>
        </Col>
      </Row>

    </Container>
  );
}
