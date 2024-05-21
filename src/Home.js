import { Container, NavDropdown, NavItem } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const home = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Projeto React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navibar-nav"/>
                    <Navbar.Collapse id="basic-navibar-nav">
                    <nav className="me-auto">
                        <nav.link href="/">Home</nav.link>
                        <NavDropdown title="Atividade" id="basic-nav-dropdow">
                            <NavItem></NavItem>
                            <NavDropdown.Item href="/Atividade-1">Atividade 1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Atividade-2">Atividade 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
);

}
export default Home;