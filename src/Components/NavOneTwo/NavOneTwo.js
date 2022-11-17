import React from "react";
import { Container, Row, Col,NavDropdown  } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink } from "react-router-dom";
import logo from "../../images/logo.png"
const NavOneTwo = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container >
            <Row className="justify-content-md-between align-items-center w-100 justify-content-center">
  
            
              <Col md={6} sm={12} >
                <Nav className="align-items-center justify-content-md-start justify-content-center ">
                  <Nav.Link href="#instagram">
                    <i className="fab fa-instagram"></i>
                  </Nav.Link>
                  <Nav.Link href="#twitter">
                    <i className="fab fa-twitter"></i>
                  </Nav.Link>
                  <Nav.Link href="#whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </Nav.Link>
                  <Nav.Link href="#phone">
                    
                      <i className="fas fa-phone-alt mx-2"></i> +996-123 456 789
                    
                  </Nav.Link>
                </Nav>
              </Col>
              <Col md={6} sm={12}>
                <Nav className=" justify-content-md-end justify-content-center ">
                  <Nav.Link href="#user">
                    تسيجيل الدخول
                    <i className="far fa-user mx-2"></i>
                  </Nav.Link>
                  <Nav.Link href="#NewUser">
                    تسيجيل جديد
                    <i className="fas fa-user-plus ms-3 me-1"></i>
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <Navbar bg="light" dir="rtl" expand="lg">
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink to="/" className="navbar-brand"><img src={logo} height="70" alt=""/></NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to='/' >الرئيسية</NavLink>
              <NavLink className="nav-link" to='/about'> من نحن</NavLink>
              <NavLink className="nav-link" to='/services'>الخدمات</NavLink>
              <NavDropdown title="الجاليري" id="basic-nav-dropdown">
              <NavLink className="dropdown-item" to='/images'>  الجاليري / معرض الصور</NavLink>
              <NavLink className="dropdown-item" to='/videos'>الجاليري / معرض الفديوهات </NavLink>
              </NavDropdown>
            </Nav>
            <Nav className="me-auto fw-bolder">
              <NavLink className="nav-link" to='/conditionsQuestions' >الأسئلة الشائعة</NavLink>
              <NavLink className="nav-link" to='/conditions'>الشروط والاحكام</NavLink>
              <NavLink className="nav-link" to='/contactUs'>تواصل معنا</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}
export default NavOneTwo;