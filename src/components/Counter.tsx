// ce composant sera rendu coté client

'use client';

import { useState } from 'react';

function Counter() {
  console.log('rendu du composant Counter');
  const [nb, setNb] = useState(0);

  return (
    <div>
      {nb}
      <button
        type="button"
        onClick={() => {
          setNb(nb + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;
