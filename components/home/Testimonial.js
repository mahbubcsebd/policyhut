"use client"

import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import testimonials from '@/data/testimonial.js';
import styles from './testimonial.module.css';

function Testimonial() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <BsArrowRight />,
        prevArrow: <BsArrowLeft />,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div id="testimonial" className="testimonial section bgLightPink">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="sectionTopDescription topSide mb-5">
                            <span className="shape">Testimonials</span>
                            <h2>Customers Talk About Us</h2>
                            <p>
                                Customer support represents the resources within your company that
                                provide technical assistance to consumers after they purchase a
                                product or service.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className={`${styles.testimonialSlider}`}>
                    <div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div className={styles.singleTestimonial} key={index}>
                                    <p className={`${styles.testimonialText}`}>
                                        {testimonial.msg}
                                    </p>
                                    <div className={styles.testimonialBottom}>
                                        <div className={styles.writerImg}>
                                            <Image src={testimonial.img} alt="" />
                                        </div>
                                        <div className={styles.testimonialBio}>
                                            <h4 className={styles.writerName}>
                                                {testimonial.name}
                                            </h4>
                                            <p className={styles.writerPost}>{testimonial.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Testimonial;
