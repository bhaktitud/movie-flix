import { Button, List, Row, Col, Input, BackTop } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList, fetchUpcomingMovie } from '../store/actions';
import Container from './Container';
import MovieCard from './MovieCard';
import './Home.css'

const { Search } = Input;

export default function Home() {

    const dispatch = useDispatch()

    const [pageIndex, setPageIndex] = useState(1)
    const [resourceList, setResourceList] = useState([])

    const movies = useSelector(state => state.movies)
    const upcomingMovies = useSelector(state => state.upcomingMovies)
    const loadFetching = useSelector(state => state.loadFetching)

    useEffect(() => {
        dispatch(fetchUpcomingMovie())
    }, [])

    useEffect(() => {
        dispatch(fetchMovieList(pageIndex))
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pageIndex])

    useEffect(() => {
        setResourceList(movies)
    }, [movies])

    const loadMoreAction = () => {
        setPageIndex(pageIndex => pageIndex + 1)
    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.scrollHeight ) return;
        loadMoreAction()
    }
    
    const loadMore = (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={() => loadMoreAction()}>load more</Button>
        </div>
    );

    const upStyle = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 4,
        backgroundColor: '#E50914',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    };

    return (
        <Container>
            <Row justify="center" >
                <Col 
                    style={{
                        backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.95), rgba(0,0,0,0.6), rgba(220,220,225,0.1)),url(https://i.imgur.com/o2uXrUr.jpg)', 
                        textAlign: 'center', 
                        width: '100%', 
                        height: '70vh',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <div class="jumbotron">
                        <p className="main-title">Unlimited movies, TV shows, and more.</p>
                        <p className="sub-title">Watch anywhere. Cancel anytime.</p>
                        <p className="sub-sub-title">Ready to watch? Go find your favourite movies.</p>
                        <Search
                            style={{width: '60vw', marginTop: 20}}
                            placeholder="Find Your Favourite Movie..."
                            allowClear
                            enterButton={<Button style={{backgroundColor: '#E50914', color: '#FFF'}}>Search</Button>}
                            size="large"
                        />
                    </div>
                </Col>
                <Col>
                    <div style={{ padding: 24, minHeight: 380 }}>
                        <List
                            loading={loadFetching}
                            loadMore={loadMore}
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 5,
                                xxl: 5,
                            }}
                            dataSource={resourceList}
                            renderItem={item => (
                                <List.Item>
                                    <MovieCard item={item} />
                                </List.Item>
                            )}
                        />
                        <BackTop>
                            <div style={upStyle}>UP</div>
                        </BackTop>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}
