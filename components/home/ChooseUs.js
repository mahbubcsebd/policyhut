import cuIcon1 from "@/public/icons/cuIcon1.svg";
import cuIcon2 from "@/public/icons/cuIcon2.svg";
import choose1 from "@/public/images/choose-1.png";
import choose2 from "@/public/images/choose-2.png";
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./chooseUs.module.css";

const ChooseUs = () => {
  return (
      <div
          id="chooseUs"
          className="chooseUs section"
      >
          <div className="chooseUsArea">
              <Container>
                  <Row>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  The Insurance That Keeps You Ahead
                              </h2>
                              <div className="chooseImage py-4 d-sm-none">
                                  <Image
                                      src={choose1}
                                      alt="choose"
                                      className="w-100"
                                  />
                              </div>
                              <p className="sectionText mb-4">
                                  we are committed to providing our customers
                                  with high-quality insurance products and
                                  exceptional customer service. Since our
                                  founding in 1985, we have worked hard to
                                  establish ourselves as a trusted insurance
                                  industry.
                              </p>
                              <ul className={styles.chooseUsCollections}>
                                  <li>
                                      <div>
                                          <div className={styles.chooseIcon}>
                                              <Image
                                                  src={cuIcon1}
                                                  alt="chooseIcon"
                                              />
                                          </div>
                                      </div>
                                      <div className="">
                                          <h4>Permanent Life Insurance</h4>
                                          <p>
                                              Permanent life insurance is a type
                                              of life insurance that provides
                                              coverage for the entire lifetime.
                                          </p>
                                      </div>
                                  </li>
                                  <li>
                                      <div>
                                          <div className={styles.chooseIcon}>
                                              <Image
                                                  src={cuIcon2}
                                                  alt="chooseIcon"
                                              />
                                          </div>
                                      </div>
                                      <div className="">
                                          <h4>Fast & easy process</h4>
                                          <p>
                                              Permanent life insurance is a type
                                              of life insurance that provides
                                              coverage for the entire lifetime.
                                          </p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </Col>
                      <Col
                          lg={6}
                          className="d-none d-sm-block"
                      >
                          <Row>
                              <Col sm={6}>
                                  <div className="chooseImage">
                                      <Image
                                          src={choose1}
                                          alt="choose"
                                      />
                                  </div>
                              </Col>
                              <Col sm={6}>
                                  <div className="chooseImage">
                                      <Image
                                          src={choose2}
                                          alt="choose"
                                      />
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default ChooseUs;