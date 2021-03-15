import { Modal } from 'antd'
import React, { useEffect } from 'react'
import YouTube from 'react-youtube'

function TrailerModal(props) {

    const { isShowTrailer, setIsShowTrailer, movieTrailer } = props

    const handleOk = () => {
        setIsShowTrailer(false)
    }

    const handleCancel = () => {
        setIsShowTrailer(false)
    }

    const size = {
        width: '100%',
        height: '640'
    }

    const opts = {
        height: size.height,
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
    };

    return (
        <Modal title="Movie Trailer" bodyStyle={{padding: 0}} destroyOnClose={true} closable={false} footer={null} width={size.width} visible={isShowTrailer} onOk={handleOk} onCancel={handleCancel}>
            <YouTube videoId={movieTrailer.key} opts={opts} />
        </Modal>
    )
}

export default TrailerModal
