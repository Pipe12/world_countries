import React from 'react';

const DropDownList = ({ regions }) => {
  return (
    <>
      {
        regions.length !== 0
          ? (
              <ul className='DropDownList'>
                {
                  regions.map( (region, index) => (
                    <a 
                      href='/'
                      key={index}
                    >
                      <li>
                        { region }
                      </li>
                    </a>
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
