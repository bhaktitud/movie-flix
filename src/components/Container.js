import React from 'react'
import { Button, Layout, Menu, Typography } from 'antd'
import { useHistory } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

const Container = ({children}) => {
    
    const history = useHistory()

    const handleBack = () => {
        history.push('/')
    }

    const menuStyle = {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#E50914'
    }

    return (
        <>
            <Layout>
                <Header style={{position:'absolute', zIndex: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                        <a onClick={() => handleBack()} style={menuStyle}>
                            MovieFlix
                        </a>
                        <Button style={{backgroundColor: '#E50914', color: '#FFF'}}>
                            Sign In
                        </Button>
                    </div>
                </Header>
                <Content className="site-layout" style={{ padding: '0', width: '100%', backgroundColor: '#000' }}>
                    {
                        children
                    }
                </Content>
            </Layout>
        </>
    )

}

export default Container