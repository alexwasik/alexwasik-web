
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { Card, Col, Row, Space } from 'antd';
import styles from '../styles/base.module.css'
import { myLoader, openLink } from '../helpers/helpers';

const { Meta } = Card;

export interface ItemsProps {
  items: ContentItem[]
}

export interface ContentItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure?: {
    link?: string
    type?: string
  }
  categories: string[]
}

function Articles({ items }: ItemsProps) {
  return (
    <div>
      <Head>
        <title>Alex Wasik - Articles</title>
        <meta name='description' content='Alex Wasik - Resume' />
        <meta name='keywords' content='alex wasik, software, developer, software developer, articles' />
        <meta name='robots' content='index, follow' />
        <meta name='DC.title' content='Alex Wasik - Articles' />
      </Head>          
      <Row justify='center' gutter={[24,24]}>
        {items.map((item: ContentItem) => {          
          return (
            <Col
              xs={24}
              md={8}
              key={item.title}
            >
              <Card
                // bodyStyle={{ background: '#716f72' }}
                hoverable
                onClick={() => openLink(item.link)}
                cover={
                  <Image
                    unoptimized={true}
                    loader={myLoader}
                    alt='story image'
                    src={item.thumbnail}
                    width={1200}
                    height={700}
                  />
                }
              >
                <Meta
                  className={styles.cardTitle}
                  title={item.title}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

Articles.getInitialProps = async () => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alex-wasik')
  const json = await res.json()

  return {
    items: json.items
  }
}


export default Articles;
