import React, { useEffect , useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch  , useSelector} from 'react-redux';
import { closeSideBar } from './utils/sideBarSlice';
import Chat from './Chat';
import { updateChats } from './utils/chatSlice';
import { getName } from './utils/helper';
import { store } from './utils/store';
import { comments } from './utils/helper';
import { getMessage } from './utils/helper';

const Watch = () => {
    const [params] = useSearchParams();
    const chats = useSelector((store)=>store.chat.chat)
    const ref = useRef("");
    const id = params.get("v");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSideBar());
    }, [])

    useEffect(() => {
      const timer = setInterval(() => {
            const randomName = getName();
            const randomMessage = getMessage(Math.floor(Math.random()*30));
            dispatch(updateChats({"name":randomName , "message":randomMessage}))
      }, 2000);
      return () => {
        clearInterval(timer);
      }
    }, []) 
    const CommentContainer = ({ comments }) => {

        return (
            <>
                {comments.map((comment) => (
                    <div className=''>
                        <div className='bg-gray-200 mb-2'>
                            <div className='flex'>
                                <img alt='profile' className='w-10 p-2 ' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='></img>
                                <h1 className='font-bold'>yash</h1>
                            </div>
                            <div>{comment.comment}</div>
                        </div>
                        <div className="pl-4 border-l-2">
                            <CommentContainer comments={comment.reply} />
                        </div>
                    </div>
                ))}

            </>
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(ref.current.value);
    }


    return (
        <>
            <div>
                <div className='flex '>
                    <div className="flex justify-between pl-10 pt-4 mb-10">
                        <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="YouTube video player"  allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"></iframe>
                    </div>
                    <div>
                    <div className='flex w-96 border-black overflow-auto h-[450px] mt-4 ml-2 border flex-col-reverse rounded'>
                        {chats.map((chat,i)=>{
                           return  <Chat key={i} chat={chat} />
                        })}
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input className='border w-80 ml-2 mt-2 border-black rounded p-2'></input>
                      <button type='submit'>send</button>
                      </form>
                    </div>
                </div>
                <h1 className='font-bold pl-10' >Comments:</h1>
                <div className='ml-10'><CommentContainer comments={comments} /></div>
            </div>
        </>
    )
}

export default Watch