import { useContext } from 'react';

function LastChild({ count, upperFn }) {
  return (
    <div>
      <button
        style={{ position: 'absolute', top: '50%', left: '50%', fontSize: 22 }}
        onClick={upperFn}
      >
        {count}
      </button>
    </div>
  );
}

export default LastChild;
