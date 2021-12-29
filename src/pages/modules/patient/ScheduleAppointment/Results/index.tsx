import React from 'react'
import DoctorInfo from '../components/DoctorInfo'
// import ClinicInfo from '../components/ClinicInfo'
import { Container, Content } from './styles'
import Pagination from '@/components/Pagination/'
import { ResultsProps } from '../types'

const Results: React.FC<ResultsProps>= ({ data, setQueryPagination }) => {
  // const [doctors, setDoctors] = useState([])

  // useEffect(() => {
  //   setDoctors(data?.doctor?.map(
  //     (clinic) => clinic?.specialtys?.doctorSpecialty
  //   ))
  // },[data])

  return data ? (
    <Container>
      <h2>Resultados encontrados</h2>
      <Content>
        {/* {data?.doctor?.map((clinic, index) => (
          <ClinicInfo key={index} dataClinic={clinic} />
        ))} */}

        {data?.doctor?.map((doctor, index) => (
          <DoctorInfo key={index} isVerify dataDoctor={doctor} />
        ))}
      </Content>
      <Pagination setQuery={setQueryPagination} total={data.total} />
    </Container>
  ) : null
}

export default Results
