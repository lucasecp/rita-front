import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import SelectComponent from '../Form/Select'
import options from './static'
import { Container, Prev, Next } from './style'

const Pagination = ({ total, restQuery, range, setQuery }) => {
  const history = useHistory()
  const query = useQuery()
  const [limit, setLimit] = useState(Number(query.get('limit')) || 10)
  const [currentPage, setCurrentPage] = useState(Number(query.get('page')) || 1)

  const totalPages = Math.ceil(total / limit) || 0
  const queryString = `?page=${currentPage}&limit=${limit}${restQuery || ''}`
  const queryApiString = `?limit=${limit}&skip=${(currentPage - 1) * limit}`

  useEffect(() => {
    history.push(queryString)
    setQuery(queryApiString)
  }, [limit, currentPage, restQuery])

  useEffect(() => {
    if(currentPage>totalPages){
      setCurrentPage(1)
    }
  }, [total])

  // useEffect(() => {
  //   if(currentPage > totalPages){
  //     setCurrentPage(1)
  //     setLimit(10)
  //     history.push(`?page=${1}&limit=${limit}${restQuery || ''}`)
  //   }
  // }, [restQuery]);

  const hadleChange = ({ target }) => {
    setLimit(target.value)
  }

  const prevPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage === totalPages || !totalPages) return
    setCurrentPage(currentPage + 1)
  }

  return (
    <Container>
      <div>
        <span>Linhas por página:</span>
        <SelectComponent
          options={options(range || 10)}
          value={limit}
          onChange={hadleChange}
          variation="secondary"
        />
      </div>

      <div>
        {currentPage} - {totalPages} de {total}
      </div>

      <div>
        <Prev active={currentPage > 1} onClick={prevPage} />
        <Next active={currentPage < totalPages} onClick={nextPage} />
      </div>
    </Container>
  )
}

export default Pagination
