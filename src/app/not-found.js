import React from 'react'
import './style/not-found.css'

const not_found = () => {
  return (
    <main>
      <div className='bg'>
        <div className='not-found-banner' >
          <div>
            <img
              src='/back_wite-logo.png'
            />
          </div>
          <div>
            <h1>[Not Found Page]</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default not_found