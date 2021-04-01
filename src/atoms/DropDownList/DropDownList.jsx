import React from 'react';
import { StyledDropDownList } from './StyledDropDownList';

const DropDownList = ({ regions, filterByRegion }) => {
  return (
    <>
      {
        regions.length !== 0
          ? (
              <StyledDropDownList>
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
              </StyledDropDownList>
            )
          : null 
      }
    </>
  )
}

export default DropDownList;
