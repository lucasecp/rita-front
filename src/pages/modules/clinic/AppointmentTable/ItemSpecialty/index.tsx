import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { SpecialtysI, SpecialtysToApiI } from '../types'
import InputPrice, {
  valuePriceType,
} from '@/components/smarts/InputPrice/index'
import formatPrice from '@/helpers/formatPrice'
interface ItemSpecialtyProps {
  data: SpecialtysI
  setSpecialtysTopApi: React.Dispatch<React.SetStateAction<SpecialtysToApiI>>
  setFieldWasChanged: React.Dispatch<React.SetStateAction<boolean>>
  isEdting: boolean
  formWasSubmited: boolean
}

const ItemSpecialty: React.FC<ItemSpecialtyProps> = ({
  data,
  isEdting,
  setSpecialtysTopApi,
  setFieldWasChanged,
  formWasSubmited,
}) => {
  const [ritaPrice, setRitaPrice] = useState<valuePriceType>(
    {} as valuePriceType,
  )

  const [normalPrice, setNormalPrice] = useState<valuePriceType>(
    {} as valuePriceType,
  )

  const setPrice = (
    initialRitaPrice?: number | string,
    initialNormalPrice?: string | number,
  ) => {
    setSpecialtysTopApi((prevState) => ({
      ...prevState,

      [data.name]: {
        id: data.id,
        name: data.name,
        ritaPrice: initialRitaPrice || ritaPrice.clean,
        normalPrice: initialNormalPrice || normalPrice.clean,
      },
    }))
  }

  useEffect(() => {
    setPrice()
    if (
      data.price.normalPrice !== normalPrice.clean ||
      data.price.ritaPrice !== ritaPrice.clean
    ) {
      setFieldWasChanged(true)
    } else {
      setFieldWasChanged(false)
    }
  }, [ritaPrice, normalPrice])

  useEffect(() => {
    if (!isEdting && !formWasSubmited) {
      setPrice(data.price.ritaPrice, data.price.normalPrice)
      setRitaPrice({
        formated: formatPrice(data.price.ritaPrice),
        clean: data.price.ritaPrice,
      })

      setNormalPrice({
        formated: formatPrice(data.price.normalPrice),
        clean: data.price.normalPrice,
      })
    }
  }, [isEdting, formWasSubmited])

  return (
    <Container>
      <h3>{data.name}</h3>
      <div>
        <InputPrice
          label="Preço Rita:"
          setValue={setRitaPrice}
          value={ritaPrice.formated}
          initialValue={data.price.ritaPrice}
          maxLength={100}
          disabled={!isEdting}
        />
        <InputPrice
          label="Preço Normal:"
          setValue={setNormalPrice}
          value={normalPrice.formated}
          maxLength={100}
          initialValue={data.price.normalPrice}
          disabled={!isEdting}
        />
      </div>
    </Container>
  )
}

export default ItemSpecialty
