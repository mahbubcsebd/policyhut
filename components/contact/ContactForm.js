import { Col, Container, Form, Row } from "react-bootstrap";
import Map from "../map/GoogleMap";

const ContactForm = () => {
  return (
      <div className="contactFormArea">
          <Container>
              <Form
                  action=""
                  id="contact-form"
                  className="contactForm"
              >
                  <Row>
                      <Col
                          md={6}
                          className="mb-4"
                      >
                          <Form.Label htmlFor="contact-name">
                              Full Name <span>*</span>
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
                          <Form.Label htmlFor="contact-number">
                              Phone Number <span>*</span>
                          </Form.Label>
                          <Form.Control
                              id="contact-number"
                              type="text"
                              name="contactNumber"
                              placeholder="(401) 715-3344"
                          />
                      </Col>
                      <Col
                          md={12}
                          className="mb-4"
                      >
                          <Form.Label htmlFor="contact-email">
                              Email Address <span>*</span>
                          </Form.Label>
                          <Form.Control
                              id="contact-email"
                              type="email"
                              name="contactEmail"
                              placeholder="example@gmail.com"
                          />
                      </Col>
                      <Col
                          md={12}
                          className="mb-4"
                      >
                          <Form.Label htmlFor="contact-email">
                              Message <span>*</span>
                          </Form.Label>
                          <Form.Control
                              id="comment-message"
                              as="textarea"
                              name="commentMessage"
                              rows={3}
                              placeholder="Write Your Comment"
                          />
                      </Col>
                      <div>
                          <Form.Check
                              type="checkbox"
                              id="comment-checkbox"
                              label="You agree to our friendly privacy policy."
                          />
                      </div>
                  </Row>
                  <button
                      type="submit"
                      className="btnBlue submitBtn w-100 text-center mt-5"
                  >
                      Send Message
                  </button>
              </Form>
              <div className="aaa">
                  <Map />
              </div>
          </Container>
      </div>
  );
}

export default ContactForm