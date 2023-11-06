import heroBgTwo from '@/public/images/hero-2-bg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './hero.module.css';

function HeroTwo() {
    return (
        <div
            id="hero"
            className={`${styles.hero} ${styles.heroTwo}`}
        >
            <div className={styles.heroArea}>
                <Image
                    src={heroBgTwo}
                    alt="hero-bg"
                    className={styles.heroBg}
                />
                <Container className={styles.heroContainer}>
                    <Row>
                        <Col
                            md={12}
                            lg={6}
                        >
                            <div className={styles.heroContent}>
                                <h1 className={styles.heroTitle}>
                                    Insurance for the better family life
                                </h1>
                                <p className={styles.heroText}>
                                    We offers a large range of premium insurance
                                    packages at affordable prices. Start an
                                    online quote or have a representative call
                                    you back. It’s that simple.
                                </p>

                                <div className={styles.buttonCollections}>
                                    <Link
                                        className="btnBlue"
                                        href="purchases-course.html"
                                    >
                                        Let&apos;s Get Started
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

export default HeroTwo;
