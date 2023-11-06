"use client";

import faqs from '@/data/faqs';
import question from '@/public/icons/question-circle.svg';
import Image from 'next/image';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

function Faq() {
    return (
        <div
            id="faq"
            className="faq section-pb"
        >
            <div className="faq-area">
                <Container>
                    <Row>
                        <div className="sectionTopTitleCenter">
                            <h2 className="sectionTitle">
                                They frequently asked questions
                            </h2>
                        </div>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Accordion defaultActiveKey="1">
                                {faqs
                                    .slice(0, Math.ceil(faqs.length / 2))
                                    .map((faq) => {
                                        const { id, title, text } = faq;
                                        return (
                                            <Accordion.Item
                                                eventKey={id}
                                                key={id}
                                            >
                                                <Accordion.Header className="accordion-header">
                                                    <p>
                                                        <span>
                                                            <Image
                                                                src={question}
                                                                alt="q-sign"
                                                            />
                                                        </span>
                                                    </p>
                                                    {title}
                                                </Accordion.Header>
                                                <Accordion.Body className="accordion-body">
                                                    {text}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        );
                                    })}
                            </Accordion>
                        </Col>
                        <Col md={6}>
                            <Accordion
                                defaultActiveKey={(faqs.length / 2).toString()}
                            >
                                {faqs
                                    .slice(Math.ceil(faqs.length / 2))
                                    .map((faq) => {
                                        const { id, title, text } = faq;
                                        return (
                                            <Accordion.Item
                                                eventKey={id}
                                                key={id}
                                            >
                                                <Accordion.Header className="accordion-header">
                                                    <p>
                                                        <span>
                                                            <Image
                                                                src={question}
                                                                alt="q-sign"
                                                                className="q-sign"
                                                            />
                                                        </span>
                                                    </p>
                                                    {title}
                                                </Accordion.Header>
                                                <Accordion.Body className="accordion-body">
                                                    {text}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        );
                                    })}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Faq;
