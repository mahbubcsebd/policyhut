import insurance from "@/public/icons/insurance.svg";
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from "./insurance.module.css";

const InsurancePayment = () => {
  return (
      <div
          id="insurancePayment"
          className="insurancePayment section"
      >
          <div className="insurancePaymentArea">
              <Container>
                  <Row className="justify-content-center">
                      <Col md={8}>
                          <div className={styles.insuranceBox}>
                              <div className={styles.insuranceTopBar}>
                                  <div className={styles.insuranceTitleBar}>
                                      <h2 className={styles.insuranceTitle}>
                                          Insurance Payment
                                      </h2>
                                      <Image
                                          src={insurance}
                                          alt="insurance"
                                      />
                                  </div>
                                  <div className={styles.contentTitle}>
                                      <h3>Please Select Payment Channel</h3>
                                  </div>
                                  <div className="divider"></div>
                              </div>
                              <div className={styles.insuranceContent}>
                                  <div className={styles.paymentMethod}>
                                      <Form>
                                          <div className="mb-4">
                                              <Form.Check
                                                  type="radio"
                                                  id="payment-mobile"
                                                  name="paymentMethod"
                                                  label="Online Payment Through Cards/Mobile Banking"
                                              />
                                          </div>
                                          <div className="mb-4">
                                              <Form.Check
                                                  type="radio"
                                                  id="payment-bank"
                                                  name="paymentMethod"
                                                  label="Payment Through Online Banking"
                                              />
                                          </div>
                                          <div className="mt-5">
                                              <button
                                                  type="submit"
                                                  className="btnBlue submitBtn mt-4"
                                              >
                                                  Continue
                                              </button>
                                          </div>
                                      </Form>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsurancePayment