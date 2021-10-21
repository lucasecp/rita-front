import React from 'react'
import { DatePicker } from 'antd'
import "antd/es/date-picker/style/css";
import {Container} from './styles'
import locale from 'antd/es/date-picker/locale/pt_BR';
import {ReactComponent as Calendar} from '@/assets/icons/calendar.svg'
import moment from 'moment';
const { RangePicker } = DatePicker

const CustomRangePicker = ({label,value,setValue,...rest}) => {

  const handleChange = (value) => {
    const start = moment(value[0]).utcOffset(0)
    const end = moment(value[1]).utcOffset(0)

    start.hours(0).minutes(0).seconds(0)
    end.hours(23).minutes(59).seconds(59)

    start.toISOString()
    end.toISOString()

    setValue([start,end])
  }
  return(
    <Container>
      {label && <label>{label}</label>}
      <RangePicker
      placeholder={['00/00/0000','00/00/0000']}
      allowClear={false}
      locale={locale}
        format="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        separator={'-'}
        suffixIcon={<Calendar/>}
        {...rest}
      />
      <span onClick={()=> setValue([])}/>
    </Container>
  )
}

export default CustomRangePicker
