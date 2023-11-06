import pb1 from '@/public/images/pb-1.png';
import pb2 from '@/public/images/pb-2.png';
import pb3 from '@/public/images/pb-3.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogDetails.module.scss';

function BlogPopular() {
    return (
        <div className={`${styles.bdSideBox}`}>
            <h2 className={`${styles.bdSideTitle}`}>Popular Blog</h2>
            <div className={`${styles.popularBlogCollection}`}>
                <div className={`${styles.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${styles.pbImg}`}>
                            <Image src={pb1} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${styles.pbContent}`}>
                        <p className={`${styles.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${styles.pbTitle}`}>
                            The Role of Logistics Crisis Management
                        </Link>
                    </div>
                </div>
                <div className={`${styles.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${styles.pbImg}`}>
                            <Image src={pb2} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${styles.pbContent}`}>
                        <p className={`${styles.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${styles.pbTitle}`}>
                            Logistics and E-commerce: Pairt
                        </Link>
                    </div>
                </div>
                <div className={`${styles.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${styles.pbImg}`}>
                            <Image src={pb3} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${styles.pbContent}`}>
                        <p className={`${styles.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${styles.pbTitle}`}>
                            Navigating the Complexities Supply
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPopular;
