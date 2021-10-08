import React, { useState } from 'react'
import { DatePicker } from 'antd'
import "antd/es/date-picker/style/css";
import {Container} from './styles'
import locale from 'antd/es/date-picker/locale/pt_BR';
import {ReactComponent as Calendar} from '@/assets/icons/calendar.svg'
const { RangePicker } = DatePicker

const CustomRangePicker = ({label,value,setValue,...rest}) => {

  return(
    <Container>
      {label && <label>{label}</label>}
      <RangePicker
      placeholder={['00/00/0000','00/00/0000']}
      allowClear={false}
      locale={locale}
        format="DD/MM/YYYY"
        value={value}
        onChange={(value)=> setValue(value)}
        separator={'-'}
        suffixIcon={<Calendar/>}
        {...rest}
      />
    </Container>
  )
}

export default CustomRangePicker
