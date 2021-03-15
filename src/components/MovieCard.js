import { Card, Col, Image, Row, Statistic, Typography } from 'antd';
import { LikeOutlined, HeartOutlined } from '@ant-design/icons';
import React from 'react'
import { useHistory } from 'react-router-dom'

const { Meta } = Card;
const baseImageURL = 'https://image.tmdb.org/t/p/'

function MovieCard({ item }) {

    const history = useHistory()

    const handleOnDetail = (item) => {
        history.push({
            pathname: `/detail/movie/${item.id}`,
            state: {
                detail: item
            }
        })
    }

    const valueStyle = {
        fontSize: 16
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

    const descriptionDetail = (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic valueStyle={valueStyle} title="Popularity / Likes" value={item.popularity} prefix={<LikeOutlined />} />
            </Col>
            <Col span={12}>
                <Statistic valueStyle={valueStyle} title="Rating" value={item.vote_average} suffix="/ 10" prefix={<HeartOutlined />} />
            </Col>
        </Row>
    )

    return (
        <Card
            size={"small"}
            hoverable
            cover={<Image preview={false} src={`${baseImageURL}${poster_sizes[6]}${item.poster_path}`} />}
            onClick={() => handleOnDetail(item)}
        >
            <Meta title={item.title} description={descriptionDetail} />
        </Card>
    )
}

export default MovieCard
