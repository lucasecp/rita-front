/** Components */
import CustomTooltip from '@/components/Tooltip'
/** Helpers */
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import React from 'react'
import { formatDataColumn } from '../../helpers/formatDataColumn'
import { formatStatusColumn } from '../../helpers/formatStatusColumn'
/** Types */
import { ContentProps } from '../../types'
import Actions from './Actions'
/** Styles */
import { Container, Status } from './styles'

const Content: React.FC<ContentProps> = ({ dataCSD }) => {
  return (
    <Container>
      {dataCSD?.data?.map((item, index) => (
        <ul key={index}>
          <li>{item?.numProtocolo}</li>
          <li>
            <CustomTooltip label={firstLetterCapitalize(item?.typeAtendiment)}>
              <div>
                {formatTextWithLimit(
                  firstLetterCapitalize(item?.typeAtendiment),
                  25,
                ) || '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>
            <CustomTooltip label={firstLetterCapitalize(item?.atendent)}>
              <div>
                {formatTextWithLimit(
                  firstLetterCapitalize(item?.atendent),
                  25,
                ) || '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>
            <CustomTooltip label={firstLetterCapitalize(item?.patient)}>
              <div>
                {formatTextWithLimit(
                  firstLetterCapitalize(item?.patient),
                  20,
                ) || '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>{formatDataColumn(item?.data)}</li>
          <Status type={item?.status}>
            <span>{formatStatusColumn(item?.status)}</span>
          </Status>
          <Actions data={item} />
        </ul>
      ))}

      {!dataCSD?.data?.length && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
