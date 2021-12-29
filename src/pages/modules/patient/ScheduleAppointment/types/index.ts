export interface DoctorI{
    photo: string,
    name: string,
    id: number,
    address: string,
    district: string,
    city: string,
    uf: string,
    number: number,
    complement: string,
    phone: string,
    crm: string,
    crmUf: string,
    title: string,
    verified: boolean,

    doctorSpecialty:  DoctorSpecialtyI[]
}

export interface DoctorSpecialtyI{
    rqe?: string,
    name?: string
}

export interface DataI{
  total: number
   doctor:DoctorI[]
}

export interface ResultsProps{
  data: DataI
  setQueryPagination: (query: string) => void
}

export interface ClinicInfoProps{
  dataDoctor: DoctorI
 isVerify: boolean

}