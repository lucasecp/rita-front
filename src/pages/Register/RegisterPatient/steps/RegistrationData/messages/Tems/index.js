import ButtonPrimary from '@/components/Button/Primary'
import React from 'react'
import { Container, TextGroup } from './style'
const Terms = ({setTerms,setShowModal}) => {
  const hanldeAcceptTerms = () =>{
    setTerms(true)
    setShowModal(false)
  }
  return (
    <Container>
      <h2>Termos de Uso da Plataforma RITA</h2>
      <TextGroup>
      <p>
        Lorem ipsum dolor sit amet. Vel autem vero et quaerat provident qui
        obcaecati debitis qui fugit enim. Et tempore alias qui sint dolorem ad
        distinctio accusantium nam ullam placeat cum sapiente amet non ipsa
        quos. Non itaque perferendis aut similique nisi in repudiandae dolor ut
        distinctio expedita id nostrum iure. Non natus facere est harum
        consequatur aut internos assumenda qui placeat porro aut dolorum dolor.
        Qui aliquam exercitationem cum assumenda quasi ut sunt internos ad sint
        reprehenderit vel alias tenetur? At eligendi dolore aut corrupti amet
        hic reprehenderit iure est quaerat modi hic fugit accusantium.
      </p>
      <p>
        Lorem ipsum dolor sit amet. Vel autem vero et quaerat provident qui
        obcaecati debitis qui fugit enim. Et tempore alias qui sint dolorem ad
        distinctio accusantium nam ullam placeat cum sapiente amet non ipsa
        quos. Non itaque perferendis aut similique nisi in repudiandae dolor ut
        distinctio expedita id nostrum iure. Non natus facere est harum
        consequatur aut internos assumenda qui placeat porro aut dolorum dolor.
        Qui aliquam exercitationem cum assumenda quasi ut sunt internos ad sint
        reprehenderit vel alias tenetur? At eligendi dolore aut corrupti amet
        hic reprehenderit iure est quaerat modi hic fugit accusantium.
      </p>
      <p>
        Lorem ipsum dolor sit amet. Vel autem vero et quaerat provident qui
        obcaecati debitis qui fugit enim. Et tempore alias qui sint dolorem ad
        distinctio accusantium nam ullam placeat cum sapiente amet non ipsa
        quos. Non itaque perferendis aut similique nisi in repudiandae dolor ut
        distinctio expedita id nostrum iure. Non natus facere est haruet
        hic reprehenderit iure est quaerat modi hic fugit accusantium.
      </p>
      <p>
        Lorem ipsum dolor sit amet. Vel autem vero et quaerat provident qui
        obcaecati debitis qui fugit enim. Et tempore alias qui sint dolorem ad
        distinctio accusantium nam ullam placeat cum sapiente amet non ipsa
        quos. Non itaque perferendis aut similique nisi in repudiandae dolor ut
        distinctio expedita id nostrum iure. Non natus facere est harum
        consequatur aut internos assumenda qui placeat porro aut dolorum dolor.
        Qui aliquam exercitationem cum assumenda quasi ut sunt internos ad sint
        hic reprehenderit iure est quaerat modi hic fugit accusantium.
      </p>
      <p>
        Lorem ipsum dolor sit amet. Vel autem vero et quaerat provident qui
        obcaecati debitis qui fugit enim. Et tempore alias qui sint dolorem ad
        distinctio accusantium nam ullam placeat cum sapiente amet non ipsa
        quos. Non itaque perferendis aut similique nisi in repudiandae dolor ut
        distinctio expedita id nostrum iure. Non natus facere est harum
        consequatur aut internos assumenda qui placeat porro aut dolorum dolor.
        Qui aliquam exercitationem cum assumenda quasi ut sunt internos ad sint
        reprehenderit vel alias tenetur? At eligendi dolore aut corrupti amet
        hic reprehenderit iure est quaerat modi hic fugit accusantium.
      </p>
      </TextGroup>
      <ButtonPrimary onClick={hanldeAcceptTerms}>Li e Aceito os termos de uso</ButtonPrimary>
    </Container>
  )
}

export default Terms
