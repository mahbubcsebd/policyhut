'use client';

import safeBlue from '@/public/icons/safe-blue.svg';
import policyImg from '@/public/images/policyImg.png';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const AboutPolicy = () => {
    return (
        <div
            id="policy"
            className="policy section"
        >
            <div className="policyArea">
                <Container>
                    <Row>
                        <Col
                            lg={6}
                            className="d-none d-lg-block"
                        >
                            <div className="sectionImage">
                                <Image
                                    src={policyImg}
                                    alt="policy image"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="sectionContent">
                                <h2 className="sectionTitle">
                                    We provide the best insurance policy
                                </h2>
                                <div className="sectionImage pb-4 d-lg-none">
                                    <Image
                                        src={policyImg}
                                        alt="policy image"
                                    />
                                </div>
                                <p className="sectionText mb-2">
                                    Our company was founded with the goal of
                                    providing affordable, reliable insurance
                                    options for individuals and families. We
                                    understand that insurance can be a complex
                                    and overwhelming topic, so we strive to make
                                    the process as simple and transparent as
                                    possible.
                                </p>
                                <p className="sectionText mb-4">
                                    We offer a wide range of insurance products,
                                    including health insurance, life insurance,
                                    auto insurance, and home insurance.
                                </p>

                                <ul className="coumn-2">
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Customized policies</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Comprehensive coverage</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Best Insurance Agency</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Competitive pricing</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Flexible payment options</span>
                                    </li>
                                    <li>
                                        <Image
                                            src={safeBlue}
                                            alt="safe"
                                        />
                                        <span>Social responsibility</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutPolicy;
