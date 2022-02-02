import Head from "next/head";

import "antd/dist/antd.dark.less";
import type { AppProps } from 'next/app'
import "@fontsource/poiret-one";
import { Layout } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

import '../styles/global.css'
import styles from '../styles/base.module.css'


const { Header, Footer, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Alex Wasik</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header className={styles.header}>
          <HeaderComponent />
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    </div>
  );
}

export default MyApp
