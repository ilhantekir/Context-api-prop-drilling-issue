import { createContext, useState, useEffect } from 'react';

import DirectChild from '../component/DirectChild';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [deneme, setdeneme] = useState('sssss');

  useEffect(() => {
    console.log('useeffect');
    setTimeout(() => {
        setdeneme('sasfasfaasaf');
    }, 4000);
  }, [count]);

  return (
    <MyContext.Provider
      value={{
        count,
        upperFn: () => {
          setCount(count + 1);
        },
        deneme
      }}
    >
      {/* <DirectChild></DirectChild> */}
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
