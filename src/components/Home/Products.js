import React from 'react'
import { Card, Row, Col } from 'antd'
import { render } from 'react-dom'

class Products extends React.Component {
	render() {
		return (
			<div>
				<Card title="产品成果" className="animated zoomIn mainTop">
          <Row>
            <Col span={4}>
              <Card style={{ width: "90%" }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
           <Col span={4}>
              <Card style={{ width: "90%" }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{ width: '90%' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{ width: "90%" }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                	<img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                   <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{ width: "90%" }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
                </div>
              </Card>
            </Col>
            <Col span={4}>
              <Card style={{ width: "90%" }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                <div className="custom-card">
                  <h3>Europe Street beat</h3>
                  <p>www.instagram.com</p>
              	</div>
           	  </Card>
          	</Col>
        	</Row>
        </Card>
			</div>
		)
	}
}

export default Products
