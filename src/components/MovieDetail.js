import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSimilarMovie } from '../store/actions';
import Container from './Container';
import { Avatar, BackTop, Col, Descriptions, Divider, Image, List, Row, Statistic, Typography } from 'antd';
import MovieCard from './MovieCard';
import { LikeOutlined } from '@ant-design/icons';
import PageNotFound from './PageNotFound';


const baseImageURL = 'https://image.tmdb.org/t/p/'

export default function MovieDetail(props) {

    const dispatch = useDispatch()
    const location = useLocation();

    const similarMovies = useSelector(state => state.similarMovies)
    const loadFetching = useSelector(state => state.loadFetching)

    const { detail } = location.state

    useEffect(() => {
        dispatch(fetchSimilarMovie(detail.id))
    }, [])
    
    const valueStyle = {
        fontSize: 16,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        color: '#dae7e6'
    }

    const labelStyle = {
        fontSize: 16,
        color: '#dae7e6'
    }

    const subTitle = {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#dae7e6'
    }

    const poster_sizes = [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
    ]

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

    const labels = (text) => (
        <Typography.Text style={labelStyle}>{text}</Typography.Text>
    )

    const values = (text) => (
        <Typography.Text style={valueStyle}>{text}</Typography.Text>
    )

    const mainTitle = (text) => (
        <Typography.Text style={subTitle}>{text}</Typography.Text>
    )

    return (
        <Container>
            <div>
                <Row 
                    justify='center'
                    align='bottom'
                    gutter={{ xs: 8, sm: 10, md: 10, lg: 10 }} 
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.95), rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${baseImageURL}${poster_sizes[6]}${detail?.backdrop_path})`, 
                        padding: 8, 
                        borderRadius: 10,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <Col lg={{ span: 4 }} style={{paddingTop: 64}}>
                        <Image
                            width={{
                                xs: 300,
                                sm: 300,
                                md: 200,
                                lg: 200,
                                xl: 200,
                                xxl: 200,
                            }}
                            src={`${baseImageURL}${poster_sizes[4]}${detail?.poster_path}`}
                        />
                    </Col>
                    <Col lg={{ span: 12 }}>
                        <Descriptions title={mainTitle(detail?.title)} style={{ backgroundColor:'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)', padding: 10, borderRadius: 5}}>
                            <Descriptions.Item label={labels('Original Title')}>
                                {
                                    values(detail?.original_title)
                                }
                            </Descriptions.Item>
                            <Descriptions.Item label={labels("Release Year")} span={2}>
                                {
                                    values(detail?.release_date.split('-')[0])
                                }
                            </Descriptions.Item>
                            <Descriptions.Item label={labels("Language")}>
                                {
                                    values(detail?.original_language)
                                }
                            </Descriptions.Item>
                            <Descriptions.Item label={labels("Popularity")}>
                                {
                                    values(detail?.popularity)
                                }
                            </Descriptions.Item>
                            <Descriptions.Item label={labels("Rating")}>
                                {
                                    <Avatar>{detail?.vote_average}</Avatar>
                                }
                            </Descriptions.Item>
                            <Descriptions.Item label={labels("Overview")}>
                                {
                                    values(detail?.overview)
                                }
                            </Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <Divider style={{color: '#f5f5f5'}}>Related Movies</Divider>
                <Row>
                    <Col>
                        <List
                            loading={loadFetching}
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 5,
                                xxl: 5,
                            }}
                            dataSource={similarMovies}
                            renderItem={item => (
                                <List.Item>
                                    <MovieCard item={item} />
                                </List.Item>
                            )}
                        />
                        <BackTop>
                            <div style={upStyle}>UP</div>
                        </BackTop>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
