import React, { useState } from 'react';
import './indc.css';


function Example() {
  const [count, setState] = useState(0);

  return (
    <div>
      <div class="B1">
      <button onClick={() => setState(count + 1)}>
      Increment by 1
      </button>
      </div>
      <div class="B1">
      <button onClick={() => setState(count - 1)}>
      Decrement by 1
      </button>
      </div>
    </div>
  );
}
