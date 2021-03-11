import { Button, Col, Result, Row, Typography } from 'antd';
import React from 'react'
import { useHistory } from 'react-router';
import Container from './Container';

function PageNotFound() {

    const history = useHistory();

    const textStyle = {
        color: '#fff'
    }

    const text = (textForm) => (
        <Typography.Text style={textStyle}>{textForm}</Typography.Text>
    )

    return (
        <Container>
            <Row align="center" style={{marginTop: 64}}>
                <Col>
                    <Result
                        status={"404"}
                        title={text("404")}
                        subTitle={text("Sorry, the page you visited does not exist.")}
                        extra={<Button type="primary" onClick={() => history.push('/')} >Back Home</Button>}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound
