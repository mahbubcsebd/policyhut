"use client"

import home from '@/public/icons/home.svg';
import bannerBg from '@/public/images/banner-bg.jpg';
import bannerImg from '@/public/images/banner.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from 'react-bootstrap';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import styles from './banner.module.css';

function Banner(props) {
    const paths = usePathname();
    const pageName = paths.split('/').pop();
    const decodedPaths = pageName.split('/').map(decodeURIComponent);
    return (
        <div
            id="page-banner"
            className={`${styles.pageBanner} section-pb`}
        >
            <div className={`${styles.pageBannerArea}`}>
                <Image
                    src={bannerBg}
                    alt="bannerBg"
                    className={`${styles.bannerBg}`}
                />
                <Image
                    src={bannerImg}
                    alt="bannerImg"
                    className={`${styles.bannerImg}`}
                />
                <Container>
                    <div className={`${styles.bannerContent}`}>
                        <h2>{decodedPaths}</h2>
                        <div className="d-flex gap-2 align-items-center">
                            <Image src={home} alt='home'/>
                                <Breadcrumb
                                    homeElement="Home"
                                    separator="/"
                                    containerClasses="next-breadcrumb-container"
                                    listClasses="next-breadcrumb-item"
                                    activeClasses="active"
                                    capitalizeLinks={true}
                                />
                            </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Banner;
