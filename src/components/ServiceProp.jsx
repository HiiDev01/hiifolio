import React from 'react'
import "../comp_style/ServiceProp.css"


const ServiceProp = ({serviceList, showAll}) => {

  const displayedItem = showAll ? serviceList : serviceList.slice(0, 4);



  return (
    <div className='serviceprop'>
      {displayedItem.map((item, index) =>(
        <div key={index} className='serviceItem'>
          <div className='serviceIconCon'>
            <h1>{item.icon}</h1>
          </div>
          <h2 className='serviceName'>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default ServiceProp
