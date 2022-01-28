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
    <Layout>
      <Header className={styles.header}>
        <HeaderComponent />
      </Header>
      <Content className={styles.content}>
        <Component {...pageProps} />
      </Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}

export default MyApp
