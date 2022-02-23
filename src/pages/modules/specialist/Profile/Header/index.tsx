import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg';
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile-green.svg';
import { InputFile } from '@/components/Form/InputFile';
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize';
import { formatCpf } from '@/helpers/formatCpf';
import formatTextWithLimit from '@/helpers/formatTextWithLimit';
import React from 'react';

import { DataSpecialistI } from '../Types';
import { Container } from './styles';

interface HeaderProps {
  data: DataSpecialistI
  setValue: React.Dispatch<React.SetStateAction<any>>
}

const Header: React.FC<HeaderProps> = ({ data, setValue }) => {
  return (
    <Container>
      <div>
        <div>
          {data?.specialistInfo?.photo ? (
            <div>
              <img
                src={`data:image/png;base64,${data?.specialistInfo.photo}`}
                alt="Imagem do especialista"
              />
            </div>
          ) : (
            <ProfileIcon />
          )}
        </div>
        <span>
          <InputFile setValue={setValue}>
            <PenIcon />
          </InputFile>
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
            <span>{data?.specialistInfo?.classCouncil || ''}</span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Header
