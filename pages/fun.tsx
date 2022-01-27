import React from 'react';
import { Row, Col, Card } from 'antd';
import Image from 'next/image';
import { myLoader, openLink } from '../helpers/helpers';
import { data } from '../helpers/funData';
import styles from '../styles/base.module.css';

export interface FunItem {
  key: number;
  title: string;
  description: string;
  url: string;
  image: string;
  priority?: boolean;
}

const { Meta } = Card;

const Fun = () => {
  return (
    <Row
      gutter={[24, 24]}
      justify='center'
>
      {data.map((item: FunItem) => {
        return (
          <Col
            key={item.key}
            xs={24}
            md={8}
          >
            <Card
              hoverable
              onClick={() => openLink(item.url)}
              title={item.title}
              cover={
                <Image
                  unoptimized={true}
                  loader={myLoader}
                  alt={item.title}
                  src={item.image}
                  width={800}
                  height={500}
                  priority={item.priority || false}
                />
              }
            >
              <Meta
                className={styles.cardTitle}
                title={item.description}
              />
            </Card>
          </Col>
      )})}
    </Row>
  );
}

export default Fun;
