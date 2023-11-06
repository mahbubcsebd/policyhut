import line1 from "@/public/icons/line-1.png";
import line2 from "@/public/icons/line-2.png";
import services1 from "@/public/images/services-1.png";
import services2 from "@/public/images/services-2.png";
import services3 from "@/public/images/services-3.png";
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./homeServices.module.css";

const HomeServices = () => {
  return (
      <div
          id="services"
          className="services section-pb"
      >
          <div className="servicesArea">
              <Container>
                  <Row>
                      <div className="sectionTopTitleCenter">
                          <h2 className="sectionTitle">
                              A great insurance plan with great benefits.
                          </h2>
                      </div>
                  </Row>
                  <Row>
                      <Col
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.singleServices}>
                              <div className={styles.servicesImage}>
                                  <Image
                                      src={services1}
                                      alt="services icon"
                                  />
                                  <div className={styles.stepBox}>
                                      <div className={styles.step}>Step 01</div>
                                  </div>

                                  <Image
                                      className={styles.line}
                                      src={line1}
                                      alt="line"
                                  />
                              </div>
                              <div className={styles.servicesContent}>
                                  <h3 className={styles.servicesTitle}>
                                      Choose Insurance
                                  </h3>
                                  <p className={styles.servicesText}>
                                      Permanent life insurance is a type of that
                                      provides coverage entire lifetime.
                                  </p>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.singleServices}>
                              <div className={styles.servicesImage}>
                                  <Image
                                      src={services2}
                                      alt="services icon"
                                  />
                                  <div className={styles.stepBox}>
                                      <div className={styles.step}>Step 01</div>
                                  </div>

                                  <Image
                                      className={styles.line}
                                      src={line2}
                                      alt="line"
                                  />
                              </div>
                              <div className={styles.servicesContent}>
                                  <h3 className={styles.servicesTitle}>
                                      Choose Insurance
                                  </h3>
                                  <p className={styles.servicesText}>
                                      Permanent life insurance is a type of that
                                      provides coverage entire lifetime.
                                  </p>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.singleServices}>
                              <div className={styles.servicesImage}>
                                  <Image
                                      src={services3}
                                      alt="services icon"
                                  />
                                  <div className={styles.stepBox}>
                                      <div className={styles.step}>Step 01</div>
                                  </div>
                              </div>
                              <div className={styles.servicesContent}>
                                  <h3 className={styles.servicesTitle}>
                                      Choose Insurance
                                  </h3>
                                  <p className={styles.servicesText}>
                                      Permanent life insurance is a type of that
                                      provides coverage entire lifetime.
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

export default HomeServices;