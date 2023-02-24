import { useRef, useState } from 'react';
import Auth from './components/Auth';
import Chat from './components/Chat';
import './style/styles.css';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const inputRef = useRef(null);
  const [room, setRoom] = useState(null);
  if (!isAuth) {
    <Auth setIsAuth={setIsAuth} />;
  }
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Odası</h1>
          <label>Hangi Odaya Gireceksin</label>
          <input type="text" ref={inputRef} />
          <button
            onClick={() => {
              setRoom(inputRef.current.value);
            }}
          >
            Odaya Gir
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
