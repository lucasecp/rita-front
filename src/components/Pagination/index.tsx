import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Select } from '../Form/Select'
import { Container, Prev, Next } from './style'
import { PaginationProps } from './types'

const Pagination: React.FC<PaginationProps> = ({
  total,
  restQuery,
  range,
  setQuery,
}) => {
  const history = useHistory()
  const query = useQuery()
  const [limit, setLimit] = useState(Number(query.get('limit')) || 10)
  const [currentPage, setCurrentPage] = useState(Number(query.get('page')) || 1)

  const skipedPages = (currentPage - 1) * limit
  const totalPages = Math.ceil(total / limit) || 0
  const queryString = `?page=${currentPage}&limit=${limit}${restQuery || ''}`
  const queryApiString = `?limit=${limit}&skip=${skipedPages}`

  const currentTotal =
    currentPage === totalPages ? total : skipedPages + Number(limit)

  useEffect(() => {
    history.push(queryString)
    setQuery(queryApiString)
  }, [limit, currentPage, restQuery])

  useEffect(() => {
    if (currentPage > totalPages && total > 0) {
      setCurrentPage(1)
    }
  }, [total, currentPage, limit])

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
        <Select
          options={
            range || [
              { label: 10, value: 10 },
              { label: 25, value: 25 },
              { label: 50, value: 50 },
              { label: 100, value: 100 },
            ]
          }
          value={limit}
          onChange={({ target }) => setLimit(target.value)}
          variation="secondary"
        />
      </div>

      <div>
        {skipedPages + 1} a {currentTotal} de {total || 0}
      </div>

      <div>
        <Prev active={currentPage > 1} onClick={prevPage} />
        <Next active={currentPage < totalPages} onClick={nextPage} />
      </div>
    </Container>
  )
}

export default Pagination
