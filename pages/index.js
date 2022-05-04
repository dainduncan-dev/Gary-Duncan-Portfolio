import Head from "next/head";
import Image from "next/image";
import Typed from "react-typed";
import styles from "../styles/Home.module.scss";
import 'react-typed/dist/animatedCursor.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gary Duncan Portfolio</title>
        <meta name="description" content="Gary Duncan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.nameWrapper}>
          <div className={styles.name}>
            <Typed
              strings={["US Army Veteran", "Software Engineer", "Gary Duncan"]}
              typeSpeed={40}
              backSpeed={50}
              showCursor={(false)}
            />
          </div>
          <div className={styles.subName}>
            <Typed strings={["Full Stack Python/JS Developer"]} 
              startDelay={7700}
              typeSpeed={10}
              showCursor={(false)}
            />
          </div>
        </div>
        
      </main>
    </div>
  );
}
