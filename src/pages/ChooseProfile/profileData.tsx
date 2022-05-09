import { profilesLabel, profiles } from '@/constants/profiles'
import { ReactComponent as IconPatient } from '@/assets/icons/patient-heart.svg'
import { ReactComponent as IconCompany } from '@/assets/icons/company.svg'
import { ReactComponent as IconClinic } from '@/assets/icons/clinic-green.svg'
import { ReactComponent as IconOperator } from '@/assets/icons/operator.svg'

export const profileData = [
  {
    icon: <IconPatient />,
    title: profilesLabel.Paciente,
    text: 'Cuidados personalizados para você',
    color: '#706BFF',
    secondaryColor: '#EFEAFA',
    profile: profiles.Paciente,
  },
  {
    icon: <IconOperator />,
    title: profilesLabel.Funcionario,
    text: 'Gestão da Plataforma Rita',
    color: '#326BF6',
    secondaryColor: '#EAF0FA',
    profile: profiles.Funcionario,
  },
  {
    icon: <IconClinic />,
    title: profilesLabel['Clinica/Especialista'],
    text: 'Encontre pacientes e deixe que eles encontrem você',
    color: '#46A86E',
    secondaryColor: '#D8EADE',
    profile: profiles['Clinica/Especialista'],
  },
  {
    icon: <IconCompany />,
    title: profilesLabel.Empresa,
    text: 'Gestão de Funcionários vinculados à empresa',
    color: '#FF815E',
    secondaryColor: '#FFE3DB',
    profile: profiles.Empresa,
  },
]
