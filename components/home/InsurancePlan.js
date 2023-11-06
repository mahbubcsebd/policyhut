"use client"

import plan1 from "@/public/icons/plan-1.svg";
import plan2 from "@/public/icons/plan-2.svg";
import plan3 from "@/public/icons/plan-3.svg";
import plan4 from "@/public/icons/plan-4.svg";
import plan5 from "@/public/icons/plan-5.svg";
import plan6 from "@/public/icons/plan-6.svg";
import plan7 from "@/public/icons/plan-7.svg";
import plan8 from "@/public/icons/plan-8.svg";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import styles from "./insurancePlan.module.css";

const InsurancePlan = () => {
    const [isHover, setIsHover] = useState(false);

      const handleMouseEnter = () => {
          setIsHover(true);
      };

      const handleMouseLeave = () => {
          setIsHover(false);
      };
  return (
      <div
          id="insurancePlan"
          className="insurancePlan section bgLight"
      >
          <div className="insurancePlanArea">
              <Container>
                  <Row>
                      <div className="sectionTopTitleCenter">
                          <h2 className="sectionTitle">
                              A great insurance plan with great benefits.
                          </h2>
                      </div>
                  </Row>
                  <Row className={styles.planWrapper}>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan1}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Business insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan2}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Home Insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan3}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Life Insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan4}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Health Insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan5}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Marriage insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan6}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Travel Insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan7}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Cyber Insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div className={styles.singlePlan}>
                              <div>
                                  <div className={styles.planIcon}>
                                      <Image
                                          src={plan8}
                                          alt="plan icon"
                                      />
                                  </div>
                              </div>
                              <div className={styles.planContent}>
                                  <h3 className={styles.planTitle}>
                                      Business insurance
                                  </h3>
                                  <p className={styles.planText}>
                                      The insurance policy should provide for
                                      the risks faced.
                                  </p>
                                  <Link
                                      href="#"
                                      className="btnText"
                                  >
                                      View Service{' '}
                                      <span>
                                          <BsArrowRight />
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </Col>
                      <Col
                          lg={4}
                          className="p-lg-0"
                      >
                          <div
                              className={`${styles.singlePlanLast}`}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                          >
                              <p className={styles.planText}>
                                  An easy-to-use form for visitors to request a
                                  quote.
                              </p>
                              <Link
                                  className={isHover ? 'btnWhite' : 'btnBlue'}
                                  href="#"
                              >
                                  Get A Quote
                              </Link>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsurancePlan

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max, min];
}
