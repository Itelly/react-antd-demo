import React from 'react'
import { Card, Row, Col, Timeline, Carousel } from 'antd'
import { render } from 'react-dom'
import styles from './basic.css'

class Home extends React.Component {

    render() {
        return (
            <div>
              <Card title="公司概况" className="animated zoomIn mainTop">
                <div className={styles.carousel}>
                  <Carousel autoplay>
                    <div><img src='./src/assets/images/slide1.jpg'/></div>
                    <div><img src='./src/assets/images/slide2.jpg'/></div>
                    <div><img src='./src/assets/images/slide3.jpg'/></div>
                    <div><img src='./src/assets/images/slide4.jpg'/></div>
                  </Carousel>
                </div>
                <div className={styles.main}>666</div>
              </Card>
              <Card title="发展历程" className="animated zoomIn mainTop">
                <Timeline>
                  <Timeline.Item color="green">
                    <p>2013-09-01 xxx饰品公司在东莞市工商企业管理机构正式注册，xxx公司初步成立，公司主要有法定人Telly投资</p>
                    <p>主营业务：饰品的样品打板、设计、抛光、滴油、烧焊、半成品制作等。</p>
                    <p>Solve initial network problems 3</p>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <p>2014-02-01 Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3</p>
                  </Timeline.Item>
                  <Timeline.Item color="green">
                    <p>2016-05-01 Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3</p>
                  </Timeline.Item>
                  <Timeline.Item color="blue">
                    <p>2017-01-01 Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
              <Card title="联系我们" className={styles.mainTop} className="animated zoomIn">
                <div>
                  <Row>
                    <Col span={10}>
                      <div className="contact">
                        <p>联系电话：8865-78642365</p>
                        <p>邮箱地址：1654678582@qq.com</p>
                        <p>邮政编码：654658</p>
                        <p>联系地址：东莞市长安镇锦厦锦源路长安大厦B栋503号</p>
                      </div>
                    </Col>
                    <Col span={14}>
                      <div>地图位置定位</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </div>
        )
    }
}


export default Home
