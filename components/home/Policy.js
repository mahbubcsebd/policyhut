"use client"

import policyImg from '@/public/images/policyImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from "./policy.module.css";

const Policy = () => {
  return (
      <div
          id="policy"
          className="policy section"
      >
          <div className="policyArea">
              <Container>
                  <Row className="align-items-center">
                      <Col lg={6}>
                          <div className="sectionImage d-none d-lg-block">
                              <Image
                                  src={policyImg}
                                  alt="policy image"
                                  className="policyImg"
                              />
                          </div>
                      </Col>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  We provide the best insurance policy
                              </h2>
                              <div className="sectionImage pb-4 d-lg-none">
                                  <Image
                                      src={policyImg}
                                      alt="policy image"
                                      className="policyImg"
                                  />
                              </div>
                              <p className="sectionText mb-2">
                                  we are committed to providing our customers
                                  with high-quality insurance products and
                                  exceptional customer service. Since our
                                  founding in 1985, we have worked hard to
                                  establish ourselves as a trusted insurance
                                  industry.
                              </p>
                              <p className="sectionText mb-4">
                                  We take the time to understand our clients
                                  goals and concerns, and we work closely with
                                  them to identify the coverage options that
                                  will best meet.
                              </p>
                              <div className={styles.customerCollections}>
                                  <div className={styles.singleCustomer}>
                                      <h2>
                                          <CountUp
                                              start={0}
                                              end={3}
                                          />
                                          k
                                      </h2>
                                      <p>Give Insurances</p>
                                  </div>
                                  <div className={styles.singleCustomer}>
                                      <h2>
                                          <CountUp
                                              start={0}
                                              end={75}
                                          />
                                      </h2>
                                      <p>Professional Team</p>
                                  </div>
                                  <div className={styles.singleCustomer}>
                                      <h2>
                                          <CountUp
                                              start={0}
                                              end={24}
                                          />
                                          K
                                      </h2>
                                      <p>Satisfied Customers</p>
                                  </div>
                              </div>
                              <Link
                                  href="#"
                                  className="btnOutLine"
                              >
                                  More About Us
                              </Link>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default Policy