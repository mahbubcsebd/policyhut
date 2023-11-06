import cost from '@/public/images/cost.png';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const InsuranceCost = () => {
  return (
      <div
          id="insuranceCost"
          className="insuranceCost section-pb"
      >
          <div className="insuranceCostArea">
              <Container>
                  <Row className='align-items-center'>
                      <Col lg={8}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  What factors shape my life insurance cost?
                              </h2>
                              <p className="sectionText mb-4">
                                  What you pay for life insurance is affected by
                                  a lot of factors. Some of those factors are
                                  related to you, others are related to the
                                  world around you.
                              </p>
                              <ul className='costCollections'>
                                  <li>
                                      <span>Age:</span> Generally, the younger
                                      you are when you buy your policy, the
                                      lower your premium will be.
                                  </li>
                                  <li>
                                      <span>Term vs. Permanent:</span>Term
                                      policies are significantly less expensive
                                      than permanent plans
                                  </li>
                                  <li>
                                      <span>Length of term:</span>Term policies
                                      are available in 10- to 40-year term
                                      lengths.
                                  </li>
                                  <li>
                                      <span>Coverage amoun:</span>A policy with
                                      a larger death benefit amount will
                                      naturally cost more than a similar policy
                                      with a smaller benefit amount.
                                  </li>
                                  <li>
                                      <span>Health history:</span> Things like
                                      your current health, health history and
                                      family medical history all shape your
                                      price.
                                  </li>
                                  <li>
                                      <span>Lifestyle:</span>Smoking or
                                      high-risk hobbies often lead to higher
                                      premiums.
                                  </li>
                              </ul>
                          </div>
                      </Col>
                      <Col lg={4}>
                        <div className="imageBox">
                            <Image
                                src={cost}
                                alt="insurance cost"
                            />
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsuranceCost