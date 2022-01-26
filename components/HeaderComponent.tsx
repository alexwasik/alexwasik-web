import React from 'react';
import { Row, Col, Button } from 'antd';
import{ FontColorsOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <>
      <Row justify='space-around'>
        <Col
          span={6}
          style={{ paddingTop: 10 }}>
          <Button
            type='link'
            size='large'
            href='/'
            icon={
              <FontColorsOutlined
                style={{ fontSize: 24 }}
              />} 
          />
        </Col>
        <Col
          span={6}>
          <Button type='link' href='/articles'>Articles</Button>
        </Col>
        <Col span={6}>
          <Button type='link' href='https://www.github.com/alexwasik' target='_blank'>GitHub</Button>
        </Col>
        <Col span={6}>
          <Button type='link' href='/resume'>Resume</Button>
        </Col>
      </Row>
    </>
  );
}

export default HeaderComponent;
