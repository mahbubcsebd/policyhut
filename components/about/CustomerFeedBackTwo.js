'use client';

import customerFeedback from '@/data/customerFeedback';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SingleFeedback from './SingleFeedback';

const CustomerFeedbackTwo = () => {
    const slider = React.useRef(null);

    // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <button
    //         {...props}
    //         className={
    //             'slick-prev slick-arrow' +
    //             (currentSlide === 0 ? ' slick-disabled' : '')
    //         }
    //         aria-hidden="true"
    //         aria-disabled={currentSlide === 0 ? true : false}
    //         type="button"
    //     >
    //         Previous
    //     </button>
    // );
    // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //     <button
    //         {...props}
    //         className={
    //             'slick-next slick-arrow' +
    //             (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    //         }
    //         aria-hidden="true"
    //         aria-disabled={currentSlide === slideCount - 1 ? true : false}
    //         type="button"
    //     >
    //         Next
    //     </button>
    // );


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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
        <div
            id="customerFeedback"
            className="customerFeedback section bgLight"
        >
            <div className="customerFeedbackArea">
                <Container>
                    <Row>
                        <div className="sectionTopTitleBetween">
                            <h2 className="sectionTitle">
                                What our customers are talking about
                            </h2>
                            <div className="slickBtnBox">
                                <button
                                    onClick={() => slider?.current?.slickPrev()}
                                >
                                    <AiOutlineLeft />
                                </button>
                                <button
                                    onClick={() => slider?.current?.slickNext()}
                                >
                                    <AiOutlineRight />
                                </button>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Slider
                            ref={slider}
                            {...settings}
                        >
                            {customerFeedback.map((feedback) => {
                                return (
                                    <SingleFeedback
                                        feedback={feedback}
                                        currentSlide={1}
                                        key={feedback.id}
                                    />
                                );
                            })}
                        </Slider>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CustomerFeedbackTwo;
