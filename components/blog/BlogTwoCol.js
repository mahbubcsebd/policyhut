/* eslint-disable no-undef */
/* eslint-disable import/extensions */

'use client';

import blogs from '@/data/blogs';
import { Col, Container, Row } from 'react-bootstrap';
import SingleBlog from './SingleBlog';
import styles from './blogs.module.css';

const BlogTwoCol = () => {
  return (
      <div
          id="blog"
          className="blog"
      >
          <div className={`${styles.blogArea}`}>
              <Container>
                  <Row>
                      {blogs.slice(0, 6).map((blog) => {
                          const { id, title, date, img, tag, desc } = blog;
                          return (
                              <Col
                                  md={6}
                                  lg={6}
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
              </Container>
          </div>
      </div>
  );
}

export default BlogTwoCol