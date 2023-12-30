import React from 'react'

function Illustration({hamIsClicked}) {
  return (
    <div className={`${hamIsClicked ?"blur-sm opacity-80 ":""}`}>
      illustration
    </div>
  )
}

export default Illustration
