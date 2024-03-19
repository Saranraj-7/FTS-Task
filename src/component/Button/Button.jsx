import React from 'react';

const Button = ({buttonName,className,type,onClick}) => {
  return (
    <div>
      <button className={className} type={type} onClick={onClick} >{buttonName}</button>
    </div>
  )
}

export default Button