import React, { useEffect } from 'react'
import 'antd/dist/antd.css';

import { DatePicker, Space, Input, Tooltip, Row, Col, Typography, Select, Card, Button  } from 'antd';
import { InfoCircleOutlined, UserOutlined, BookOutlined, HomeOutlined, DownloadOutlined, CloseOutlined  } from '@ant-design/icons';

function FormComponent(props: any) {

    const { Title } = Typography;
    const { Option } = Select;

    

    return (
        <Card title="Fill the form" 
        actions={[
            <DownloadOutlined onClick={props.saveFlyer()} key="download" />,
            <CloseOutlined key="close" />
          ]}
        extra={<Tooltip title="Tell us more about the talk">
        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
    </Tooltip>} style={{ width: 300 }}>
            <Row>
                <Col span={24}>
                    <Title level={5}>Conference name</Title>
                    <Input
                        placeholder="Name of the conference"
                        onChange={props.updateName}
                        prefix={<BookOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Eg. How to become a JS developer">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title level={5}>Speaker name</Title>
                    <Input
                        placeholder="Speaker name"
                        onChange={props.updateSpeakerName}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Eg. TheGame404">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Title level={5}>Location</Title>
                    <Input
                        placeholder="City"
                        onChange={props.updateCity}
                        prefix={<HomeOutlined className="site-form-item-icon" />}
                        suffix={
                            <Tooltip title="Eg. TheGame404">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                    />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Title level={5}>Date and Time</Title>
                    <Space size={12} style={{ width: '100%' }} direction="vertical">
                        <DatePicker style={{ width: '100%' }} showTime onChange={props.updateDate} />
                    </Space>
                </Col>
            </Row>


            <Row>
                <Col span={24}>
                    <Title level={5}>Theme</Title>
                    <Select onSelect={props.updateTheme} defaultValue="gdg" style={{ width: '100%' }} onChange={() => { }}>
                        <Option value="gdg">GDG</Option>
                        <Option value="owasp">OWASP</Option>
                        <Option value="custom">Custom background</Option>
                    </Select>
                </Col>
            </Row>

        
        
        </Card>
    )
}

export default FormComponent
