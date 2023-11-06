"use client";

import customerFeedback from '@/data/customerFeedback';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SingleFeedback from './SingleFeedback';


const CustomerFeedback = () => {
    const slider = React.useRef(null);
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
}

export default CustomerFeedback