import hIcon2 from "@/public/icons/chat.svg";
import hIcon3 from "@/public/icons/location.svg";
import hIcon1 from "@/public/icons/mail.svg";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "./contactHelp.module.css";

const ContactHelp = () => {
  return (
      <div className="contacthelpArea">
          <div className="sectionContent">
              <span className="sectionTitleSpan">Get In Touch</span>
              <h2 className="sectionTitle">
                  The Insurance That Keeps You Ahead
              </h2>
              <p className="sectionText mb-4">
                  we are committed to providing our customers with exceptional
                  service. If you have any questions, comments, or concerns
                  about our insurance products or services, please don not
                  hesitate to contact us. Here are the different ways you can
                  get in touch with us:
              </p>
              <Row className="align-items-stretch">
                  <Col
                      md={6}
                      className="mb-4"
                  >
                      <div className={styles.singleHelp}>
                          <div className={styles.hIcon}>
                              <Image
                                  src={hIcon1}
                                  alt="help-icon"
                              />
                          </div>
                          <div className={styles.hContent}>
                              <h4>Email</h4>
                              <p>Our friendly team is here to help.</p>
                              <button className={styles.hButton}>
                                  example@gmail.com
                              </button>
                          </div>
                      </div>
                  </Col>
                  <Col
                      md={6}
                      className="mb-4"
                  >
                      <div className={styles.singleHelp}>
                          <div className={styles.hIcon}>
                              <Image
                                  src={hIcon2}
                                  alt="help-icon"
                              />
                          </div>
                          <div className={styles.hContent}>
                              <h4>Live Chat</h4>
                              <p>Our friendly team is here to help.</p>
                              <button className={styles.hButton}>
                                  Start new chat
                              </button>
                          </div>
                      </div>
                  </Col>
                  <Col
                      md={6}
                      className="mb-4"
                  >
                      <div className={styles.singleHelp}>
                          <div className={styles.hIcon}>
                              <Image
                                  src={hIcon3}
                                  alt="help-icon"
                              />
                          </div>
                          <div className={styles.hContent}>
                              <h4>Our headquarter:</h4>
                              <p>Come say hello at our office HQ.</p>
                              <button className={styles.hButton}>
                                  500 Anytown, USA 12345
                              </button>
                          </div>
                      </div>
                  </Col>
                  <Col
                      md={6}
                      className="mb-4"
                  >
                      <div className={styles.singleHelp}>
                          <div className={styles.hIcon}>
                              <Image
                                  src={hIcon1}
                                  alt="help-icon"
                              />
                          </div>
                          <div className={styles.hContent}>
                              <h4>Phone Number:</h4>
                              <p>Mon to Fri from 8am to 5pm.</p>
                              <button className={styles.hButton}>
                                  1-800-123-4567
                              </button>
                          </div>
                      </div>
                  </Col>
              </Row>
          </div>
      </div>
  );
}

export default ContactHelp