/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
        <p className='text-sm'>
          <span>Created by </span>
          <a 
            className='hover:text-white underline' 
            href='https://www.linkedin.com/in/stanislav-alexandronets/' 
            target='_blank'
            rel='norefferer'
          >
            StasAlex
          </a>
        </p>
    </footer>
  )
}

export default Footer
