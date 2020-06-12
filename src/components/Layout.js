import React from 'react';
import styled from 'styled-components';
import NavigationBar from './Navbar';
import Footer from './Footer'

export default function Layout (props) {

    const { children } = props
    return (
        <Wrapper>
            <ContentContainer className='bg-light'>
                <NavigationBar />
                <MainContent>
                    <main>{children}</main>
                </MainContent>
                <Footer />
            </ContentContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

const MainContent = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem
`