import insurance from '@/public/icons/insurance.svg';
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from './insurance.module.css';

const InsuranceAddDetails = () => {
    return (
        <div
            id="insuranceAdd"
            className="insuranceAdd section"
        >
            <div className="insuranceAddArea">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className={styles.insuranceBox}>
                                <div className={styles.insuranceTopBar}>
                                    <div className={styles.insuranceTitleBar}>
                                        <h2 className={styles.insuranceTitle}>
                                            Add Insurance Details
                                        </h2>
                                        <Image
                                            src={insurance}
                                            alt="insurance"
                                        />
                                    </div>
                                    <div className={styles.contentTitle}>
                                        <h3>Please Provide Policy Details</h3>
                                    </div>
                                    <div className="divider"></div>
                                </div>
                                <div className={styles.insuranceContent}>
                                    <div className={styles.paymentMethod}>
                                        <Form
                                            id="details-form"
                                            className={`${styles.contactForm}`}
                                        >
                                            <div
                                                className={`${styles.formInputWrapper}`}
                                            >
                                                <Row>
                                                    <Col
                                                        md={12}
                                                        className="mb-4"
                                                    >
                                                        <Form.Label htmlFor="contact-name">
                                                            Insurance Owner Name{' '}
                                                            <span>*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            id="details-name"
                                                            type="text"
                                                            name="detailsName"
                                                            placeholder="Type here..."
                                                        />
                                                    </Col>
                                                    <Col
                                                        md={12}
                                                        className="mb-4"
                                                    >
                                                        <Form.Label htmlFor="details-email">
                                                            Account Number{' '}
                                                            <span>*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            id="details-email"
                                                            type="text"
                                                            name="detailsEmail"
                                                            placeholder="Type here..."
                                                        />
                                                    </Col>
                                                    <Col
                                                        md={12}
                                                        className="mb-4"
                                                    >
                                                        <Form.Label htmlFor="details-number">
                                                            Date of Birth{' '}
                                                            <span>*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            id="details-number"
                                                            type="date"
                                                            name="detailsNumber"
                                                            placeholder="Type here..."
                                                        />
                                                    </Col>
                                                    <Col
                                                        md={12}
                                                        className="mb-4"
                                                    >
                                                        <Form.Label htmlFor="details-subject">
                                                            Select Insurance
                                                            Type <span>*</span>
                                                        </Form.Label>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>
                                                                Select insurance
                                                                type
                                                            </option>
                                                            <option value="1">
                                                                Type One
                                                            </option>
                                                            <option value="2">
                                                                Type Two
                                                            </option>
                                                            <option value="3">
                                                                Type Three
                                                            </option>
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <button
                                                    type="submit"
                                                    className="btnBlue submitBtn mt-5"
                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default InsuranceAddDetails;
