import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          {/* <Col md={3}>
            <a
              href="https://www.instagram.com/_md_mafujul_hasan_/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col> */}
          {/* <Col md={3}>
            <a
              href="https://www.facebook.com/mh.tonmoy.13"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillFacebook />
              </Zoom>
            </a>
          </Col> */}
          <Col md={3}>
            <a
              href="https://github.com/goldragon57"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/albert-eng-b85671294"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="mailto:alberteng0825@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
              <FaGoogle />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
