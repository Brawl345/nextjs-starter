import Link from 'next/link';
import { useRouter } from 'next/router';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

export default function AppNavbar() {
  const router = useRouter();

  return (
    <Navbar variant="dark" className="mb-4" bg="dark" expand="lg">
      <Link href="/" passHref>
        <Navbar.Brand>Next.js Starter</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="app-navbar" />
      <Navbar.Collapse id="app-navbar">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <NavLink active={router.pathname === '/'}>Home</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink active={router.pathname === '/about'}>About</NavLink>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
