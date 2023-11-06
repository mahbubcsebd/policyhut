import pricing1 from '@/public/icons/pricing-1.svg';
import pricing2 from '@/public/icons/pricing-2.svg';
import pricing3 from '@/public/icons/pricing-3.svg';
import safe from '@/public/icons/safe.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
      <div
          id="pricing"
          className="pricing section-pb"
      >
          <div className="pricingArea">
              <Container>
                  <Row>
                      <div className="sectionTopTitleCenter">
                          <h2 className="sectionTitle">
                              Popular Pricing Plan For Insurance Services
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
                          <div className={styles.singlePricing}>
                              <div className={styles.pricingTop}>
                                  <div className={styles.pricingIcon}>
                                      <Image
                                          src={pricing1}
                                          alt="pricing"
                                      />
                                  </div>
                                  <div className={styles.pricingHeader}>
                                      <h3>Regular Plan</h3>
                                      <h2>$10.99/year</h2>
                                  </div>
                              </div>
                              <div className="divider"></div>
                              <div className={styles.pricingBody}>
                                  <ul>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Liability-only coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Personal Belonging
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Extra Expenses
                                      </li>
                                      <li className={styles.disabled}>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li className={styles.disabled}>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li className={styles.disabled}>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Permanent life insurance
                                      </li>
                                  </ul>
                              </div>
                              <div className={`${styles.pricingFooter} mt-5`}>
                                  <Link
                                      href="/"
                                      className="btnLightBlue w-100 text-center"
                                  >
                                      Buy Now
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.singlePricing}>
                              <div className={styles.pricingTop}>
                                  <div className={styles.pricingIcon}>
                                      <Image
                                          src={pricing2}
                                          alt="pricing"
                                      />
                                  </div>
                                  <div className={styles.pricingHeader}>
                                      <h3>Standard Plan</h3>
                                      <h2>$29.99/year</h2>
                                  </div>
                              </div>
                              <div className="divider"></div>
                              <div className={styles.pricingBody}>
                                  <ul>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Liability-only coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Personal Belonging
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Extra Expenses
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li className={styles.disabled}>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Permanent life insurance
                                      </li>
                                  </ul>
                              </div>
                              <div className={`${styles.pricingFooter} mt-5`}>
                                  <Link
                                      href="/"
                                      className="btnBlue w-100 text-center"
                                  >
                                      Buy Now
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          md={6}
                          sm={12}
                          className="mb-4"
                      >
                          <div className={styles.singlePricing}>
                              <div className={styles.pricingTop}>
                                  <div className={styles.pricingIcon}>
                                      <Image
                                          src={pricing3}
                                          alt="pricing"
                                      />
                                  </div>
                                  <div className={styles.pricingHeader}>
                                      <h3>Regular Plan</h3>
                                      <h2>$10.99/year</h2>
                                  </div>
                              </div>
                              <div className="divider"></div>
                              <div className={styles.pricingBody}>
                                  <ul>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Liability-only coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>{' '}
                                          Personal Belonging
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Extra Expenses
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Additional Coverage
                                      </li>
                                      <li>
                                          <span>
                                              <Image
                                                  src={safe}
                                                  alt="safe"
                                              />
                                          </span>
                                          Permanent life insurance
                                      </li>
                                  </ul>
                              </div>
                              <div className={`${styles.pricingFooter} mt-5`}>
                                  <Link
                                      href="/"
                                      className="btnLightBlue w-100 text-center"
                                  >
                                      Buy Now
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

export default Pricing