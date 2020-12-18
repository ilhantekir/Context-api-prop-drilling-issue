import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

import LastChild from './LastChild';

function DirectChild() {
  const { count, upperFn } = useContext(MyContext);

  console.count('!!!!!DirectChild');
  return (
    <div>
      <LastChild count={count} upperFn={upperFn} />
    </div>
  );
}

export default DirectChild;
