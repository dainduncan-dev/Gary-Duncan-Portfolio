import Head from "next/head";
import Image from "next/image";
import Typed from "react-typed";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gary Duncan Portfolio</title>
        <meta name="description" content="Gary Duncan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.name}>
          <Typed strings={["US Army Veteran", "Software Engineer", "Gary Duncan"]} typeSpeed={40} backSpeed={50} />
        </div>
      </main>
    </div>
  );
}
