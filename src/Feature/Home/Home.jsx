import React from 'react'
import './styles.css'
import videoIntro from '../../asset/intro.mp4'
const Home = () => {
    return (
        <div className='main'>
            <video src={videoIntro} autoPlay loop muted className='video' />
        </div>
    )
}

export default Home