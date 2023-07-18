import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY } from './utils/constants';

const Video = ({ info, type }) => {
    const [subscriber, setSubScribers] = useState();
    useEffect(() => {
        const loadChannelData = async () => {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${info.snippet.channelId}&key=${API_KEY}`)
            const json = await data.json();
            setSubScribers(json.items[0].statistics.subscriberCount);
        }
        loadChannelData();
    }, [])

    const { snippet } = info;
    const { channelTitle, thumbnails, title } = snippet;
    const { url } = thumbnails.medium;
    // const { viewCount, likeCount } = info?.statistics;

    return (
        <>
            <div className='w-72 p-2 m-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-red-500 transition duration-300'>
                <Link to={`/watch?v=${type === 'popular' ? info.id : info.id.videoId}`} className='flex flex-col'>
                    <img alt='thumbnail' src={url} className='mb-2 rounded-lg' />
                    <p className='font-bold text-lg text-white'>{title}</p>
                    <p className='text-white'>Channel: {channelTitle}</p>
                    {/* <span className='text-white'>Views: {viewCount}</span>
    <span className='text-white'>Likes: {likeCount}</span> */}
                    <span className='text-white'>Subscribers: {subscriber}</span>
                </Link>
            </div>



        </>
    )
}

export default Video