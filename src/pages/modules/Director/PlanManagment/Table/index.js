import React, { useState } from 'react'

import { Container } from './styles'
import Header from './Header'
import Content from './Content'
import Pagination from '@/components/Pagination'

const Table = () => {
  const [queryApi, setQueryApi] = useState('');
  return (
    <Container>
       <Header/>
       <Content/>
       <Pagination
          setQuery={setQueryApi}
          />
    </Container>
  )
}

export default Table
