/// <reference types="react-scripts" />

namespace RitaWallet {
  type Caller = {
    id: string
    name: string
    description: string
    keySecret: string
    callbackURL: string
    expiredTime: string
    createdAt: string
    updatedAt: string
    situation: string

    payment?: RitaWallet.PaymentRequest[]
  }

  type CSATSituation = 'OK' | 'WAITING'

  type CSAT = {
    id: string
    score: number | null
    createdAt: string
    returnedAt: string
    situation: RitaWallet.CSATSituation

    paymentRequest?: RitaWallet.PaymentRequest
  }

  type DashboardConsumption = {
    type: string
    originalPriceAmount: number
    discountPriceAmount: number
    savedAmount: number
  }[]

  type PaymentRequestItem = {
    id: string
    description: string
    originalPrice: number
    discountPrice: number
    quantity: number

    payment?: RitaWallet.PaymentRequest
  }

  type PaymentRequestSituation = 'NEW' | 'OK' | 'EXPIRED' | 'REJECTED' | 'WAITING'

  type PaymentRequest = {
    id: string
    ritaId: string
    description: string
    debitAmount: number
    cashbackAmount: number
    currencyType: string
    createdAt?: string
    returnedAt?: string
    situation: PaymentRequestSituation

    paymentItens?: RitaWallet.PaymentRequestItem[]
    caller?: RitaWallet.Caller
    typeTransaction?: RitaWallet.TypeTransaction
  }

  type TypeTransaction = {
    id: string
    name: string
    mode: string
    createdAt: string
    situation: string

    payment?: RitaWallet.PaymentRequest[]
  }

  type UserType = {
    id: string
    name: string
    situation: string
    createdAt: string
  }

  type UserWallet = {
    id: string
    ritaId: string
    situation: string

    userType?: RitaWallet.UserType
  }

  type WalletConfiguration = {
    id: string
    key: string
    value: string
  }

  type Wallet = {
    id: string
    balance: number
    provisionedBalance: number
    crownBalance: number
    provisionedCrownBalance: number
    cashbackBalance: number
    provisionedCashbackBalance: number
    createdAt: string
    openedAt: string
    situation: string

    totalCrownBalance: number
    totalProvisionedCrownBalance: number

    userWallet?: RitaWallet.UserWallet
  }
}
