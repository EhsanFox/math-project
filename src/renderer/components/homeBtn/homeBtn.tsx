import { Link } from 'react-router-dom';
import React from 'react';

export default function HomeBtn() {
  return (
    <div className='homeBtnParent'>
      <Link className='homeBtn'to="/" />
    </div>
  )
}
