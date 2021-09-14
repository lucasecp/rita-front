export const validateName = (value) => {
  if (!value.trim()) return {name: 'Campo Obrigatório'};

}
 export const validateEmail = () =>{
   if (!values.email) {
      errors.email = 'Email Obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email inválido.';
    }
  }
 }
  if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Email';
  }
  if (!values.cpf) {
    errors.cpf = 'Campo cpf Obrigatório';
  }
  if (!values.phone) {
    errors.phone = 'Campo telefone Obrigatório';
  }
  if (!values.gender) {
    errors.gender = 'Campo gênero Obrigatório';
  }
  if (!values.terms) {
    errors.terms = 'Campo termo Obrigatório';
  }
  if (!values.birthdate) {
    errors.birthdate = 'Campo Nascimento Obrigatório';
  }
  return errors;
}