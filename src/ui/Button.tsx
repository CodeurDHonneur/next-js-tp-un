import React from 'react'

interface PropsButton {
    title: string;
}
const Button = ({title}: PropsButton) => {
  return (
    <button className='bg-amber-200 text-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-amber-600 hover:text-white cursor-pointer transition-colors'>
        {title}
    </button>
  )
}

export default Button