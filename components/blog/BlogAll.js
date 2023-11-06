import blogs from '@/data/blogs';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SingleBlog from './SingleBlog';

const BlogAll = () => {
  return (
      <div
          id="blogAll"
          className="blogAll section-pb"
      >
          <Container>
              <Row>
                  {blogs.map((blog) => {
                      const { id, title, date, img, tag, desc } = blog;
                      return (
                          <Col
                              md={6}
                              lg={4}
                              className="mb-4"
                              key={id}
                          >
                              <SingleBlog
                                  id={id}
                                  title={title}
                                  date={date}
                                  img={img}
                                  tag={tag}
                                  desc={desc}
                              />
                          </Col>
                      );
                  })}
              </Row>
              <Row>
                  <div className="paginationBox mt-5">
                      <ul className="paginationsList">
                          <li className="pagination-item prev-item deactive">
                              <Link href="#">
                                  <BsArrowLeft />
                              </Link>
                          </li>
                          <li className="pagination-item">
                              <Link href="#">1</Link>
                          </li>
                          <li className="pagination-item">
                              <Link href="#">2</Link>
                          </li>
                          <li className="pagination-item">
                              <Link href="#">3</Link>
                          </li>
                          <li className="pagination-item">
                              <Link href="#">4</Link>
                          </li>
                          <li className="pagination-item next-item active">
                              <Link href="#">
                                  <BsArrowRight />
                              </Link>
                          </li>
                      </ul>
                  </div>
              </Row>
          </Container>
      </div>
  );
}

export default BlogAll