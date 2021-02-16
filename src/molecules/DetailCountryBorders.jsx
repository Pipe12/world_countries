import React from 'react';
import DetailCountrySubTitle from '../atoms/DetailCountrySubTitle';
import BordersButtonGroup from './BordersButtonGroup';
import BorderButton from '../atoms/BorderButton';

const DetailCountryBorders = ({ borders }) => {
  return (
    <div className='DetailCountryBorders'>
      <DetailCountrySubTitle text='Border Countries:' />
      <BordersButtonGroup>
        {
          borders.map((border, index) => {
            return <BorderButton key={index} border={border} />
          })
        }
      </BordersButtonGroup>
    </div>
  )
}

export default DetailCountryBorders;
