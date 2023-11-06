/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

'use client';

import bdSm1 from '@/public/images/bd-sm-1.png';
import bdSm2 from '@/public/images/bd-sm-2.png';
import reviewer1 from '@/public/images/review-1.png';
import reviewer2 from '@/public/images/review-2.png';
import styles from '@/styles/blogDetails.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineCalendar, HiOutlineTag, HiOutlineUserCircle } from 'react-icons/hi';
import BlogCategory from './BlogCategory';
import BlogPopular from './BlogPopular';
import BlogSearch from './BlogSearch';

function BlogDetails(props) {
    const { id, author, descImg, date, title, img, tag, desc } = props.originalBlog;
    return (
        <div id="blog-details" className={`${styles.blogDetails} ${id} section-pb`}>
            <div className={`${styles.blogDetailsArea}`}>
                <Container>
                    <Row>
                        <Col xxl={8}>
                            <div className={`${styles.bdLeftContent}`}>
                                <div className={`${styles.blogDetailsTop}`}>
                                    <div className={`${styles.bdLgImg}`}>
                                        <Image src={descImg} alt="blog" />
                                    </div>
                                    <div className={`${styles.bdPostDesc}`}>
                                        <div className={`${styles.bdPost}`}>
                                            <p>
                                                <HiOutlineUserCircle />
                                            </p>
                                            <p>{author}</p>
                                        </div>
                                        <div className={`${styles.bdPost}`}>
                                            <p>
                                                <HiOutlineCalendar />
                                            </p>
                                            <p>{date}</p>
                                        </div>
                                        <div className={`${styles.bdPost}`}>
                                            <p>
                                                <HiOutlineTag />
                                            </p>
                                            <p>{tag}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.blogDetailsContent}`}>
                                    <div className="mb-4">
                                        <h3 className={`${styles.bdContentTitle}`}>Overview:</h3>
                                        <p className="text">{desc}</p>

                                        <Row className="py-4">
                                            <Col md={6}>
                                                <Image className="w-100" src={bdSm1} alt="bd" />
                                            </Col>
                                            <Col md={6}>
                                                <Image className="w-100" src={bdSm2} alt="bd" />
                                            </Col>
                                        </Row>

                                        <div className={`${styles.bdSinglPart}`}>
                                            <h3 className={`${styles.bdsTitle}`}>Cost savings</h3>
                                            <p className={`${styles.bdsText}`}>
                                                If you run a business that involves shipping
                                                products to customers, you know how important it is
                                                to have an efficient logistics operation. But
                                                managing logistics can be time-consuming and costly,
                                                especially as your business grows. That is why many
                                                companies are turning to outsourcing as a way to
                                                streamline their logistics operations and save
                                                money. In this blog post, we'll explore some of the
                                                key benefits of outsourcing your logistics
                                                operations.
                                            </p>
                                        </div>
                                        <div className={`${styles.bdSinglePart}`}>
                                            <h3 className={`${styles.bdsTitle}`}>
                                                Focus on core competencies
                                            </h3>
                                            <p className={`${styles.bdsText}`}>
                                                Outsourcing logistics allows you to focus on your
                                                core competencies, such as product development and
                                                marketing, instead of spending time and resources on
                                                logistics management. This can help your business
                                                grow faster and be more successful in the long run.
                                            </p>
                                        </div>
                                        <div className={`${styles.bdSinglePart}`}>
                                            <h3 className={`${styles.bdsTitle}`}>
                                                Access to expertise
                                            </h3>
                                            <p className={`${styles.bdsText}`}>
                                                By outsourcing logistics, you gain access to the
                                                expertise of professionals who specialize in
                                                logistics management. This can be especially
                                                valuable if your business is new to logistics or if
                                                you're expanding into new markets. Logistics
                                                providers have the knowledge and experience to help
                                                you navigate the complexities of shipping and
                                                transportation, ensuring that your products get to
                                                their destination on time and in good condition.
                                            </p>
                                        </div>
                                        <div className={`${styles.bdSinglePart}`}>
                                            <h3 className={`${styles.bdsTitle}`}>
                                                Improved customer service
                                            </h3>
                                            <p className={`${styles.bdsText}`}>
                                                Outsourcing logistics can also help you improve
                                                customer service. 3PLs often have advanced
                                                technology and processes in place to track shipments
                                                and provide real-time updates to customers. This can
                                                help you provide better service to your customers
                                                and improve their overall experience with your
                                                business.
                                                <br />
                                                <br />
                                                For this global industrial manufacturer of vehicles
                                                and engines, production depends on exceptional and
                                                reliable service throughout the supply chain. When
                                                the manufacturer was looking for a partner to manage
                                                its distribution centers, it sought a company
                                                familiar with the challenges of automobile supply
                                                chain management and decided on Penske Logistics.
                                                Penske has managed inventory in two of the
                                                manufacturer’s facilities in Mexico since 2002.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.bdSocials}`}>
                                    <p>Share On:</p>
                                    <ul className={`${styles.bdSocialCollection}`}>
                                        <li>
                                            <Link href="https://www.facebook.com/">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com/">
                                                <FaTwitter />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${styles.blogDetailsBottom} section`}>
                                    <div id="comment-form" className="form">
                                        <div>
                                            <div className={`${styles.formTitle2}`}>
                                                <h3 className={`${styles.formTopTitle}`}>
                                                    Leave a reply
                                                </h3>
                                                <p className={`${styles.formTopText}`}>
                                                    Write if you know anyting about it
                                                </p>
                                            </div>
                                            <Row>
                                                <Col className="mb-4">
                                                    <Form.Label for="comment-name">
                                                        Your Name*
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        id="comment-name"
                                                        placeholder="Enter Name"
                                                    />
                                                </Col>
                                                <Col className="mb-4">
                                                    <Form.Label for="comment-email">
                                                        Your email*
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        id="comment-email"
                                                        placeholder="Enter Email"
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Label for="comment-msg">
                                                        Message
                                                    </Form.Label>
                                                    <textarea
                                                        className="form-control"
                                                        id="comment-msg"
                                                        cols="30"
                                                        rows="3"
                                                        placeholder="Write your comment*"
                                                    />
                                                </Col>
                                            </Row>
                                            <button className="btn btn-orange mt-8" type="submit">
                                                Post Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.reviewList}`}>
                                    <div className={`${styles.singleReview} mb-4`}>
                                        <div>
                                            <div className={`${styles.reviewImg}`}>
                                                <Image src={reviewer1} alt="reviewer" />
                                            </div>
                                        </div>
                                        <div className={`${styles.reviewContent}`}>
                                            <div className={`${styles.reviewTime}`}>
                                                <p className={`${styles.reviewDay}`}>1 day ago</p>
                                                <button
                                                    type="button"
                                                    className={`${styles.reviewDot}`}
                                                >
                                                    ...
                                                </button>
                                            </div>
                                            <h3 className={`${styles.reviewerName}`}>
                                                Leslie Alexander
                                            </h3>
                                            <p className={`${styles.reviewerMsg}`}>
                                                "Thanks to the travel agency, my family and I had an
                                                amazing vacation without any stress or hassle."
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.singleReview} mb-4`}>
                                        <div>
                                            <div className={`${styles.reviewImg}`}>
                                                <Image src={reviewer2} alt="reviewer" />
                                            </div>
                                        </div>
                                        <div className={`${styles.reviewContent}`}>
                                            <div className={`${styles.reviewTime}`}>
                                                <p className={`${styles.reviewDay}`}>3 day ago</p>
                                                <button
                                                    type="button"
                                                    className={`${styles.reviewDot}`}
                                                >
                                                    ...
                                                </button>
                                            </div>
                                            <h3 className={`${styles.reviewerName}`}>
                                                Dianne Russell
                                            </h3>
                                            <p className={`${styles.reviewerMsg}`}>
                                                "The travel agency's customer service was top-notch
                                                and they went above and beyond to meet our needs."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} xxl={4} className="pt-4 pt-xxl-0">
                            <div className={`${styles.bdContentRight}`}>
                                <BlogSearch />
                                <BlogCategory />
                                <BlogPopular />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BlogDetails;
