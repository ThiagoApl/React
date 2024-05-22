//import { Container, NavDropdown, NavItem } from "react-bootstrap";
//import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li><Link to="/Atv01"> Atividade 1</Link></li>                  
                    <li><Link to="/Atv02">Atividade 2</Link> </li>
                    <li><Link to="/Atv03">Atividade 3</Link> </li>
                    <li><Link to="/Atv04">Atividade 4</Link> </li>
                    <li><Link to="/Atv05">Atividade 5</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
/*
const Home = () => {
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
                            <NavDropdown.Item href="/atv01">Atividade 1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/atv02">Atividade 2</NavDropdown.Item>
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
*/