import React from 'react';
import styled from 'styled-components';

export default function Skeleton() {
    const totalSkel = [0,1,2,3,4,5];
    return (
        <div className='d-flex flex-row flex-wrap align-items-center justify-content-center'>
            {
                totalSkel.map(value => (
                    <div 
                            className='d-flex bg-white flex-column mx-3 my-3 shadow rounded align-items-center justify-content-around' 
                            style={{ width: '20rem', height: '20rem' }}
                        >
                            <div className='flex-wrap w-100 h-100 bg-light d-flex flex-column justify-content-center align-items-center'>
                                <div className='w-75 h-50'>
                                    <SSkeletonLine />
                                </div>
                            </div>
                            <Description className='border-top d-flex flex-row mx-2 pt-2 pb-2 justify-content-between align-items-between w-100 h-50'>
                                <div className='w-100 h-100 d-flex flex-column mx-2 align-items-start justify-content-center '>
                                    <div className='w-100 h-50'>
                                        <SSkeletonLine />
                                    </div>
                                </div>
                                <div className='w-75 h-100 pr-2 d-flex flex-column align-items-center mr-1 justify-content-center'>
                                    <div className='w-75 h-75'>
                                        <SSkeletonLine />
                                    </div>
                                </div>
                            </Description>
                    </div>
                ))
            }

        </div>
    )
}


const Description = styled.div`
    background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
`

const SSkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #F0F0F0 5%, #F8F8F8 20%, #F0F0F0 80%);
  background-size: 85% 85%;
  animation: pulse 0.5s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    80% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;
  &::before {
    content: "\00a0";
  }
`;