import { formatPrice } from '@/helpers/formatPrice'
import { formatCpf } from '@/helpers/formatCpf'

interface IDataToDisplayFromApi{
  nome:string;
  cpf:string;
  status:string;
  plano:{
    nome:string;
  };
  tabela:{
    nome:string;
    validade:string;
  }
}

interface IPersonalDataFromApi{
  nome:string;
  dataNascimento:string;
  sexo:string;
  telefone:string;
  email:string;
  plano:{
    nome: string;
    data: string;
    valor: string;
    canal: string;
    empresa: string;
  }

}

interface IPersonalDataAddressFromApi{
  cep:string;
  uf:string;
  cidade:string;
  logradouro:string;
  numero:string;
  bairro:string;
  complemento:string;
}

export const fromApiDataToDisplay = (data: IDataToDisplayFromApi) => {
  return {
    name: data.nome,
    cpf: formatCpf(data.cpf),
    contractedPlan: data.plano?.nome,
    status: data.status === 'A' ? 'active' : 'inactive',
    table: {
      type:
        data.tabela?.nome === 'Tabela Padrão'
          ? 'default'
          : data.tabela?.nome === 'Tabela Especial'
          ? 'special'
          : 'none',
      validity: data.tabela?.validade,
    },
  }
}

export const fromApiPersonalDatas = (data:IPersonalDataFromApi, endereco:IPersonalDataAddressFromApi) => {
  return {
    personalDatas: {
      name: data.nome,
      birthDate: data.dataNascimento,
      gender: data.sexo,
      phone: data.telefone,
      email: data.email,
    },
    address: {
      cep: endereco.cep,
      uf: endereco.uf,
      city: endereco.cidade,
      addressUser: endereco.logradouro,
      number: endereco.numero,
      district: endereco.bairro,
      complement: endereco.complemento,
    },
    supplementaryData: {
      contractedPlan: data.plano?.nome,
      contractedPlanSince: data.plano?.data,
      price: data.plano?.valor ? formatPrice(data.plano?.valor) : 'Isento',
      channel: data.plano?.canal,
      company: data.plano?.empresa,
    },
  }
}


