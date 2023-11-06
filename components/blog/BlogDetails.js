/* eslint-disable react/no-unescaped-entities */
import qIcon from "@/public/icons/q-icon.svg";
import bdImg from "@/public/images/blog-details.png";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import BlogSidebar from "./BlogSidebar";
import styles from "./blogDetails.module.css";

const BlogDetails = () => {
  return (
      <div
          id="blogDetails"
          className="blogDetails section-pb"
      >
          <div className="blogDetailsArea">
              <Container>
                  <div className={styles.bdImg}>
                      <Image
                          src={bdImg}
                          alt="blog details"
                      />
                  </div>
                  <p className={`${styles.bdText} mb-5`}>
                      The primary benefit of auto insurance coverage is
                      financial protection. Accidents can happen at any time,
                      and they can be costly. Auto insurance coverage provides
                      protection for your vehicle in the event of an accident,
                      theft, or damage caused by natural disasters such as
                      floods, earthquakes, or hurricanes. Without auto insurance
                      coverage, you would have to pay for these expenses out of
                      pocket, which could be financially devastating.
                  </p>
                  <Row>
                      <Col xxl={8}>
                          <div className={styles.blogDetailsContent}>
                              <div className={styles.bdTextWrapper}>
                                  <div className={styles.singleTextBox}>
                                      <h2 className={styles.bdTitle}>
                                          <span>1.</span> Do I need life
                                          insurance?
                                      </h2>
                                      <p className={styles.bdText}>
                                          The primary benefit of auto insurance
                                          coverage is financial protection.
                                          Accidents can happen at any time, and
                                          they can be costly. Auto insurance
                                          coverage provides protection for your
                                          vehicle in the event of an accident,
                                          theft, or damage caused by natural
                                          disasters such as floods, earthquakes,
                                          or hurricanes. Without auto insurance
                                          coverage, you would have to pay for
                                          these expenses out of pocket, which
                                          could be financially devastating.
                                      </p>
                                  </div>
                                  <div className={styles.singleTextBox}>
                                      <h2 className={styles.bdTitle}>
                                          <span>2.</span> Liability Coverage
                                      </h2>
                                      <p className={styles.bdText}>
                                          Auto insurance coverage also provides
                                          liability coverage, which protects you
                                          from legal action in case you're at
                                          fault in an accident that causes
                                          damage to someone else's property or
                                          injures them. Liability coverage can
                                          help pay for legal fees, medical
                                          bills, and property damage caused by
                                          the accident. Without liability
                                          coverage, you could be personally
                                          responsible for these expenses, which
                                          could result in a significant
                                          financial burden.
                                      </p>
                                  </div>
                                  <div className={styles.singleTextBox}>
                                      <h2 className={styles.bdTitle}>
                                          <span>3.</span> Medical Expenses
                                          Coverage
                                      </h2>
                                      <p className={styles.bdText}>
                                          Medical expenses coverage is another
                                          important benefit of auto insurance
                                          coverage. It covers the cost of
                                          medical bills for you and your
                                          passengers if you're involved in an
                                          accident. Medical expenses coverage
                                          can help pay for hospital bills,
                                          doctor's fees, and even lost wages due
                                          to an injury caused by an accident.
                                      </p>
                                  </div>
                                  <div className={styles.singleTextBox}>
                                      <h2 className={styles.bdTitle}>
                                          <span>1.</span> Protection against
                                          Uninsured Drivers
                                      </h2>
                                      <p className={styles.bdText}>
                                          Medical expenses coverage is another
                                          important benefit of auto insurance
                                          coverage. It covers the cost of
                                          medical bills for you and your
                                          passengers if you're involved in an
                                          accident. Medical expenses coverage
                                          can help pay for hospital bills,
                                          doctor's fees, and even lost wages due
                                          to an injury caused by an accident
                                      </p>
                                  </div>
                                  <div className={styles.singleTextBox}>
                                      <h2 className={styles.bdTitle}>
                                          <span>5.</span> Peace of Mind
                                      </h2>
                                      <p className={styles.bdText}>
                                          Finally, auto insurance coverage
                                          provides peace of mind. Knowing that
                                          you're protected financially in case
                                          of an accident or unforeseen
                                          circumstances can help you drive with
                                          confidence. Auto insurance coverage
                                          allows you to focus on the road
                                          without worrying about the financial
                                          consequences accident.
                                      </p>
                                      <div className={styles.quoteBox}>
                                          <div>
                                              <div className={styles.qIcon}>
                                                  <Image
                                                      src={qIcon}
                                                      alt="quote"
                                                  />
                                              </div>
                                          </div>
                                          <div className={styles.quoteText}>
                                              <p>
                                                  "I recently had to file a
                                                  claim and they were fantastic.
                                                  They made the process easy and
                                                  straight-forward, and I was
                                                  back on the road in no time. I
                                                  highly recommend them to
                                                  anyone in the market for
                                                  reliable, affordable
                                                  coverage."
                                              </p>
                                          </div>
                                      </div>
                                      <p className={styles.bdText}>
                                          Finally, auto insurance coverage
                                          provides peace of mind. Knowing that
                                          you're protected financially in case
                                          of an accident or unforeseen
                                          circumstances can help you drive with
                                          confidence. Auto insurance coverage
                                          allows you to focus on the road
                                          without worrying about the financial
                                          consequences accident.
                                      </p>
                                  </div>
                              </div>
                              <div className={styles.bdSocial}>
                                  <h3 className={styles.bdSocialTitle}>
                                      Share social:
                                  </h3>
                                  <div className={styles.bdSocialIcon}>
                                      <ul>
                                          <li>
                                              <Link href="https://facebook.com/">
                                                  <FaFacebookF />
                                              </Link>
                                          </li>
                                          <li>
                                              <Link href="https://facebook.com/">
                                                  <FaInstagram />
                                              </Link>
                                          </li>
                                          <li>
                                              <Link href="https://www.linkedin.com/">
                                                  <FaLinkedinIn />
                                              </Link>
                                          </li>
                                          <li>
                                              <Link href="https://twitter.com/">
                                                  <FaTwitter />
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div className={styles.commentBox}>
                                  <div className={styles.commentTitle}>
                                      <h2>Leave a comment</h2>
                                  </div>
                                  <Form
                                      action=""
                                      id="comment-form"
                                      className={`${styles.commentForm}`}
                                  >
                                      <div
                                          className={`${styles.formInputWrapper}`}
                                      >
                                          <Row>
                                              <Col
                                                  md={12}
                                                  className="mb-4"
                                              >
                                                  <Form.Control
                                                      id="comment-message"
                                                      as="textarea"
                                                      name="commentMessage"
                                                      rows={5}
                                                      placeholder="Write Your Comment"
                                                  />
                                              </Col>
                                              <Col
                                                  md={4}
                                                  className="mb-4"
                                              >
                                                  <Form.Control
                                                      id="comment-name"
                                                      type="text"
                                                      name="commentName"
                                                      placeholder="Your name"
                                                  />
                                              </Col>
                                              <Col
                                                  md={4}
                                                  className="mb-4"
                                              >
                                                  <Form.Control
                                                      id="comment-email"
                                                      type="email"
                                                      name="commentEmail"
                                                      placeholder="Your email"
                                                  />
                                              </Col>
                                              <Col
                                                  md={4}
                                                  className="mb-4"
                                              >
                                                  <Form.Control
                                                      id="comment-number"
                                                      type="text"
                                                      name="commentWebsite"
                                                      placeholder="Website (Optional)"
                                                  />
                                              </Col>
                                              <div className="mb-4">
                                                  <Form.Check
                                                      type="checkbox"
                                                      id="comment-checkbox"
                                                      label="Save my name, email, and website in this browser for the next time I comment."
                                                  />
                                              </div>
                                          </Row>
                                          <button
                                              type="submit"
                                              className="btnBlue submitBtn mt-4"
                                          >
                                              Post Comment
                                          </button>
                                      </div>
                                  </Form>
                              </div>
                          </div>
                      </Col>
                      <Col
                          md={8}
                          xxl={4}
                          className="pt-4 pt-xxl-0"
                      >
                          <BlogSidebar />
                      </Col>
                  </Row>
              </Container>
          </div>
      </div>
  );
}

export default BlogDetails