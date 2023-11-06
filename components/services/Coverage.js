import coverageImg from '@/public/images/coverage.png';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

const Coverage = () => {
  return (
      <div
          id="coverage"
          className="coverage section-pb"
      >
          <div className="coverageArea bgLight">
              <Container>
                  <Row className='align-items-center'>
                      <Col lg={6}>
                          <div className="coverageImage">
                              <Image
                                  src={coverageImg}
                                  alt="coverage"
                              />
                          </div>
                      </Col>
                      <Col lg={6}>
                          <div className="sectionContent">
                              <h2 className="sectionTitle">
                                  How much coverage do I need?
                              </h2>
                              <p className="sectionText mb-4">
                                  A good starting place for determining how much
                                  coverage you need is to add up any financial
                                  responsibilities your loved ones would be left
                                  with. That could include the cost of a
                                  funeral, childcare, a mortgage, college
                                  education, outstanding debts or other everyday
                                  expenses. Your coverage amounts should account
                                  for things you currently pay for or know you
                                  will be paying for in the future
                              </p>
                              <p className="sectionText mb-5">
                                  Without enough coverage, your family might be
                                  left with large, unexpected financial burdens.
                                  Our coverage calculator can help you land on
                                  an estimate to ensure they’re protected.
                              </p>
                              <Link
                                  href="#"
                                  className="btnBlue"
                              >
                                  Find the right coverage
                              </Link>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default Coverage