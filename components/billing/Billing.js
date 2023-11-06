import billing1 from "@/public/icons/billing-1.svg";
import billing2 from "@/public/icons/billing-2.svg";
import billing3 from "@/public/icons/billing-3.svg";
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStoreIos } from "react-icons/fa";
import styles from "./billing.module.css";

const Billing = () => {
  return (
      <div
          id="billing"
          className="billing section-pb"
      >
          <div className="billingArea">
              <Container>
                  <Row>
                      <div className="sectionTopTitleCenter">
                          <h2 className="sectionTitle">Ways to pay</h2>
                      </div>
                  </Row>
                  <Row>
                      <Col
                          md={4}
                          className="mb-4"
                      >
                          <div className={styles.singleBilling}>
                              <div className={styles.billingContent}>
                                  <div className={styles.billingIcon}>
                                      <Image
                                          src={billing1}
                                          alt="billing"
                                      />
                                  </div>
                                  <h2 className={styles.singleTitle}>
                                      My Account
                                  </h2>
                                  <p className={styles.singleText}>
                                      <Link href="#">Log in</Link> to My Account
                                      or
                                      <Link href="#">create an account</Link> to
                                      make or schedule a payment.
                                  </p>
                                  <div className={styles.btnBox}>
                                      <Link
                                          href="#"
                                          className="btnBlue"
                                      >
                                          Login
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col
                          md={4}
                          className="mb-4"
                      >
                          <div className={styles.singleBilling}>
                              <div className={styles.billingContent}>
                                  <div className={styles.billingIcon}>
                                      <Image
                                          src={billing2}
                                          alt="billing"
                                      />
                                  </div>
                                  <h2 className={styles.singleTitle}>
                                      Mobile App
                                  </h2>
                                  <p className={styles.singleText}>
                                      Make or schedule a payment from anywhere
                                      using the Allstate® mobile app
                                  </p>
                                  <div className={styles.btnBox}>
                                      <Link
                                          href="#"
                                          className="btnBlue"
                                      >
                                          <span>
                                              <BiLogoPlayStore />
                                          </span>{' '}
                                          Play Store
                                      </Link>
                                      <Link
                                          href="#"
                                          className="btnBlue"
                                      >
                                          <span>
                                              <FaAppStoreIos />
                                          </span>{' '}
                                          App Store
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col
                          md={4}
                          className="mb-4"
                      >
                          <div className={styles.singleBilling}>
                              <div className={styles.billingContent}>
                                  <div className={styles.billingIcon}>
                                      <Image
                                          src={billing3}
                                          alt="billing"
                                      />
                                  </div>
                                  <h2 className={styles.singleTitle}>
                                      My Account
                                  </h2>
                                  <p className={styles.singleText}>
                                      <Link href="#">Log in</Link> to My Account
                                      or
                                      <Link href="#">create an account</Link> to
                                      make or schedule a payment.
                                  </p>
                                  <div className={styles.btnBox}>
                                      <Link
                                          href="#"
                                          className="btnBlue"
                                      >
                                          Pay Now
                                      </Link>
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

export default Billing