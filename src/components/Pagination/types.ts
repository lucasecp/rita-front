export interface PaginationProps {
  total: number
  restQuery?: string
  range?: { label: string; value: string | number }[]
  setQuery: (query: string) => void
}
