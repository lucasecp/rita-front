// import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import { Select } from '@/components/Form/Select'
import { Container, Prev, Next } from './styles'

export interface PaginationSimpleProps {
  total: number
  onGetPagination: React.Dispatch<
    React.SetStateAction<{ limit: number; skip: number }>
  >
  // restQuery?: string
  // range?: { label: string; value: string | number }[]
  // setQuery: (query: string) => void
}

export const PaginationSimple: React.FC<PaginationSimpleProps> = ({
  total,
  onGetPagination,
  // restQuery,
  // range,
  // setQuery,
}) => {
  // const history = useHistory()
  // const query = useQuery()
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const skipedPages = (currentPage - 1) * limit
  const totalPages = Math.ceil(total / limit) || 0

  const currentTotal =
    currentPage === totalPages ? total : skipedPages + Number(limit)

  // useEffect(() => {
  //   history.push(queryString)
  //   setQuery(queryApiString)
  // }, [limit, currentPage, restQuery])

  // useEffect(() => {
  //   if (currentPage > totalPages && total > 0) {
  //     setCurrentPage(1)
  //   }
  // }, [total, currentPage, limit])

  useEffect(() => {
    onGetPagination({ limit, skip: skipedPages })
  }, [limit, skipedPages])

  const prevPage = () => {
    if (currentPage === 1) {
      return
    }

    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage === totalPages || !totalPages) {
      return
    }

    setCurrentPage(currentPage + 1)
  }

  return (
    <Container>
      <div>
        <span>Linhas por página:</span>
        <Select
          options={[
            { label: 10, value: 10 },
            { label: 25, value: 25 },
            { label: 50, value: 50 },
            { label: 100, value: 100 },
          ]}
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
