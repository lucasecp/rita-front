interface OrderI {
  name?: string
  value?: string
}

export interface DataScheduler {
  id: number
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  status: string
  price: number
  specialtys: {
    idSpecialtys: number
    description: string
  }
  patient: {
    idPatient: number
    name: string
  }
  specialist: {
    idSpecialist: number
    name: string
  }
}

export interface IScheduler {
  total: number
  data?: DataScheduler[]
}

type SetOrder = (order: OrderI) => void

export interface TableProps {
  schedulers: IScheduler
  setOrder: SetOrder
  order: OrderI
}

export interface ContentProps {
  schedulers: IScheduler
}

export interface HeaderProps {
  order: OrderI
  setOrder: SetOrder
}
