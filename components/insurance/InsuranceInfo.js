'use <client></client>';

import amex from '@/public/icons/amex.svg';
import insurance from '@/public/icons/insurance.svg';
import master from '@/public/icons/master.svg';
import visa from '@/public/icons/visa.svg';
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from './insurance.module.css';

const InsuranceInfo = () => {
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
                                    <Col lg={8}>
                                        <div className={styles.getwaySingle}>
                                            <h3 className={styles.getwayTitle}>
                                                Your Policy Details:
                                            </h3>
                                            <div
                                                className={
                                                    styles.policyDetailsBox
                                                }
                                            >
                                                <ul>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Insurance Owner Name
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            Mahbubur Rahman
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Account Number:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            12451653214678
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Mobile Number:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            (215) 424-7763
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Email:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            example@gmail.com
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Insurance Status:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            Strong
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Payment Type
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            Visa Card
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Payment Date:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            3/01/202
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p
                                                            className={
                                                                styles.pdTitle
                                                            }
                                                        >
                                                            Payment Due Date:
                                                        </p>
                                                        <p
                                                            className={
                                                                styles.pdText
                                                            }
                                                        >
                                                            On Time
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.paymentFormBox}>
                                            <Form
                                                id="payment-form"
                                                className="payment-form"
                                            >
                                                <div
                                                    className={
                                                        styles.getwaySingle
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            styles.getwayTitle
                                                        }
                                                    >
                                                        Select Payable Amount
                                                    </h3>
                                                    <div
                                                        className={
                                                            styles.paymentAmountBox
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.amountRadio
                                                            }
                                                        >
                                                            <div className="mb-4">
                                                                <Form.Check
                                                                    type="radio"
                                                                    id="payment-mobile"
                                                                    name="paymentMethod"
                                                                    label="$120 USD"
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <Form.Check
                                                                    type="radio"
                                                                    id="payment-bank"
                                                                    name="paymentMethod"
                                                                    label="$150 USD"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.getwaySingle
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            styles.getwayTitle
                                                        }
                                                    >
                                                        Select Payment Method
                                                    </h3>
                                                    <div
                                                        className={
                                                            styles.paymentMethodBox
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.singlePaymentMethod
                                                            }
                                                        >
                                                            <input
                                                                id="visa"
                                                                type="radio"
                                                                name="paymentCard"
                                                                value="visa"
                                                                className="control-form"
                                                            />
                                                            <label
                                                                className="form-check-input"
                                                                for="visa"
                                                            >
                                                                <Image
                                                                    src={visa}
                                                                    alt="visa"
                                                                />
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.singlePaymentMethod
                                                            }
                                                        >
                                                            <input
                                                                id="master"
                                                                type="radio"
                                                                name="paymentCard"
                                                                value="master"
                                                                className="control-form"
                                                            />
                                                            <label
                                                                className="form-check-input"
                                                                for="master"
                                                            >
                                                                <Image
                                                                    src={master}
                                                                    alt="master"
                                                                />
                                                            </label>
                                                        </div>
                                                        <div
                                                            className={
                                                                styles.singlePaymentMethod
                                                            }
                                                        >
                                                            <input
                                                                id="amex"
                                                                type="radio"
                                                                name="paymentCard"
                                                                value="amex"
                                                                className="control-form"
                                                            />
                                                            <label
                                                                className="form-check-input"
                                                                for="amex"
                                                            >
                                                                <Image
                                                                    src={amex}
                                                                    alt="amex"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={
                                                        styles.getwaySingle
                                                    }
                                                >
                                                    <Row>
                                                        <Col
                                                            md={12}
                                                            className="mb-4"
                                                        >
                                                            <Form.Label htmlFor="cardNumber">
                                                                Card Number
                                                                <span>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                id="cardNumber"
                                                                type="text"
                                                                name="card"
                                                                placeholder="5642 **** **** ****"
                                                            />
                                                        </Col>
                                                        <Col
                                                            md={4}
                                                            className="mb-4"
                                                        >
                                                            <Form.Label htmlFor="cardDate">
                                                                Date
                                                                <span>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                id="cardDate"
                                                                type="text"
                                                                name="card"
                                                                placeholder="5642 **** **** ****"
                                                            />
                                                        </Col>
                                                        <Col
                                                            md={4}
                                                            className="mb-4"
                                                        >
                                                            <Form.Label htmlFor="cardCcv">
                                                                CVV
                                                                <span>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                id="cardCcv"
                                                                type="text"
                                                                name="card"
                                                                placeholder="5642 **** **** ****"
                                                            />
                                                        </Col>
                                                        <Col
                                                            md={4}
                                                            className="mb-4"
                                                        >
                                                            <Form.Label htmlFor="cardPost">
                                                                Post Code
                                                                <span>*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                id="cardPost"
                                                                type="text"
                                                                name="card"
                                                                placeholder="5642 **** **** ****"
                                                            />
                                                        </Col>
                                                        <div>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id="comment-checkbox"
                                                                label="Save this credit card for later use"
                                                            />
                                                        </div>
                                                    </Row>
                                                    <button
                                                        type="submit"
                                                        className="btnBlue submitBtn mt-5"
                                                    >
                                                        Proceed To Pay
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default InsuranceInfo;
