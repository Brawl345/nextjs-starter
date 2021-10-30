import { Col, Container, Row } from 'react-bootstrap';
import AppHead from '@/components/shared/AppHead';

export default function Home() {
  return (
    <Container>
      <AppHead pageTitle="Home" description="Welcome!" />

      <Row>
        <Col>
          <div className="p-3 bg-secondary text-white">
            <h1>Welcome to Next.js Starter!</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
