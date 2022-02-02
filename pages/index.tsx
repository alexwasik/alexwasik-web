import Head from 'next/head';
import { Col, Grid, Image, Row, Typography } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import type { NextPage } from 'next'
import {
  mdTitleStyle,
  mdTitleTextStyle,
  mdSecondaryTextStyle,
  xsTitleStyle,
  xsTitleTextStyle,
  xsSecondaryTextStyle,
  iconStyle,
  lgImageStyle,
  xsImageStyle,
  mdImageStyle,
  imageStyle,
} from '../styles/homeStyles';
import styles from '../styles/base.module.css';

const { Text, Paragraph } = Typography
const { useBreakpoint } = Grid;

const Home: NextPage = () => {
  const breakpoints = useBreakpoint();
  const { xs, md } = useBreakpoint();

  return (
    <div>
      <Head>
        <title>Alex Wasik</title>
        <meta name='description' content='Alex Wasik - Full Stack Software Developer' />
        <meta name='keywords' content='alex wasik, software, developer, software developer' />
        <meta name='robots' content='index, follow' />
        <meta name='DC.title' content='Alex Wasik - Full Stack Software Developer' />
      </Head>
    <Row>
      <Row>
        <Col
          style={md ? mdTitleStyle : xsTitleStyle}
          xs={{ span: 14 }}
          md={{ span: 14, push: 8 }}
        >
          <Row>
            <Col span={24}>
              <Text style={ md ? mdTitleTextStyle : xsTitleTextStyle}>Alex Wasik</Text>
              <Image
                // style={ xs ? xsImageStyle : md ? mdImageStyle : lg ? lgImageStyle }
                style={imageStyle(breakpoints as Breakpoints)}
                preview={false}
                src="./assets/me.jpg"
                alt="me"
                className={styles.image}
              />
            </Col>
            <Col span={24}>
              <Text style={ md ? mdSecondaryTextStyle : xsSecondaryTextStyle} type='secondary'>Full Stack Developer</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify='center' align='top'>
        <Col
          xs={{ span: 20 }}
          md={{ span: 14 }}
          xl={{ span: 8 }}
        >
          <Paragraph>
            I am a Full Stack Developer with a passion for creating Things. All kinds of Things. I love trying new technologies
            and spinning up applications just to try a thing. With professional experience ranging from tiny startups with an 
            MVP to Large Corporations. I&apos;ve worked on SasS platforms, internal helper tools, done Consulting, Freelance, and helped build
            development teams. I enjoy working with other developers, designers and clients to create things that are 
            useful and easy to use. I am always looking for new opportunities to learn and grow.
          </Paragraph>
          <Paragraph>
            I truly enjoy mentoring developers looking to break in to our industry and helping them grow.
            I am a fan of the open-source community and am always looking to experience something new.
          </Paragraph>
          <Paragraph>
            <Row>
              <Col
                xs={{ span: 12 }}
              >
                <ul>
                  <li><RightOutlined style={iconStyle} />React</li>
                  <li><RightOutlined style={iconStyle} />Node</li>
                  <li><RightOutlined style={iconStyle} />MongoDB</li>
                  <li><RightOutlined style={iconStyle} />AWS</li>
                  <li><RightOutlined style={iconStyle} />Vue</li>
                </ul>
              </Col>
              <Col
                xs={{ span: 12 }}
              >
                <ul>
                  <li><RightOutlined style={iconStyle} />React Native</li>
                  <li><RightOutlined style={iconStyle} />Express</li>
                  <li><RightOutlined style={iconStyle} />Postgres</li>
                  <li><RightOutlined style={iconStyle} />Firebase</li>
                  <li><RightOutlined style={iconStyle} />Ruby on Rails</li>
                </ul>
              </Col>
            </Row>
          </Paragraph>
        </Col>
      </Row>
    </Row>
    </div>
  )
}

export default Home
