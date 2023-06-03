import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsCart } from 'react-icons/bs'

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-dark" size='sm' className='d-flex align-items-center px-3'>
            <span>Cart</span>
            <BsCart className='ms-2'/>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

function Header() {
  return (
    <div className='text-center container-fluid bg-dark text-light py-5'>
      <div className='fs-1'>Shop in style</div>
      <div className='fs-5'>Lorem ipsum dolor sit amet.</div>
    </div>
  )
}

function ItemCard({ title, price, itemSold}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src='src/assets/dummy-img.jpg'/>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in risus sapien. Vestibulum elementum enim turpis, eu pretium tortor porttitor imperdiet.</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>RM { price }</Card.Text>
          <Card.Text>{ itemSold } Sold</Card.Text>
        </div>
      </Card.Body>
    </Card>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <ItemCard title={"T-shirt"} price={'5.00'} itemSold={10} />
    </div>
  )
}

export default App
