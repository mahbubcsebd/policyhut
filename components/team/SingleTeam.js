import Image from 'next/image';
import Link from 'next/link';
import styles from './team.module.css';

function SingleTeam({ name, img, post }) {
    return (
        <div className={`${styles.singleTeam}`}>
            <Link href="#" className={`${styles.teamImg}`}>
                <Image src={img} alt="team" />
            </Link>
            <div className={`${styles.teamContent}`}>
                <Link href="#" className={`${styles.teamName}`}>
                    {name}
                </Link>
                <p className={`${styles.teamText}`}>{post}</p>
            </div>
        </div>
    );
}

export default SingleTeam;
