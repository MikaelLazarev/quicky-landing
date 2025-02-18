/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export function Footer() {
  return (
    <footer className={"footer-container"}>
      <CookieConsent
        location="bottom"
        buttonText="Yes, I consent"
        cookieName="cookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "16px", minWidth: "150px", borderRadius: "5px" }}
        buttonWrapperClasses={"consent-button"}
        expires={150}
      >
        🍪 We need to talk about cookies! 🍪<br/>
        <span style={{ fontSize: "13px", lineHeight: 1 }}>
          Quicky and its partners use cookies to operate the website and
          platform, for analytical purposes, and for advertising/targeting
          purposes. You can learn more about our use of cookies in Our Privacy
          Policy. Using cookies helps us provide a better experience tailored to
          your needs. By clicking “Yes, I consent” below, you agree to our use
          of analytics and advertising/targeting cookies. You can opt out of our
          use of certain cookies at any time by following the instructions in
          Our Privacy Policy.
        </span>
      </CookieConsent>
      <div className={"footer-content"}>
        <Container className="container_block">
          <Row>
            <Col
              lg={{ span: 5, order: "first" }}
              md={{ span: 12, order: "last" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
            >
              <Link href="/">
                <img
                  src={"/logo.png"}
                  height={35}
                  alt={"Logo"}
                  style={{ marginBottom: "15px" }}
                />
              </Link>
              <p>
                &copy; Copyright 2020 Quicky for Quickbase
                <br />
                All rights reserved
              </p>
            </Col>
            <Col lg={2} md={4} sm={4} xs={12} style={{ paddingBottom: "20px" }}>

            </Col>
            <Col lg={2} md={4} sm={4} xs={12} style={{ paddingBottom: "20px" }}>
              <h5> Legal </h5>
              <ul>
                <li>
                  <Link href={"/privacy"}>
                    <a>Privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href={"/terms"}>
                    <a>Terms</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={4} sm={4} xs={12} style={{ paddingBottom: "40px" }}>
              <h5> Follow Us </h5>
              {/*<a*/}
              {/*  className="button-social twitter"*/}
              {/*  aria-label="quicky on Twitter"*/}
              {/*  href="https://www.instagram.com/quicky/"*/}
              {/*></a>*/}
              <a
                className="button-social facebook"
                aria-label="quicky on Facebook"
                href="https://www.facebook.com/quickyHQ/"
              ></a>
              {/*<a*/}
              {/*  className="button-social linkedin"*/}
              {/*  aria-label="quicky on LinkedIn"*/}
              {/*  href="https://www.instagram.com/quicky/"*/}
              {/*></a>*/}
              {/*<a*/}
              {/*  className="button-social instagram"*/}
              {/*  aria-label="quicky on Instagram"*/}
              {/*  href="https://www.instagram.com/quicky/"*/}
              {/*></a>*/}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
