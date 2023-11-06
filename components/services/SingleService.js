import Image from 'next/image';
import styles from './services.module.css';

const SingleService = ({service}) => {
    const { img, icon, title, text } = service;
  return (
    <div>
        <h1>
            <div className={styles.singleService}>
                <div className={styles.serviceTopBox}>
                    <Image
                        className={styles.serviceImage}
                        src={img}
                        alt="service-image"
                    />
                    <div className={styles.iconBox}>
                        <Image
                            className={styles.icon}
                            src={icon}
                            alt="service-icon"
                        />
                    </div>
                </div>
                <div className={styles.serviceContent}>
                    <h3 className={styles.serviceTitle}>
                        {title}
                    </h3>
                    <p className={styles.serviceText}>
                        {text}
                    </p>
                </div>
            </div>
        </h1>
    </div>
  )
}

export default SingleService;