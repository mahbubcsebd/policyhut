import client1 from "@/public/images/client-1.png";
import client2 from "@/public/images/client-2.png";
import client3 from "@/public/images/client-3.png";
import client4 from "@/public/images/client-4.png";
import heroImg from '@/public/images/hero-1.png';
import heroBg from "@/public/images/hero-left-bg.png";
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./hero.module.css";

function Hero() {
  return (
      <div
          id="hero"
          className="hero"
      >
          <div className={styles.heroArea}>
              <Image
                  src={heroBg}
                  alt="hero-bg"
                  className={styles.heroBg}
              />
              <Container className={styles.heroContainer}>
                  <Row>
                      <Col
                          xxl={8}
                      >
                          <div className={styles.heroContent}>
                              <h1 className={styles.heroTitle}>
                                  Insurance Coverage for Every Aspect of Your
                                  Life
                              </h1>
                              <p className={styles.heroText}>
                                  We offers a large range of premium insurance
                                  packages at affordable prices. Start an online
                                  quote or have a representative call you back.
                                  It’s that simple.
                              </p>

                              <div className={styles.buttonCollections}>
                                  <Link
                                      className="btnBlue"
                                      href="purchases-course.html"
                                  >
                                      Let&apos;s Get Started
                                  </Link>
                                  <Link
                                      className="btnWhite"
                                      href="#"
                                  >
                                      Get A Quote
                                  </Link>
                              </div>

                              <div className={styles.heroMember}>
                                  <p>20K+ People already trusted us.</p>
                                  <ul>
                                      <li>
                                          <Image
                                              src={client1}
                                              alt="member"
                                          />
                                      </li>
                                      <li>
                                          <Image
                                              src={client2}
                                              alt="member"
                                          />
                                      </li>
                                      <li>
                                          <Image
                                              src={client3}
                                              alt="member"
                                          />
                                      </li>
                                      <li>
                                          <Image
                                              src={client4}
                                              alt="member"
                                          />
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </Col>
                      <Col
                          md={12}
                          lg={4}
                          className="d-none d-xxl-block"
                      >
                          <div className={styles.heroImage}>
                              <Image
                                  src={heroImg}
                                  alt="hero image"
                              />
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default Hero