import Image from 'next/image';
import Link from 'next/link';
import styles from './blogs.module.css';

function SingleBlog(props) {
    const { id, title, desc, date, img, tag } = props;
    return (
        <div className={`${styles.singleBlog}`}>
            <Link
                href={`/blog/${title.replace(/\s+/g, '%').toLowerCase()}-${id}`}
                className={`${styles.blogImgBox}`}
            >
                <Image
                    src={img}
                    alt="blog-img"
                    className={`${styles.blogImg}`}
                />
                <p className={`${styles.blogDate}`}>{date}</p>
            </Link>
            <div className={`${styles.blogContent}`}>
                <Link
                    href={`/blog/${title
                        .replace(/\s+/g, '-')
                        .toLowerCase()}-${id}`}
                    className={`${styles.blogTitle}`}
                >
                    {title}
                </Link>
                <p className={`${styles.blogDesc}`}>{`${desc.slice(
                    0,
                    50
                )}...`}</p>
            </div>
        </div>
    );
}

export default SingleBlog;
