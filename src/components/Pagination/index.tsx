import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Select } from '../Form/Select'
import { Container, Prev, Next } from './style'
import { PaginationProps } from './types'
import useLocalStorage from 'use-local-storage'

const Pagination: React.FC<PaginationProps> = ({
  total,
  restQuery,
  range,
  setQuery,
  perPage,
}) => {
  const history = useHistory()
  const query = useQuery()
  const [perPageValue, setPerPageValue] = useState(perPage || 10)
  const [limit, setLimit] = useState<number | string>(
    Number(query.get('limit')) || perPageValue,
  )
  const [currentPage, setCurrentPage] = useState(Number(query.get('page')) || 1)

  const skipedPages = (currentPage - 1) * Number(limit)

  const totalPages = Math.ceil(total / Number(limit)) || 0

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
              { label: perPageValue, value: perPageValue },
              { label: perPageValue * 3, value: perPageValue * 3 },
              { label: perPageValue * 5, value: perPageValue * 5 },
              { label: perPageValue * 10, value: perPageValue * 10 },
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
