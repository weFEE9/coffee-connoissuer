import Image from 'next/image';

import styles from './page.module.css';
import Banner from '@/component/banner/banner';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner buttonText='View stores nearby' />
      <Image className={styles.heroImage}
        src='/static/hero-image.png'
        alt='hero image'
        width={700}
        height={400}
      />
    </main>
  );
}
