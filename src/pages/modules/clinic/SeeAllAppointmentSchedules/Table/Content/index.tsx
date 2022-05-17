import React from 'react'
import { Container, Status } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { ContentProps } from '../../types'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatPrice } from '@/helpers/formatPrice'
import Actions from './Actions'
/** Helpers */
import { parse, format } from 'date-fns'

const Content: React.FC<ContentProps> = ({ schedulers }) => {
  const formatDate = (date: string) => {
    const parseDate = parse(date, 'yyyy-MM-dd', new Date())
    return format(parseDate, 'dd/MM/yyyy')
  }

  return (
    <Container>
      {schedulers?.data?.map((item, index) => (
        <ul key={index}>
          <li>{formatDate(item?.endDate)}</li>
          <li>
            {item?.startTime} às {item?.endTime}
          </li>
          <li>
            <CustomTooltip
              label={firstLetterCapitalize(item?.specialist?.name)}
            >
              <div>
                {formatTextWithLimit(
                  firstLetterCapitalize(item?.specialist?.name),
                  25,
                ) || '-'}
              </div>
            </CustomTooltip>
          </li>
          <li>
            <CustomTooltip label={firstLetterCapitalize(item?.patient?.name)}>
              <div>
                {formatTextWithLimit(
                  firstLetterCapitalize(item?.patient?.name),
                  20,
                ) || '-'}
              </div>
            </CustomTooltip>
          </li>
          <Status type={item?.status}>
            <span>{item?.status}</span>
          </Status>
          <li>{formatPrice(item?.price)}</li>
          <Actions data={item} />
        </ul>
      ))}

      {!schedulers?.data?.length && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}

export default Content
