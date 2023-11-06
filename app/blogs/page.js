import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogTwoCol from '@/components/blog/BlogTwoCol';
import Banner from '@/components/global/Banner';
import { Col, Container, Row } from 'react-bootstrap';


export const metadata = {
    title: 'Policyhut | Blog',
};

const page = () => {
  return (
      <div
          id="blogWithSidebar"
          className="blogWithSidebar section-pb"
      >
          <div className="blogWithSidebarArea">
          <Banner/>
            <Container>
                <Row>
                    <Col lg={8}>
                        <BlogTwoCol/>
                    </Col>
                    <Col lg={4}>
                        <BlogSidebar/>
                    </Col>
                </Row>
            </Container>
          </div>
      </div>
  );
}

export default page