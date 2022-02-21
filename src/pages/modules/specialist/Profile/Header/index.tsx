import React from 'react'
import { Container } from './styles'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile-green.svg'
import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { DataSpecialistI } from '../Types/index'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatCpf } from '@/helpers/formatCpf'

interface HeaderProps {
  data: DataSpecialistI
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <Container>
      <div>
        <div>
          <ProfileIcon />
        </div>
        <span>
          <PenIcon />
        </span>
      </div>

      <div>
        <div>
          <h2>
            {formatTextWithLimit(
              firstLetterCapitalize(data?.specialistInfo?.name || ''),
            ) || ''}
          </h2>
          <p>
            <h6>CPF:</h6>
            <span>{formatCpf(data?.specialistInfo?.cpf) || ''}</span>
          </p>
          <p>
            <h6>CRM:</h6>
            <span>{data?.crm || ''}</span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Header
