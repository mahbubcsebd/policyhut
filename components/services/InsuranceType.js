import { Col, Container, Row, Table } from 'react-bootstrap';

const InsuranceType = () => {
  return (
      <div
          id="insuranceType"
          className="insuranceType section-pb"
      >
          <div className="insuranceTypeArea">
              <Container>
                  <Row className="sectionTopTitleBetween">
                      <Col lg={6}>
                          <h2 className="sectionTitle">
                              What types of life insurance are there?
                          </h2>
                      </Col>
                      <Col lg={6}>
                          <p className="sectionTitleText">
                              Most life insurance falls in two basic categories:
                              term and permanent. Term lasts for a set period of
                              time, and permanent lasts your entire life.
                          </p>
                      </Col>
                  </Row>
                  <Row>
                      <Col lg={12}>
                          <Table
                              responsive
                              id="typeTable"
                              className="policyTable"
                          >
                              <thead>
                                  <tr>
                                      <th>Insurance</th>
                                      <th>Term life</th>
                                      <th>Permanent life</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Cost</td>
                                      <td>As low as $10/mo</td>
                                      <td>Price varies</td>
                                  </tr>
                                  <tr>
                                      <td>Coverage term</td>
                                      <td>10-40 years</td>
                                      <td>Your entire life</td>
                                  </tr>
                                  <tr>
                                      <td>Coverage term</td>
                                      <td>Sometimes require</td>
                                      <td>Sometimes require</td>
                                  </tr>
                                  <tr>
                                      <td>
                                          Other benefits that may be available
                                      </td>
                                      <td>
                                          <ul className="tableList">
                                              <li>
                                                  Conversion to a permanent
                                                  policy
                                              </li>
                                              <li>Coverage for children</li>
                                              <li>Accidental death benefit</li>
                                          </ul>
                                      </td>
                                      <td>
                                          <ul className="tableList">
                                              <li>
                                                  Cash value with tax-deferred
                                                  growth
                                              </li>
                                              <li>
                                                  Ability to take out loans or
                                                  withdrawals on policy value
                                              </li>
                                              <li>Accidental death benefit</li>
                                          </ul>
                                      </td>
                                  </tr>
                              </tbody>
                          </Table>
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsuranceType