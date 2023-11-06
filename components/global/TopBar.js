"use client"

import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoMailOpenOutline } from 'react-icons/io5';
import styles from "./topBar.module.css";

const TopBar = () => {
  return (
      <div className={styles.topBar}>
          <Container fluid="md">
              <div className={styles.topBarInner}>
                  <div className={styles.topBarLeft}>
                      <p>
                          <CiLocationOn /> 2825 Winding Way, Providence, RI
                          02908
                      </p>
                  </div>
                  <div className={styles.topBarRight}>
                      <div className={styles.emailAddress}>
                          <p className={styles.email}><IoMailOpenOutline/> example@gmail.com</p>
                      </div>
                      <div className={styles.topBarSocial}>
                          <Link href="https://www.facebook.com/">
                              <FaFacebookF />
                          </Link>
                          <Link href="https://twitter.com/">
                              <FaTwitter />
                          </Link>
                          <Link href="https://www.instagram.com/">
                              <FaInstagram />
                          </Link>
                          <Link href="https://www.linkedin.com/">
                              <FaLinkedinIn />
                          </Link>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
  );
}

export default TopBar