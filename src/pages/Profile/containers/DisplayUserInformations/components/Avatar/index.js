import React, { useEffect, useState } from 'react'

import avatarImg from '@/assets/img/avatar.svg'
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg'

import { InputFile } from '@/components/Form/InputFile'

import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

export const Avatar = () => {
  const { showSimple } = useModal()
  const { Loading } = useLoading()

  const photoProfileStoraged = localStorage.getItem('@Rita/Photo/Profile')

  const [photoSource, setPhotoSource] = useState(photoProfileStoraged)

  const [photoFile, setPhotoFile] = useState('')

  useEffect(() => {
    const updateProfilePhoto = async () => {
      if (
        !isValidTypeFile(photoFile, { onlyImage: true }) ||
        !isValidSizeFile(photoFile)
      ) {
        showSimple.error('Arquivo não suportado, por favor, envie outra foto!')
        return
      }

      const formPhotoFile = new FormData()
      formPhotoFile.append('file', photoFile)

      try {
        Loading.turnOn()

        await apiPatient.post('/paciente/foto-perfil', formPhotoFile)

        const photoSourceTemporary = URL.createObjectURL(photoFile)

        setPhotoSource(photoSourceTemporary)

        window.localStorage.setItem('@Rita/Photo/Profile', photoSourceTemporary)
      } catch ({ response }) {
        showSimple.error(
          <>
            Não foi possível atualizar sua foto de perfil. <br /> Por favor,
            tente novamente!
          </>
        )
        setPhotoSource(photoProfileStoraged)
      } finally {
        Loading.turnOff()
      }
    }

    if (photoFile) {
      updateProfilePhoto()
    }
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
