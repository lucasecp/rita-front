import React, { useState } from 'react'
import { DatePicker } from 'antd'
import "antd/es/date-picker/style/css";
import locale from 'antd/es/date-picker/locale/pt_BR';
import moment from 'moment';
const { RangePicker } = DatePicker

const CustomRangePicker = () => {
  const [dates, setDates] = useState('');
  const onDateChange = (value) => {
   setDates(value)
  }
  console.log(dates);
  return(
  <RangePicker
  style={{margin: '100px 500px'}}
  placeholder={['00/00/0000','00/00/0000']}
  allowClear={false}
  locale={locale}
    format="DD-MM-YYYY"
    // onChange={onChange}
    onChange={onDateChange}

  />
  )
}

export default CustomRangePicker
