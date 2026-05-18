import React from 'react'

const RangeBar = ({low, ltp, high}) => {
  return (
    <article className='flex justify-center items-center gap-2'>
        <p>{low}</p>
        <meter min={low} value={ltp} max={high}></meter>
        <p>{high}</p>
    </article>
  )
}

export default RangeBar