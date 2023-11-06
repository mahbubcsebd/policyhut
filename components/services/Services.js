import services from "@/data/services";
import ctaBg from "@/public/icons/cta-bg.svg";
import servicesIcon11 from "@/public/icons/service-icon-11.svg";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import SingleServices from "./SingleService";
import styles from "./services.module.css";

const Services = () => {
  return (
      <div
          id="services"
          className="services section-pb"
      >
          <div className="servicesArea">
              <Container>
                  <Row>
                      <div className="sectionTopTitleCenter">
                          <h2 className="sectionTitle">Our Insurance Services</h2>
                      </div>
                  </Row>
                  <Row className="align-items-stretch">
                      {services.map((service, index) => (
                          <Col
                              xxl={3}
                              xl={4}
                              md={6}
                              className="mb-4"
                              key={index}
                          >
                              <SingleServices service={service} />
                          </Col>
                      ))}
                      <Col
                          lg={6}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.serviceLgBox}>
                              <div className={styles.ctaBg}>
                                  <Image
                                      src={ctaBg}
                                      alt="cta"
                                  />
                              </div>
                              <div className={styles.ctaContent}>
                                  <div className={styles.iconWrapper}>
                                      <div className={styles.iconWrapper2}>
                                          <div className={styles.iconBox}>
                                              <Image
                                                  className={styles.icon}
                                                  src={servicesIcon11}
                                                  alt="service-icon"
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <h3>Talk to our insurance experts</h3>
                                  <Link
                                      href="/contact"
                                      className="btnBlue"
                                  >
                                      Contact Us
                                  </Link>
                              </div>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default Services