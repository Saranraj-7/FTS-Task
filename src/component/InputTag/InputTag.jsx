import React from 'react';

export const InputTag = ({type,value,className,id,onChange,placeholder}) => {
  return (
    <div>
        <input type={type} value={value} className={className} id={id} onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}
