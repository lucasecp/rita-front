import React from 'react'
import DoctorInfo from '../components/DoctorInfo'
// import ClinicInfo from '../components/ClinicInfo'
import { Container, Content } from './styles'
import Pagination from '@/components/Pagination/'
import { ResultsProps } from '../types'
import ClinicInfo from '../components/ClinicInfo'

const Results: React.FC<ResultsProps> = ({
  data,
  setQueryPagination,
  restQuery,
}) => {
  return (
    <Container>
      <h2>Resultados encontrados</h2>
      <Content>
        {data?.data?.clinic?.map((clinic, index) => (
          <ClinicInfo key={index} dataClinic={clinic} />
        ))}

        {data?.data?.doctor.map((doctor, index) => (
          <DoctorInfo key={index} isVerify dataDoctor={doctor} />
        ))}
        {!data.total && <h2>Nenhum resultado encontrado</h2>}
      </Content>
      <Pagination
        setQuery={setQueryPagination}
        total={data.total}
        restQuery={restQuery}
        
      />
    </Container>
  )
}

export default Results
