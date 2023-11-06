import "@/app/globals.css";
import Header from '@/components/global/Header';
import error from '@/public/images/404.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

function PageNotFound() {
    return (
        <div className="">
            <Header />
            <div
                id="notFoundPage"
                className="notFoundPage"
            >
                <div className="notFoundArea section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <div className="notFound-content">
                                    <Image
                                        src={error}
                                        alt="404"
                                    />

                                    <h2 className="notFoundTitle">
                                        404 Page Not Found
                                    </h2>
                                    <p className="notFoundText">
                                        This page is incidentally inaccessible
                                        because of support. We will back very
                                        before long much obliged for your
                                        understanding
                                    </p>
                                    <Link
                                        className="btn btn-orange"
                                        href="/"
                                    >
                                        Go Back To Homepage
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;
