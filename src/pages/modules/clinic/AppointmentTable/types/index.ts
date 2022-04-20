export interface SpecialtysI {
  id: number
  name: string
  price: {
    ritaPrice: string | number
    normalPrice: string | number
  }
}

export interface SpecialtysToApiI {
  [name: string]: SpecialtysContentToApiI
}

export interface SpecialtysContentToApiI {
  id: number
  name: string
  ritaPrice: string | number
  normalPrice: string | number
}
