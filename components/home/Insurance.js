import insurance1 from "@/public/icons/insurance-1.svg";
import insurance2 from "@/public/icons/insurance-2.svg";
import insurance3 from "@/public/icons/insurance-3.svg";
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./insurance.module.css";

const Insurance = () => {
  return (
      <div
          id="insurance"
          className="insurance section bgLight"
      >
          <div className="insuranceArea">
              <Container>
                  <Row className="sectionTopTitleBetween">
                      <Col lg={6}>
                          <h2 className="sectionTitle">
                              Key Features For your Insurance Business
                          </h2>
                      </Col>
                      <Col lg={6}>
                          <p className="sectionTitleText">
                              The insurance policy should provide comprehensive
                              coverage for the risks faced by the policyholders.
                              The more risks covered, the better it is for the
                              policyholder and the more competitive the
                              insurance business becomes.
                          </p>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg={4} md={6} className="mb-4">
                          <div className={styles.singleInsurance}>
                              <div className={styles.insuranceIcon}>
                                  <Image
                                      src={insurance1}
                                      alt="insurance icon"
                                  />
                              </div>
                              <div className={styles.insuranceContent}>
                                  <h3 className={styles.insuranceTitle}>
                                      Easy & Trusted, Save your Money
                                  </h3>
                                  <p className={styles.insuranceText}>
                                      The insurance policy should provide for
                                      the risks faced by the policyholders.
                                  </p>
                              </div>
                          </div>
                      </Col>
                      <Col lg={4} md={6} className="mb-4">
                          <div className={styles.singleInsurance}>
                              <div className={styles.insuranceIcon}>
                                  <Image
                                      src={insurance2}
                                      alt="insurance icon"
                                  />
                              </div>
                              <div className={styles.insuranceContent}>
                                  <h3 className={styles.insuranceTitle}>
                                      Dedicated Customer Support Team
                                  </h3>
                                  <p className={styles.insuranceText}>
                                      The insurance policy should provide for
                                      the risks faced by the policyholders.
                                  </p>
                              </div>
                          </div>
                      </Col>
                      <Col lg={4} md={6} className="mb-4">
                          <div className={styles.singleInsurance}>
                              <div className={styles.insuranceIcon}>
                                  <Image
                                      src={insurance3}
                                      alt="insurance icon"
                                  />
                              </div>
                              <div className={styles.insuranceContent}>
                                  <h3 className={styles.insuranceTitle}>
                                      Corporate Insurance Liability
                                  </h3>
                                  <p className={styles.insuranceText}>
                                      The insurance policy should provide for
                                      the risks faced by the policyholders.
                                  </p>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default Insurance