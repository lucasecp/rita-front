module.exports = () => {
  return {
    'credit-card': [
      {
        id: 1,
        brandId: 'master',
        brandName: 'Mastercard',
        number: '****.****.****.1234',
        name: 'RAFAEL F SILVA',
        expireAt: '11/25',
        active: true,
      },
      {
        id: 2,
        brandId: 'visa',
        brandName: 'Visa',
        number: '****.****.****.5678',
        name: 'RAFAEL SILVA',
        expireAt: '11/21',
        active: false,
      },
    ],
    pix: [
      {
        id: 1,
        type: 'cpf',
        value: '000.000.000-00',
      },
    ],
    'pix-available': [
      {
        id: 1,
        type: 'cpf',
        value: '000.000.000-00',
      },
      {
        id: 2,
        type: 'phone',
        value: '(99) 99999-9999',
      },
      {
        id: 3,
        type: 'email',
        value: 'nome.sobrenome@gmail.com',
      },
      {
        id: 4,
        type: 'random',
        value: '151DS51DSD15D1F1FD514GFG1H561TH1D',
      },
    ],
    'bank-account': [
      {
        id: 1,
        bankName: 'Banco Investimentos S.A.',
        agency: '0000-0',
        number: '00000-0',
      },
    ]
  }
}
