'use client';

import facebook from '@/public/icons/facebook.svg';
import instagram from '@/public/icons/instagram.svg';
import linkedin from '@/public/icons/linkedin.svg';
import logoLight from '@/public/icons/logo-light.svg';
import twitter from '@/public/icons/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './footer.module.css';

function Footer() {
    return (
        <footer
            id="footer"
            className="footer"
        >
            <div className={`${styles.footerArea}`}>
                <Container>
                    <Row className={`${styles.footerMiddle}`}>
                        <Col
                            xxl={3}
                            lg={4}
                            md={6}
                            className="mb-5"
                        >
                            <div className={`${styles.footerContent}`}>
                                <div className={`${styles.footerLogo}`}>
                                    <Image
                                        src={logoLight}
                                        alt="logo"
                                    />
                                </div>
                                <div className={`${styles.quickContact} mb-4`}>
                                    <p>Call Us</p>
                                    <h2 className={`${styles.footerCon}`}>
                                        1-214-657-8098
                                    </h2>
                                </div>
                                <div className={`${styles.quickContact}`}>
                                    <p>Email Us</p>
                                    <h2 className={`${styles.footerCon}`}>
                                        example@gmail.com
                                    </h2>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xxl={4}
                            md={6}
                            className="mb-5"
                        >
                            <div className={`${styles.footerMenu}`}>
                                <h2 className={`${styles.menuCategory}`}>
                                    Services
                                </h2>
                                <ul
                                    className={`${styles.footerMenuList} coumn-2`}
                                >
                                    <li>
                                        <a href="#">Business insurance</a>
                                    </li>
                                    <li>
                                        <Link href="#">Home Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Life Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Health Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Marriage insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Travel Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Cyber Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Vehicle Insurance</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Disability Insurance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">Fire Insurance</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col
                            xxl={2}
                            xl={4}
                            lg={4}
                            sm={6}
                            className="mb-5"
                        >
                            <div className={`${styles.footerMenu}`}>
                                <h2 className={`${styles.menuCategory}`}>
                                    Quick Link
                                </h2>
                                <ul className={`${styles.footerMenuList}`}>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col
                            sm={2}
                        >
                            <div className={`${styles.footerMenu}`}>
                                <h2 className={`${styles.menuCategory}`}>
                                    Social
                                </h2>
                                <ul className={`${styles.socialCollection}`}>
                                    <li>
                                        <Link href="/">
                                            <Image
                                                src={twitter}
                                                alt="social"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <Image
                                                src={facebook}
                                                alt="social"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <Image
                                                src={linkedin}
                                                alt="social"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <Image
                                                src={instagram}
                                                alt="social"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${styles.footerDevider}`} />
                </Container>

                <Container>
                    <div className={`${styles.footerBottom}`}>
                        <ul
                            className={`${styles.bottomMenu} ${styles.footerMenuList}`}
                        >
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li className={`${styles.circle}`}></li>
                            <li>
                                <Link href="#">Terms for clients</Link>
                            </li>
                            <li className={`${styles.circle}`}></li>
                            <li>
                                <Link href="#">Terms for candidates</Link>
                            </li>
                            <li className={`${styles.circle}`}></li>
                            <li>
                                <Link href="#">Imprint</Link>
                            </li>
                            <li className={`${styles.circle}`}></li>
                            <li>
                                <Link href="#">Contact</Link>
                            </li>
                        </ul>
                        <p className={`${styles.footerCopyright}`}>
                            &copy; 2023 Policyhut - All Rights Reserved.
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
