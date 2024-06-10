import React, { FC } from 'react';
import './SelectComponent.scss';
import { v4 as uuidv4 } from 'uuid';

interface SelectComponentProps {
  selectedDaysValue: string;
  setSelecteDaysdValue: (e: string) => void;
}

const days = [5, 6, 7, 8, 9, 10];

const SelectComponent: FC<SelectComponentProps> = ({
  selectedDaysValue,
  setSelecteDaysdValue,
}) => {
  return (
    <div className='SelectBox'>
      <select
        className='SelectBox--select'
        onChange={(e) => setSelecteDaysdValue(e.target.value)}
        value={selectedDaysValue}
        id='days'
      >
        {days.map((item) => (
          <option key={uuidv4()} value={item}> {item} days</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
