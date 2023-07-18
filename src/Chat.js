import React from 'react'

const Chat = ({ chat }) => {
  return (

    <div className='flex border-b rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white m-1'>
      <img
        className='w-10 rounded-full'
        alt='profile'
        src={`https://source.unsplash.com/random/200x200?sig=${Math.floor(Math.random() * 20)}`}
      />
      <span className='m-2 font-bold'>{chat.name} :</span>
      <span className='flex items-center'>{chat.message.length === 0 ? 'hi' : chat.message}</span>
    </div>

  )
}

export default Chat