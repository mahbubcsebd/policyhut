import calMark from "@/public/icons/cal-mark.svg";
import crossMark from "@/public/icons/cross-mark.svg";
import exportIcon from "@/public/icons/export.svg";
import eyeMark from "@/public/icons/eye-mark.svg";
import notificationMark from "@/public/icons/notification-mark.svg";
import tickMark from "@/public/icons/tick-mark.svg";
import userIcon from "@/public/icons/user.svg";
import Image from "next/image";
import { Container, Form, Row, Table } from "react-bootstrap";
import styles from "./insurance.module.css";

const InsuranceUpdate = () => {
  return (
      <div
          id="insuranceUpdate"
          className="insuranceUpdate section-pb mt-5"
      >
          <div className="insuranceUpdateArea">
              <Container>
                  <Row>
                      <div className={styles.insuranceUpdateTitle}>
                          <h2>Insurance Update:</h2>
                      </div>
                      <div className={styles.insuranceTopBox}>
                          <div className={styles.insuranceFilter}>
                              <div className={styles.insuranceSingleFilter}>
                                  <Form.Select aria-label="Type">
                                      <option>Type</option>
                                      <option value="1">Type One</option>
                                      <option value="2">Type Two</option>
                                      <option value="3">Type Three</option>
                                  </Form.Select>
                              </div>
                              <div className={styles.insuranceSingleFilter}>
                                  <Form.Select aria-label="Status">
                                      <option>Status</option>
                                      <option value="1">Active</option>
                                      <option value="2">Deactive</option>
                                  </Form.Select>
                              </div>
                              <div className={styles.insuranceSingleFilter}>
                                  <Form.Control
                                      id="filterDate"
                                      type="date"
                                      name="contactNumber"
                                      placeholder="(401) 715-3344"
                                  />
                              </div>
                          </div>
                          <div className={styles.insuranceExport}>
                              <button
                                  type="button"
                                  className={styles.insuranceExportBtn}
                              >
                                <span><Image src={exportIcon} alt="export"/> </span>  Export List
                              </button>
                              <button
                                  type="button"
                                  className={styles.insuranceExportBtn}
                              >
                                  <span><Image src={userIcon} alt="export"/> </span> Add New
                              </button>
                          </div>
                      </div>
                  </Row>
                  <Row>
                      <div className={styles.insuranceTable}>
                          <Table responsive className={styles.insuranceTable}>
                              <thead>
                                  <tr>
                                      <th>Insurance Type</th>
                                      <th>Payment</th>
                                      <th>Term</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>Life Insurance</td>
                                      <td>
                                          <Image
                                              src={tickMark}
                                              alt="tick"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.activeStatus}>
                                              Active
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Home Insurance</td>
                                      <td>
                                          <Image
                                              src={tickMark}
                                              alt="tick"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.activeStatus}>
                                              Active
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Business Insurance</td>
                                      <td>
                                          <Image
                                              src={crossMark}
                                              alt="cross"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.deactiveStatus}>
                                              Deactivate
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Health Insurance</td>
                                      <td>
                                          <Image
                                              src={tickMark}
                                              alt="tick"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.activeStatus}>
                                              Active
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Life Insurance</td>
                                      <td>
                                          <Image
                                              src={tickMark}
                                              alt="tick"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.activeStatus}>
                                              Active
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Business Insurance</td>
                                      <td>
                                          <Image
                                              src={crossMark}
                                              alt="cross"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.deactiveStatus}>
                                              Deactivate
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Life Insurance</td>
                                      <td>
                                          <Image
                                              src={crossMark}
                                              alt="cross"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.deactiveStatus}>
                                              deactivate
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Home Insurance</td>
                                      <td>
                                          <Image
                                              src={tickMark}
                                              alt="tick"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.activeStatus}>
                                              Active
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>Health Insurance</td>
                                      <td>
                                          <Image
                                              src={crossMark}
                                              alt="cross"
                                          />
                                      </td>
                                      <td>02/04/2023</td>
                                      <td>
                                          <p className={styles.deactiveStatus}>
                                              Deactivate
                                          </p>
                                      </td>
                                      <td className={styles.actionData}>
                                          <div className={styles.actionBtnBox}>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={eyeMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={notificationMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                              <button
                                                  type="button"
                                                  className={styles.actionBtn}
                                              >
                                                  <Image
                                                      src={calMark}
                                                      alt="eye"
                                                  />
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </Table>
                      </div>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default InsuranceUpdate