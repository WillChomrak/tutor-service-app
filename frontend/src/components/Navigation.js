import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import logo from '../logo192.png';
// import twitter from '../img/social-twitter-white.png';
// import tiktok from '../img/social-tiktok-white.png';

const Navigation = () => {
    const navItemStyle = {fontWeight: "bold", color: "#780116ff", fontSize: "18px"};
    return (
        <div>
            <Navbar collapseOnSelect expand="md" style={{backgroundColor: "#ffee8a"}} fixed="top">
                <Container>
                <Navbar.Brand className="justify-content-center" href="/" >
                    <Image src={logo} style={{maxHeight: "30px"}}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="/" style={navItemStyle}>Home</Nav.Link>
                    <Nav.Link href="/signup" style={navItemStyle}>Sign up</Nav.Link>
                    <Nav.Link href="/booklesson" style={navItemStyle}>Book a lesson</Nav.Link>

                    </Nav>
                    {/* <Nav style={{marginLeft: "40px"}}>
                    <Nav.Link href="https://twitter.com/nonfungiblepps" ><Image src={twitter} style={{maxHeight: "30px"}}></Image></Nav.Link>
                    <Nav.Link href="https://www.tiktok.com/@nfpps?_d=secCgwIARCbDRjEFSACKAESPgo87tEdSOJ%2Fn98RNvWPwSmcmbYsOWZkV5bEFGOWsM%2FRxcDluEhn%2FQTrx2k7A%2B6wsWHPSyyJSo7JFmquO5QZGgA%3D&checksum=ed27411764ed57fb0b0ab2856fe8eafd68b5653c48c4b2ca75536b4338fd54ce&language=en&sec_uid=MS4wLjABAAAA_Tf5fLop5ilchjeHHYjVV2kNdZxZxGnCRjYnF8uT6S_TFLOsl3SNNo85z3FDd_Nj&sec_user_id=MS4wLjABAAAA_Tf5fLop5ilchjeHHYjVV2kNdZxZxGnCRjYnF8uT6S_TFLOsl3SNNo85z3FDd_Nj&share_app_id=1233&share_author_id=7030945239126410245&share_link_id=9945927E-A0A2-45FF-B986-EE915F4E68F0&tt_from=more&u_code=dlj3km2lkdif9j&user_id=7030945239126410245&utm_campaign=client_share&utm_medium=ios&utm_source=more&source=h5_m&_r=1" ><Image src={tiktok} style={{paddingLeft: "5px",maxHeight: "30px"}}></Image></Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
