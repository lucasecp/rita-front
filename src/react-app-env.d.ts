/// <reference types="react-scripts" />

namespace RitaComponents {
  type TableSort = {
    path?: string
    order?: 'ASC' | 'DESC'
  }

  type ModalConfirmationProps = {
    message: string
    cancelText?: string
    confirmText?: string
    onTruthy?: () => void
    onFalsy?: () => void
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

      type UserBankAccount = RitaWallet.Model.BankAccount[]

      type UserCreditCard = {
        id: string
        alias: string
        lastFourDigits: string
      }[]

      type UserPixKey = RitaWallet.Model.PixKey[]

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

      type UserCreditCard = Pick<
        RitaWallet.Model.CreditCard,
        'number' | 'name' | 'expirationDate' | 'cvv' | 'alias'
      >
    }
  }

  type DefaultEntity<S = 'ACTIVE' | 'DISABLED'> = {
    id: string
    situation: S
    createdAt: string
    updatedAt: string
  }

  namespace Model {
    type Bank = RitaWallet.DefaultEntity & {
      code: string
      name: string
    }

    type BankAccount = RitaWallet.DefaultEntity & {
      agencyNumber: string
      accountNumber: string

      bank?: RitaWallet.Model.Bank
      userWallet?: RitaWallet.Model.UserVallet
    }

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

    type CreditCard = {
      id: string
      situation: 'ACTIVE' | 'DISABLED' | 'EXPIRED'
      createdAt: string
      updatedAt: string
      number: string
      name: string
      expirationDate: string
      cvv: string
      alias: string

      userWallet?: RitaWallet.Model.UserWallet
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

    type PixKey = RitaWallet.DefaultEntity & {
      key: string
      alias: string

      bankAccount?: RitaWallet.Model.BankAccount
      userWallet?: RitaWallet.Model.UserVallet
    }

    type TypeTransaction = {
      id: string
      name: string
      mode: RitaWallet.Enum.TypeTransactionMode
      createdAt: string
      situation: string

      payment?: RitaWallet.Model.PaymentRequest[]
    }

    type UserType = RitaWallet.DefaultEntity & {
      name: string

      userWallet?: RitaWallet.Model.UserWallet[]
    }

    type UserWallet = RitaWallet.DefaultEntity & {
      ritaId: string

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
