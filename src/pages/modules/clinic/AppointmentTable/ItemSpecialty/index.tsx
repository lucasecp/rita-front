import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { SpecialtysI, SpecialtysToApiI } from '../types'
import InputPrice, {
  valuePriceType,
} from '@/components/smarts/InputPrice/index'
interface ItemSpecialtyProps {
  data: SpecialtysI
  setSpecialtysTopApi: React.Dispatch<React.SetStateAction<SpecialtysToApiI>>
}

const ItemSpecialty: React.FC<ItemSpecialtyProps> = ({
  data,
  setSpecialtysTopApi,
}) => {
  const [ritaPrice, setRitaPrice] = useState<valuePriceType>(
    {} as valuePriceType,
  )

  const [normalPrice, setNormalPrice] = useState<valuePriceType>(
    {} as valuePriceType,
  )

  const setPrice = () => {
    if (!ritaPrice.clean && !normalPrice.clean) {
      return
    }

    setSpecialtysTopApi((prevState) => ({
      ...prevState,

      [data.name]: {
        id: data.id,
        name: data.name,
        ritaPrice: ritaPrice.clean,
        normalPrice: normalPrice.clean,
      },
    }))
  }

  useEffect(() => {
    setPrice()
  }, [ritaPrice, normalPrice])

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
        />
        <InputPrice
          label="Preço Normal:"
          setValue={setNormalPrice}
          value={normalPrice.formated}
          maxLength={100}
          initialValue={data.price.normalPrice}
        />
      </div>
    </Container>
  )
}

export default ItemSpecialty
