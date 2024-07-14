import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState('');
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25),
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, []);
  return (
    <>
      <div className='w-full h-[500px] ml-2 p-2 border  border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className='w-full p-2 ml-2 mt-2 border border-black rounded-lg'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Atul',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          className='px-2 w-[298px]'
          type='text'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  );
};

export default LiveChat;
