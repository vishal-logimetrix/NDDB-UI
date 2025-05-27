import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/nddb_logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const isMobile = window.innerWidth < 992;

  const handleNavClick = () => {
    if (isMobile) handleClose();
  };

  return (
    <Navbar expand="lg" className="headerContainer" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="logoContainer">
          <img src={logo} alt="NDDB Logo" className="logo" />
        </Navbar.Brand>

        {/* Toggle for offcanvas only visible on mobile */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} style={{ background: '#fff'}} />

        {/* Desktop navbar */}
        <Navbar.Collapse id="navbarScroll" className="navbarLinks d-none d-lg-flex rounded">
          <Nav className="mx-auto navItems" navbarScroll>
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Nav.Link>
            <NavDropdown title="Our Area Of Expertise" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/milk-producer" className={location.pathname === '/milk-producer' ? 'active' : ''}>Milk Producer Org.</Nav.Link>
            <Nav.Link as={Link} to="/seamen-station" className={location.pathname === '/seamen-station' ? 'active' : ''}>Seamen Station</Nav.Link>
            <Nav.Link as={Link} to="/new-initiative" className={location.pathname === '/new-initiative' ? 'active' : ''}>New Initiative</Nav.Link>
            <Nav.Link as={Link} to="/publications" className={location.pathname === '/publications' ? 'active' : ''}>Publications</Nav.Link>
            <Nav.Link as={Link} to="/career" className={location.pathname === '/career' ? 'active' : ''}>Careers</Nav.Link>
            <Nav.Link as={Link} to="/tenders" className={location.pathname === '/tenders' ? 'active' : ''}>Tenders</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''}>Contact Us</Nav.Link>
          </Nav>
          <div className="navIcons d-flex">
            <div className="icon-box icon-box-bell">
              <i className="ri-notification-2-fill"></i>
            </div>
            <div className="icon-box icon-box-user" style={{
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px' 
            }}>
              <i className="ri-user-fill text-white"></i>
            </div>
          </div>
        </Navbar.Collapse>

        {/* Offcanvas for mobile */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={showOffcanvas}
          onHide={handleClose}
          className="d-lg-none offcanvasCustom"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="NDDB Logo" className="logo" style={{ height: '60px' }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navItems flex-grow-1">
              <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleNavClick}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''} onClick={handleNavClick}>About Us</Nav.Link>
              <NavDropdown title="Our Area Of Expertise" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" onClick={handleNavClick}>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" onClick={handleNavClick}>Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" onClick={handleNavClick}>Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/milk-producer" className={location.pathname === '/milk-producer' ? 'active' : ''} onClick={handleNavClick}>Milk Producer Org.</Nav.Link>
              <Nav.Link as={Link} to="/seamen-station" className={location.pathname === '/seamen-station' ? 'active' : ''} onClick={handleNavClick}>Seamen Station</Nav.Link>
              <Nav.Link as={Link} to="/new-initiative" className={location.pathname === '/new-initiative' ? 'active' : ''} onClick={handleNavClick}>New Initiative</Nav.Link>
              <Nav.Link as={Link} to="/publications" className={location.pathname === '/publications' ? 'active' : ''} onClick={handleNavClick}>Publications</Nav.Link>
              <Nav.Link as={Link} to="/career" className={location.pathname === '/career' ? 'active' : ''} onClick={handleNavClick}>Careers</Nav.Link>
              <Nav.Link as={Link} to="/tenders" className={location.pathname === '/tenders' ? 'active' : ''} onClick={handleNavClick}>Tenders</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''} onClick={handleNavClick}>Contact Us</Nav.Link>
            </Nav>
            <div className="navIcons d-flex mt-3">
              <div className="icon-box icon-box-bell">
                <i className="ri-notification-2-fill"></i>
              </div>
              <div className="icon-box icon-box-user" style={{
                borderRadius: 'none'
              }}>
                <i className="ri-user-fill text-white"></i>
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
