/// <reference types="react-scripts" />

namespace RitaComponents {
  type TableSort = {
    path?: string
    order?: 'ASC' | 'DESC'
  }
}

namespace RitaWallet {
  namespace Enum {
    type CSATSituation = 'OK' | 'WAITING'

    type PaymentRequestSituation =
      | 'NEW'
      | 'OK'
      | 'EXPIRED'
      | 'REJECTED'
      | 'WAITING'

    type TypeTransactionMode = 'DEBIT' | 'CREDIT' | 'CASHBACK'
  }

  namespace API {
    namespace Get {
      type PaymentCSAT = {
        id: string
        description: string
        transactionType: string
        paymentReturnedAt: string
      }

      type PaymentConsumption = {
        totalSavedAmount: number
        transactions: {
          savedAmount: number
          discountPriceAmount: number
          originalPriceAmount: number
          type: string
        }[]
      }

      type Wallet = {
        id: string
        balance: number
        crownBalance: number
        provisionedBalance: number
        provisionedCrownBalance: number
        provisionedCashbackBalance: number
        cashbackBalance: number
        totalBalanceAmount: number
        totalProvisionedBalanceAmount: number
      }
    }

    namespace Post {
      type PaymentCSAT = {
        id: string
        updatedAt: string
      }
    }
  }

  namespace Model {
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

      payment?: RitaWallet.Model.PaymentRequest[]
    }

    type CSAT = {
      id: string
      score: number | null
      createdAt: string
      returnedAt: string
      situation: RitaWallet.Enum.CSATSituation

      paymentRequest?: RitaWallet.Model.PaymentRequest
    }

    type PaymentRequestItem = {
      id: string
      description: string
      originalPrice: number
      discountPrice: number
      quantity: number

      payment?: RitaWallet.Model.PaymentRequest
    }

    type PaymentRequest = {
      id: string
      description: string
      debitAmount: number
      cashbackAmount: number
      currencyType: string
      transactionType: string
      transactionMode: RitaWallet.Enum.TypeTransactionMode
      situation: RitaWallet.Enum.PaymentRequestSituation

      createdAt?: string
      returnedAt?: string

      // paymentItens?: RitaWallet.Model.PaymentRequestItem[]
      // caller?: RitaWallet.Model.Caller
      // transactionType?: RitaWallet.Model.TypeTransaction
    }

    type TypeTransaction = {
      id: string
      name: string
      mode: RitaWallet.Enum.TypeTransactionMode
      createdAt: string
      situation: string

      payment?: RitaWallet.Model.PaymentRequest[]
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

      userType?: RitaWallet.Model.UserType
    }

    type Wallet = {
      id: string
      balance: number
      crownBalance: number
      provisionedBalance: number
      provisionedCrownBalance: number
      provisionedCashbackBalance: number
      cashbackBalance: number
      totalBalanceAmount: number
      totalProvisionedBalanceAmount: number

      userWallet?: RitaWallet.Model.UserWallet
    }

    type WalletConfiguration = {
      key: string
      value: string
    }
  }
}
