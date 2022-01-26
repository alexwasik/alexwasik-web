import React from 'react';
import Image, { ImageLoaderProps } from 'next/image';
import { Card, Col, Row, Space } from 'antd';
import styles from '../styles/base.module.css'

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

const myLoader = ({ src }: ImageLoaderProps) => {
  return src
}

const openArticle = (link: string) => {
  window.open(link, '_blank')
}

function Articles({ items }: ItemsProps) {
  return (
    <div>
      <Row justify='center' gutter={[24,24]}>
        {items.map((item: ContentItem) => {
          console.log('image', item.thumbnail);
          
          return (
            <Col
              xs={24}
              md={8}
              key={item.title}
            >
              <Card
                bodyStyle={{ background: '#716f72' }}
                // style={{ minHeight: 250}}
                hoverable
                onClick={() => openArticle(item.link)}
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
