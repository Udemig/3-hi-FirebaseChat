import React, { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db, auth } from '../firebase/FirebaseConfig';

const Chat = ({ room }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesRef = collection(db, 'messages');
  const [messages, setMessages] = useState([]);
  console.log(messages);
  //MESAJ GÖNDERME
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage) return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage('');
  };

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt')
    );
    onSnapshot(queryMessage, (snapshot) => {
      let commingMessages = [];
      snapshot.forEach((doc) => {
        commingMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(commingMessages);
    });
  }, []);

  return (
    <div className="chat">
      {/* HEADER */}
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a href="/">Farklı Oda</a>
      </header>
      {/* MESAJLAR */}
      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <div key={message.id} className="user-message">
                <span> {message.text} </span>
              </div>
            ) : (
              <div key={message.id} className="message">
                <span>{message.user}</span>
                <span> {message.text}</span>
              </div>
            )}
          </>
        ))}
      </div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
