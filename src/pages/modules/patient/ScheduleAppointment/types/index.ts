export interface DoctorI {
  photo: string
  name: string
  id: number
  crm: string
  verified: boolean
  specialtys: string[]
}

export interface ClinicI {
  photo: string
  name: string
  id: number
  specialtys: string[]
}

export interface DataFromApi {
  doctor: DoctorI[]
  clinic: ClinicI[]
}

export interface DataI {
  total: number
  data?: DataFromApi
}

export interface ResultsProps {
  data: DataI
  setQueryPagination: (query: string) => void
  restQuery: string
}

export interface DoctorInfoProps {
  dataDoctor: DoctorI
  isVerify: boolean
}
export interface ClinicInfoProps {
  dataClinic: ClinicI
}
