import React from 'react';
import '../comp_style/Scrolling.css';

const Scrolling = () => {
  return (
    <div className='scrolling'>
      <ul>
        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>
      </ul>

      <ul aria-hidden="true">
        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>

        <li>
          <span className='scrollText'>let's👋 work together</span>
          <span className='scrollDot'> &#9679; </span>
        </li>
      </ul>
    </div>
  )
}

export default Scrolling
