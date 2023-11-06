import ContactForm from "@/components/contact/ContactForm";
import ContactHelp from "@/components/contact/ContactHelp";
import Banner from "@/components/global/Banner";
import { Col, Container, Row } from "react-bootstrap";


export const metadata = {
    title: 'Policyhut | Contact',
};

const page = () => {
  return (
      <div className="contactPage section-pb">
          <Banner />
          <Container>
              <Row>
                  <Col lg={6}>
                      <ContactHelp />
                  </Col>
                  <Col lg={6}>
                      <ContactForm />
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default page