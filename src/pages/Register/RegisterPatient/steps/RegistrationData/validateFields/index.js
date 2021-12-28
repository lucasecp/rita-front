export const validateConfEmail = (email, confirmEmail) => {
  if (email !== confirmEmail)
    return {
      confirmEmail:
        'Os e-mails preenchidos estão diferentes, por favor verifique os campos E-mail e Confirme seu e-mail.',
    }
  return { confirmEmail: '' }
}

export const validateTerms = (terms) => {
  if (terms)
    return {
      terms: 'Por favor, aceite os termos para continuar.',
    }
  return { terms: '' }
}
