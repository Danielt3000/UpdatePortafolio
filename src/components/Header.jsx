import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar collapseOnSelect key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <span className="font-primary">P</span>ortfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Collapse
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link className="colorA " href="#about">
                    About
                  </Nav.Link>
                  <Nav.Link className="colorA" href="#project">
                    Projects
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;
