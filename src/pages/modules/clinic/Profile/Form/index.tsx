import React from 'react'
import { useModal } from '@/hooks/useModal'

/** Styles */
import { Container } from './styles'
/** Components */
import {
  DataClinic,
  ResponsibleTecnic,
  ResponsibleAdministrative,
  Address,
  Specialtys,
} from './components'
import GroupButtons from '../Footer'
import CancelEditing from './messages/CancelEdting'
import { MultiSelectOption } from '@/components/Form/MultSelect'
/** Types */
import {
  AddressClinicI,
  DataClinicI,
  ResponsibleAdministrativeI,
  ResponsibleTecnicI,
} from '../types'
/** Context */
import { ClinicEditContext } from '../Context/ClinicEditContext'
/** Helpers */
import { validateField } from '../Helpers/validatorFields'
import { toast } from '@/styles/components/toastify'
/** API */
import apiAdmin from '@/services/apiAdmin'
import { toApi, fromApi } from '../adapters'
import { useLoading } from '@/hooks/useLoading'

const FormClinicProfile: React.FC = () => {
  const [dataClinic, setDataClinic] = React.useState<DataClinicI>(
    {} as DataClinicI,
  )
  const [responsibleTecnic, setResponsibleTecnic] =
    React.useState<ResponsibleTecnicI>({} as ResponsibleTecnicI)
  const [responsibleAdministrative, setResponsibleAdministrative] =
    React.useState<ResponsibleAdministrativeI>({} as ResponsibleAdministrativeI)
  const [address, setAddress] = React.useState<AddressClinicI>(
    {} as AddressClinicI,
  )
  const [specialty, setSpecialty] = React.useState<MultiSelectOption[]>(
    {} as MultiSelectOption[],
  )
  /** Hooks */
  const { showMessage } = useModal()
  const { Loading } = useLoading()
  /** Context */
  const {
    error,
    setError,
    isHasModificationField,
    setIsDisabled,
    isDisabled,
    data,
    setData,
    setIsHashModificationField,
    photo,
  } = React.useContext(ClinicEditContext)

  React.useEffect(() => {
    getClinicProfile()
  }, [])

  React.useEffect(() => {
    if (isDisabled) getClinicProfile()
  }, [isDisabled])

  /** @description Faz a validação dos dados e prepara para enviar os dados modificados para o backend */
  const onUpdate = async () => {
    await validadeFieldsIfExistsErrors(
      dataClinic,
      responsibleTecnic,
      responsibleAdministrative,
      address,
      specialty,
    )
    const isFieldRequired: any = window.localStorage.getItem(
      '@Rita/Clinic/Perfil/edit',
    )
    const { fieldRequired } = JSON.parse(isFieldRequired)
    if (!fieldRequired) {
      try {
        let data = toApi(
          dataClinic,
          responsibleTecnic,
          responsibleAdministrative,
          address,
          specialty,
        )
        Loading.turnOn()
        await save(photo, data)
        await getClinicProfile()
        Loading.turnOff()
        toast.success('Alterações salvas com sucesso.')
      } catch (error) {
        toast.error(
          'Não foi possível realizar a alteração dos dados, entre em contato com o suporte técnico.',
        )
      } finally {
        setIsDisabled(true)
        window.localStorage.removeItem('@Rita/Clinic/Perfil/edit')
      }
    }
  }

  /** @description Envia os dados modificados para o backend */
  const save = async (photo: File, data: any) => {
    const formData = new FormData()
    const keys = Object.keys(data)
    keys.forEach((key) => {
      formData.append(
        key,
        key === 'especialidade' ? JSON.stringify(data[key]) : data[key],
      )
    })
    formData.append('file', photo)
    await apiAdmin.put(`/clinica/minha-clinica/${59}`, formData)
  }

  /**
   * @description Verifica se possui modificações realizadas pelo usuário nos campos,
   * se sim, mostra um modal,
   * se não, desabilita todos os campos e mostra o botão Editar */
  const onCancel = () => {
    if (isHasModificationField) {
      showMessage(CancelEditing, {
        setIsDisabled,
        setError,
        setIsHashModificationField,
      })
    } else {
      setIsDisabled(true)
      setIsHashModificationField(false)
    }
  }

  /** @description Retorna os dados da clinica como o usuário clínica */
  const getClinicProfile = async () => {
    Loading.turnOn()
    const result = await apiAdmin.get(`/clinica/minha-clinica/${59}`)
    const specialtys = await getAllSpecialtys()
    const data = await fromApi(result.data, specialtys)
    setData(data)
    Loading.turnOff()
  }

  /** @description Retorna todas as especialidades cadastradas no sistema */
  const getAllSpecialtys = async () => {
    const result = await apiAdmin.get(`/especialidade?limit=${1000}&skip=${0}`)
    return result.data.especialidade
  }

  /**
   * @description Faz a validação de todos os campos do formulário, e se caso algum não estiver preenchido,
   * dispara a mensagem através do 'setError' para mostrar debaixo do componente. */
  const validadeFieldsIfExistsErrors = async (
    dataClinic: DataClinicI,
    responsibleTecnic: ResponsibleTecnicI,
    responsibleAdministrative: ResponsibleAdministrativeI,
    address: AddressClinicI,
    specialty: MultiSelectOption[],
  ) => {
    const description = validateField(dataClinic.description, 'Nome Fantasia', {
      description: 'description',
    })
    const razaoSocial = validateField(dataClinic.razaoSocial, 'Razão Social', {
      razaoSocial: 'razaoSocial',
    })
    const phone = validateField(dataClinic.phone, 'Telefone/Celular', {
      phone: 'phone',
    })
    /** Responsável Técnico */
    const _responsibleTecnic = validateField(
      responsibleTecnic.responsibleTecnic,
      'Responsável Técnico',
      { responsible: 'responsible' },
    )
    const phoneResponsibleTecnic = validateField(
      responsibleTecnic.phoneResponsibleTecnic,
      'Celular',
      { phoneResponsible: 'phoneResponsible' },
    )
    const emailResponsibleTecnic = validateField(
      responsibleTecnic.emailTecnic,
      'E-mail do Responsável Técnico',
      { emailTecnic: 'emailTecnic' },
    )
    // /** Responsável Administrativo */
    const _responsibleAdministrative = validateField(
      responsibleAdministrative.responsibleAdministrative,
      'Responsável Administrativo',
      { responsibleAdministrative: 'responsibleAdministrative' },
    )
    const phoneResponsibleAdministrative = validateField(
      responsibleAdministrative.phoneResponsibleAdministrative,
      'Celular',
      { phoneResponsible: 'phoneResponsible' },
    )
    const emailResponsibleAdministrative = validateField(
      responsibleAdministrative.emailAdministrative,
      'E-mail do Responsável Administrativo',
      { emailAdministrative: 'emailAdministrative' },
    )
    // /** Endereço */
    const cep = validateField(address.cep, 'CEP', { cep: 'cep' })
    const _address = validateField(address.address, 'Endereço', {
      address: 'address',
    })
    const number = validateField(address.number, 'Número', { number: 'number' })
    const district = validateField(address.district, 'Bairro', {
      district: 'district',
    })
    const complement = validateField(address.complement, 'Complemento', {
      complement: 'complement',
    })
    /** Especialidades */
    const specialtys = !specialty.length
      ? 'Clínica precisa ter no mínimo uma especialidade'
      : ''

    if (
      description ||
      razaoSocial ||
      phone ||
      _responsibleTecnic ||
      phoneResponsibleTecnic ||
      emailResponsibleTecnic ||
      _responsibleAdministrative ||
      phoneResponsibleAdministrative ||
      emailResponsibleAdministrative ||
      cep ||
      _address ||
      number ||
      district ||
      complement ||
      specialtys
    ) {
      window.localStorage.setItem(
        '@Rita/Clinic/Perfil/edit',
        JSON.stringify({ fieldRequired: true }),
      )
    } else {
      window.localStorage.setItem(
        '@Rita/Clinic/Perfil/edit',
        JSON.stringify({ fieldRequired: false }),
      )
    }

    setError({
      ...error,
      /** Dados da Clínica */
      description: description,
      razaoSocial: razaoSocial,
      phone: phone,
      /** Responsável Técnico */
      responsibleTecnic: _responsibleTecnic,
      phoneResponsibleTecnic: phoneResponsibleTecnic,
      emailResponsibleTecnic: emailResponsibleTecnic,
      /** Responsável Administrativo */
      responsibleAdministrative: _responsibleAdministrative,
      phoneResponsibleAdministrative: phoneResponsibleAdministrative,
      emailResponsibleAdministrative: emailResponsibleAdministrative,
      /** Endereço */
      cep: cep,
      address: _address,
      number: number,
      district: district,
      complement: complement,
      /** Especialidades */
      specialty: specialtys,
    })
  }

  return (
    <Container>
      <DataClinic data={data} setDataClinic={setDataClinic} />
      <ResponsibleTecnic
        data={data}
        setResponsibleTecnic={setResponsibleTecnic}
      />
      <ResponsibleAdministrative
        data={data}
        setResponsibleAdministrative={setResponsibleAdministrative}
      />
      <Address data={data} setAddress={setAddress} />
      <Specialtys data={data} setSpecialty={setSpecialty} />
      <GroupButtons onUpdate={onUpdate} onCancel={onCancel} />
    </Container>
  )
}

export default FormClinicProfile
