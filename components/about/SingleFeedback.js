import author from "@/public/images/avater.png";
import Image from 'next/image';
import styles from './customerFeedback.module.css';

const SingleFeedback = ({ feedback }) => {
    return (
        <div className={`${styles.singleFeedback}`}>
            <div className={`${styles.feedbackContent}`}>
                <p className={`${styles.msg}`}>{feedback.msg}</p>
            </div>
            <div className={`${styles.feedbackAuthor}`}>
                <div>
                    <div className={styles.authorImg}>
                        <Image
                            src={author}
                            alt="author"
                        />
                    </div>
                </div>
                <div className={`${styles.authorInfo}`}>
                    <h3 className={styles.authorName}>{feedback.name}</h3>
                    <span>{feedback.designation}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;
