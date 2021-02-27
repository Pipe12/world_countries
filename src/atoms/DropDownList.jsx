import React from 'react';

const DropDownList = ({ regions, filterByRegion }) => {
  return (
    <>
      {
        regions.length !== 0
          ? (
              <ul className='DropDownList'>
                {
                  regions.map( (region, index) => (
                    <li 
                      key={index}
                      onClick={() => filterByRegion(region)}
                    >
                      { region }
                    </li>
                  ))
                }
              </ul>
            )
          : null 
      }
    </>
  )
}

export default DropDownList;
