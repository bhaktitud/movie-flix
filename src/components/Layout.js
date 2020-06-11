import React from 'react';
import styled from 'styled-components';
import NavigationBar from './Navbar'


export default function Layout (props) {

    const { children } = props
    return (
        <Wrapper>
            <ContentContainer>
                <NavigationBar />
                <MainContent>
                    <main>{children}</main>
                </MainContent>
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
`