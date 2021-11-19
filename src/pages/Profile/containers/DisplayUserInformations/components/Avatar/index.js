import React, { useEffect, useState } from 'react'

import avatarImg from '@/assets/img/avatar.svg'
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg'

import { InputFile } from '@/components/Form/InputFile'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'

export const Avatar = () => {
  const { showSimple } = useModal()

  const [photoSource, setPhotoSource] = useState(
    localStorage.getItem('@Rita/Photo/Profile')
  )

  const [photoFile, setPhotoFile] = useState('')

  useEffect(() => {
    if (photoFile) {
      if (
        !isValidTypeFile(photoFile, { onlyImage: true }) ||
        !isValidSizeFile(photoFile)
      ) {
        showSimple.error('Arquivo não suportado, por favor, envie outra foto!')
        return
      }
    }

    console.log(photoFile)
  }, [photoFile])

  return (
    <Container source={photoSource || avatarImg}>
      <div />
      <InputFile accept=".png, .jpg, .jpeg" setValue={setPhotoFile}>
        <EditIcon />
      </InputFile>
    </Container>
  )
}
