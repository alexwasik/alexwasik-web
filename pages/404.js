import React from 'react';
import Head from 'next/head';
import styles from '../styles/base.module.css';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className={styles.contentCenter}>
        <h1>404</h1>
        <h2>Page not found</h2>
      </div>
    </>
  );
}
export default Page404;
