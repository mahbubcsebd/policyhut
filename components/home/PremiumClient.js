import pc1 from "@/public/icons/pc-1.png";
import pc2 from "@/public/icons/pc-2.png";
import pc3 from "@/public/icons/pc-3.png";
import pc4 from "@/public/icons/pc-4.png";
import pc5 from "@/public/icons/pc-5.png";
import pc6 from "@/public/icons/pc-6.png";
import pc7 from "@/public/icons/pc-7.png";
import pc8 from "@/public/icons/pc-8.png";
import Image from "next/image";
import { Container, Row } from 'react-bootstrap';
import styles from "./premiumClient.module.css";

const PremiumClient = () => {
  return (
      <div
          id="premiumClient"
          className="premiumClient section-pb"
      >
          <div className="premiumClientArea">
              <Container>
                  <Row>
                      <h2 className={styles.pcClientTitle}>
                          We’ve 2.5K+ Global Premium Clients
                      </h2>
                  </Row>
                  <div className={styles.pcWrapper}>
                        <div className={styles.singlePC}>
                            <Image src={pc1} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc2} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc3} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc4} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc5} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc6} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc7} alt="pc" />
                        </div>
                        <div className={styles.singlePC}>
                            <Image src={pc8} alt="pc" />
                        </div>
                  </div>
              </Container>
          </div>
      </div>
  );
}

export default PremiumClient