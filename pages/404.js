import "@/app/globals.css";
import error from '@/public/images/404.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './404.module.css';

function PageNotFound() {
    const router = useRouter();
    setTimeout(() => {
        router.push('/');
    }, 5000);
    return (
        <div className="">
            <div
                id="notFoundPage"
                className="notFoundPage"
            >
                <div className="notFoundArea section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className={styles.notFoundContent}>
                                    <Image
                                        src={error}
                                        alt="404"
                                    />

                                    <h2 className={styles.notFoundTitle}>
                                        404 Page Not Found
                                    </h2>
                                    <p className={styles.notFoundText}>
                                        This page is incidentally inaccessible
                                        because of support. We will back very
                                        before long much obliged for your
                                        understanding
                                    </p>
                                    <Link
                                        className="btnBlue"
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
