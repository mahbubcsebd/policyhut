"use client";

import formBg from "@/public/images/form-bg.svg";
import formImg from "@/public/images/form-left-img.png";
import Image from "next/image";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "./insuranceForm.module.css";


const InsuranceForm = () => {
      const [rangeValue, setRangeValue] = useState(50);

      const handleRangeChange = (event) => {
          setRangeValue(event.target.value);
      };
  return (
      <div
          id="insuranceForm"
          className="insuranceForm section"
      >
          <Image
              src={formBg}
              alt="form-bg"
              className="form-bg-img"
          />
          <Image
              src={formImg}
              alt="insurance form"
              className="form-img"
          />
          <div className="insuranceFormArea">
              <Container>
                  <Row>
                      <Col
                          lg={6}
                          md={12}
                          sm={12}
                      >
                          <div className="sectionContent">
                              <span className="sectionTitleSpan">
                                  Get In Touch
                              </span>
                              <h2 className="sectionTitle">
                                  Get Your Insurance Today!
                              </h2>

                              <Form
                                  action=""
                                  id="contact-form"
                                  className={`${styles.contactForm}`}
                              >
                                  <div className={`${styles.formInputWrapper}`}>
                                      <Row>
                                          <Col
                                              md={6}
                                              className="mb-4"
                                          >
                                              <Form.Label htmlFor="contact-name">
                                                  Full Name
                                              </Form.Label>
                                              <Form.Control
                                                  id="contact-name"
                                                  type="text"
                                                  name="contactName"
                                                  placeholder="Daniel Hamilton "
                                              />
                                          </Col>
                                          <Col
                                              md={6}
                                              className="mb-4"
                                          >
                                              <Form.Label htmlFor="contact-email">
                                                  Email Address
                                              </Form.Label>
                                              <Form.Control
                                                  id="contact-email"
                                                  type="email"
                                                  name="contactEmail"
                                                  placeholder="example@gmail.com"
                                              />
                                          </Col>
                                          <Col
                                              md={6}
                                              className="mb-4"
                                          >
                                              <Form.Label htmlFor="contact-number">
                                                  Phone Number *
                                              </Form.Label>
                                              <Form.Control
                                                  id="contact-number"
                                                  type="text"
                                                  name="contactNumber"
                                                  placeholder="(401) 715-3344"
                                              />
                                          </Col>
                                          <Col
                                              md={6}
                                              className="mb-4"
                                          >
                                              <Form.Label htmlFor="contact-subject">
                                                  Insurance Type
                                              </Form.Label>
                                              <Form.Select aria-label="Default select example">
                                                  <option>
                                                      Insurance Type
                                                  </option>
                                                  <option value="1">
                                                      Type One
                                                  </option>
                                                  <option value="2">
                                                      Type Two
                                                  </option>
                                                  <option value="3">
                                                      Type Three
                                                  </option>
                                              </Form.Select>
                                          </Col>
                                          <Col
                                              md={12}
                                              className="mb-4"
                                          >
                                              <Form.Label htmlFor="balance-range">
                                                  Limits of Balance
                                              </Form.Label>
                                              <input
                                                  type="range"
                                                  id="balance-range"
                                                  min="0"
                                                  max="8000"
                                                  value={rangeValue}
                                                  onChange={handleRangeChange}
                                                  className="w-100"
                                              />
                                              <div
                                                  className={
                                                      styles.rangeValueBox
                                                  }
                                              >
                                                  <p>Selected Value:</p>
                                                  <p>${rangeValue}</p>
                                              </div>
                                          </Col>
                                      </Row>
                                      <button
                                          type="submit"
                                          className="btnBlue submitBtn mt-8"
                                      >
                                          Get a Quote
                                      </button>
                                  </div>
                              </Form>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsuranceForm