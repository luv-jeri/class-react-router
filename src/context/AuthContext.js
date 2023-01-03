import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const sign = () => {
    setUser({
      name: 'John Doe',
    });
  };

  const signUp = () => {
    setUser({
      name: 'John Doe',
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sign,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export default useAuth;
