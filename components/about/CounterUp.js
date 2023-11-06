'use client';

import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from './counterUp.module.css';

function CounterUp() {
    return (
        <div
            id="counter-up"
            className={`${styles.counterUp} section-pb`}
        >
            <div className={`${styles.counterUpArea}`}>
                <Container>
                    <Row>
                        <Col
                            sm={6}
                            lg={6}
                            xl={3}
                            className="mb-8"
                        >
                            <div className={`${styles.singleCounter} mt-4 mt-md-0`}>
                                <div className={`${styles.counterNumber}`}>
                                    <CountUp
                                        end={2.9}
                                        duration={2}
                                    />
                                    K
                                </div>
                                <p className={`${styles.counterCategory}`}>
                                    Give Insurances
                                </p>
                            </div>
                        </Col>
                        <Col
                            sm={6}
                            lg={6}
                            xl={3}
                            className="mb-8"
                        >
                            <div className={`${styles.singleCounter}`}>
                                <div className={`${styles.counterNumber}`}>
                                    <CountUp
                                        end={75}
                                        duration={2}
                                    />
                                    +
                                </div>
                                <p className={`${styles.counterCategory}`}>
                                    Professional Team
                                </p>
                            </div>
                        </Col>
                        <Col
                            sm={6}
                            lg={6}
                            xl={3}
                            className="mb-8"
                        >
                            <div className={`${styles.singleCounter}`}>
                                <div className={`${styles.counterNumber}`}>
                                    <CountUp
                                        end={24}
                                        duration={2}
                                    />
                                    K
                                </div>
                                <p className={`${styles.counterCategory}`}>
                                    Satisfied Customers
                                </p>
                            </div>
                        </Col>
                        <Col
                            sm={6}
                            lg={6}
                            xl={3}
                            className="mb-8"
                        >
                            <div className={`${styles.singleCounter}`}>
                                <div className={`${styles.counterNumber}`}>
                                    <CountUp
                                        end={98}
                                        duration={2}
                                    />
                                    %
                                </div>
                                <p className={`${styles.counterCategory}`}>
                                    Professional Team
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CounterUp;
