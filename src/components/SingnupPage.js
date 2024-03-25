import React, { useState } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
      
      
    }
  };

  const handleLogout = () => {
    // Your logout logic goes here
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      <h1>Search Engine</h1>
      <div>
      <button id='logout' onClick={handleLogout}>Logout</button>
      </div>
      <h1>{isLoggedIn ? `Welcome, ${username}!` : 'Please log in'}</h1>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <SearchBar/>
        </div>
      )}
    </div>
  );

      }
export default App;
