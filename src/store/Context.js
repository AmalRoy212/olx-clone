import {createContext, useState} from 'react';

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

// this will be global state for checking the user is singed in or not thats why its kepy in the context
export default function Context ({children}){
  const [user,setUser] = useState(null);

  return(
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  )
}