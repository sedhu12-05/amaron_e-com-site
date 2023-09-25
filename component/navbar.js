import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { emailContext } from '../pages/showproduct';

function MyNav() {
    const email = useContext(emailContext)
    console.log(email)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Amaron</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#pricing">Home</Nav.Link>
                        <Nav.Link href="/showproduct">View products</Nav.Link>
                        <Nav.Link href="/mycart">My cart</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    );
}
export default MyNav;







