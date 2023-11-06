import detailsIcon1 from '@/public/icons/details-1.svg';
import detailsIcon2 from '@/public/icons/details-2.svg';
import detailsIcon3 from '@/public/icons/details-3.svg';
import detailsIcon4 from '@/public/icons/details-4.svg';
import safe from '@/public/icons/safe.svg';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './services.module.css';
const ServicesDetails = () => {
  return (
      <div
          id="serviceDetails"
          className="serviceDetails section"
      >
          <div className="serviceDetailsArea">
              <Container>
                  <Row className='mb-5'>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  What is life insurance?
                              </h2>
                              <p className="sectionText mb-4">
                                  Life insurance is a way you can protect your
                                  family and loved ones, even after you pass
                                  away. Rather than leaving your family with
                                  existing debt, funeral expenses and other
                                  everyday costs, they’ll receive a tax-free
                                  death benefit or payout. This can provide
                                  financial security and stability. With a life
                                  insurance policy, you’re prepared for the
                                  worst but can plan for the best.
                              </p>
                              <p className="sectionText mb-4">
                                  Life insurance is a type of insurance that
                                  provides financial protection to your loved
                                  ones in the event of your death. It is a
                                  contract between the policyholder and the
                                  insurer, where the policyholder pays premiums
                                  to the insurer in exchange for a sum of money
                                  their death.
                              </p>
                          </div>
                      </Col>
                      <Col lg={6}>
                          <Row>
                              <Col
                                  lg={6}
                                  className="mb-4"
                              >
                                  <div className={styles.singleDetails}>
                                      <div className={styles.iconBox2}>
                                          <Image
                                              className={styles.icon}
                                              src={detailsIcon1}
                                              alt="service-icon"
                                          />
                                      </div>
                                      <h3>Fast & Easy Process</h3>
                                  </div>
                              </Col>
                              <Col
                                  lg={6}
                                  className="mb-4"
                              >
                                  <div className={styles.singleDetails}>
                                      <div className={styles.iconBox2}>
                                          <Image
                                              className={styles.icon}
                                              src={detailsIcon2}
                                              alt="service-icon"
                                          />
                                      </div>
                                      <h3>Save Your Money</h3>
                                  </div>
                              </Col>
                              <Col
                                  lg={6}
                                  className="mb-4"
                              >
                                  <div className={styles.singleDetails}>
                                      <div className={styles.iconBox2}>
                                          <Image
                                              className={styles.icon}
                                              src={detailsIcon3}
                                              alt="service-icon"
                                          />
                                      </div>
                                      <h3>Warm Environment</h3>
                                  </div>
                              </Col>
                              <Col
                                  lg={6}
                                  className="mb-4"
                              >
                                  <div className={styles.singleDetails}>
                                      <div className={styles.iconBox2}>
                                          <Image
                                              className={styles.icon}
                                              src={detailsIcon4}
                                              alt="service-icon"
                                          />
                                      </div>
                                      <h3>Control over policy</h3>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  What is life insurance?
                              </h2>
                              <p className="sectionText mb-4">
                                  Just about everyone can benefit from some
                                  level of life insurance protection for their
                                  loved ones. You might be just starting out,
                                  raising a family, or preparing for your golden
                                  years—as long as you have loved ones you want
                                  to protect if you pass away, life insurance
                                  can help. The key is finding a policy that
                                  fits you. Whether you’re looking for a lot of
                                  coverage or just the basics, we have a policy
                                  for what you need
                              </p>
                          </div>
                      </Col>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h3 className={styles.sideTitle}>
                                  Do I need life insurance?
                              </h3>
                              <ul className={styles.listContainer}>
                                  <li>
                                      <span>
                                          <Image
                                              src={safe}
                                              alt="safe"
                                          />
                                      </span>
                                      Cover the rising cost of funeral expenses
                                  </li>
                                  <li>
                                      <span>
                                          <Image
                                              src={safe}
                                              alt="safe"
                                          />
                                      </span>
                                      Replace lost wages or the value of your
                                      time (e.g., stay-at-home spouse)
                                  </li>
                                  <li>
                                      <span>
                                          <Image
                                              src={safe}
                                              alt="safe"
                                          />
                                      </span>
                                      Breaking Free: Strategies to Pay Off Debt
                                      and Achieve Financial Freedom
                                  </li>
                                  <li>
                                      <span>
                                          <Image
                                              src={safe}
                                              alt="safe"
                                          />
                                      </span>
                                      Strategies for Providing a College
                                      Education for Your Children
                                  </li>
                                  <li>
                                      <span>
                                          <Image
                                              src={safe}
                                              alt="safe"
                                          />
                                      </span>
                                      Preserving Wealth to Leave an Inheritance
                                      for Your Loved Ones
                                  </li>
                              </ul>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default ServicesDetails