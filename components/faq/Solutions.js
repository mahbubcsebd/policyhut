/* eslint-disable react/no-unescaped-entities */
import qSign from '@/public/icons/question-circle.svg';
import choose1 from '@/public/images/choose-1.png';
import choose2 from '@/public/images/choose-2.png';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../home/chooseUs.module.css';

const Solutions = () => {
    return (
        <div
            id="solutions"
            className="solutions section-pb"
        >
            <div className="chooseUsArea">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="sectionContent">
                                <h2 className="sectionTitle">
                                    Great Insurance your Solutions For Business
                                </h2>
                                <div className="chooseImage py-4 d-lg-none">
                                    <Image
                                        src={choose1}
                                        alt="choose"
                                        className='w-100'
                                    />
                                </div>
                                <p className="sectionText mb-4">
                                    Business insurance is crucial for protecting
                                    your company's assets and minimizing risk.
                                    Without proper insurance coverage, a single
                                    accident or lawsuit could put your business
                                    in financial jeopardy. As a business owner,
                                    you should consider investing in a variety
                                    of insurance policies.
                                </p>
                                <ul className={styles.solutionCollections}>
                                    <li>
                                        <span>
                                            <Image
                                                src={qSign}
                                                alt="q-sign"
                                            />
                                        </span>
                                        What Is Insurance Services?
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src={qSign}
                                                alt="q-sign"
                                            />
                                        </span>
                                        How Many Service We Provide?
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src={qSign}
                                                alt="q-sign"
                                            />
                                        </span>
                                        How Much Experience Our Team Member?
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            className="d-none d-lg-block"
                        >
                            <Row>
                                <Col lg={6}>
                                    <div className="chooseImage">
                                        <Image
                                            src={choose1}
                                            alt="choose"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6}>
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
};

export default Solutions;
