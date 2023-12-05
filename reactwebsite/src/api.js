const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
  ];
  
  export const loginUser = async (username, password) => {
    // api request szimulálás
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (user) {
      return Promise.resolve({ user });
    } else {
      return Promise.reject({ message: 'Invalid credentials' });
    }
  };
  
  export const logoutUser = async () => {
    return Promise.resolve({ success: true });
  };
  