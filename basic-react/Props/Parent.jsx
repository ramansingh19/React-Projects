import React from 'react';
import Child from './child';
import Grandchild from './grandchild';

function Parent() {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      <Child name="Raman" age={25} />
      <Grandchild/>
    </div>
  );
}

export default Parent;
