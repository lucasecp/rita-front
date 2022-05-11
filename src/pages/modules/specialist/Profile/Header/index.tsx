import React, { Dispatch, SetStateAction } from 'react'
/** Icons */
import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile-green.svg'
/** Componets */
import { InputFile } from '@/components/Form/InputFile'
import { toast } from '@/styles/components/toastify'
/** Helpers */
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import { formatCpf } from '@/helpers/formatCpf'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
/** Hooks */
import { useModal } from '@/hooks/useModal'
/** Types */
import { DataSpecialistI } from '../Types'
/** Styles */
import { Container } from './styles'
/** Services */
import apiAdmin from '@/services/apiAdmin'
import { useLoading } from '@/hooks/useLoading'

interface HeaderProps {
  data: DataSpecialistI
  setPhoto: Dispatch<SetStateAction<File>>
}

const Header: React.FC<HeaderProps> = ({
  data,
  setPhoto: setPhotoSpecialist,
}) => {
  const [photo, setPhoto] = React.useState<File>({ size: 0 } as File)
  const [imgBlob, setImgBlob] = React.useState('')
  const { showSimple } = useModal()
  const { Loading } = useLoading()

  //const removePhoto = () => setPhoto({} as File)
  const updateSpecialistPhoto = async () => {
    try {
      Loading.turnOn()
      const formData = new FormData()
      formData.append('file', photo)
      await apiAdmin.post(
        `/medico/arquivo?cpf=${data.specialistInfo.cpf}&tipoDocumento=FotoPerfil`,
        formData,
      )
      toast.success('Foto atualizada com sucesso!')
    } catch (error) {
      toast.error(
        'Ops! Houve um problema ao tentar adicionar uma foto no perfil, tente novamente.',
      )
    } finally {
      Loading.turnOff()
    }
  }

  const onFileInput = async () => {
    if (photo && !isValidSizeFile(photo)) {
      return showSimple.error(
        'Arquivo não suportado, O tamanho máximo do arquivo deve ser 10MB, nas extensões JPG, JPEG e PNG.',
      )
    } else if (photo) {
      const _imgBlob = URL.createObjectURL(photo)
      setImgBlob(_imgBlob)
      setPhotoSpecialist(photo)
      updateSpecialistPhoto()
    }
  }

  React.useEffect(() => {
    onFileInput()
  }, [photo])

  return (
    <Container>
      <div>
        <div>
          {data?.specialistInfo?.avatar || imgBlob ? (
            <div>
              <img
                src={
                  imgBlob === ''
                    ? `data:image/png;base64,${data?.specialistInfo.avatar}`
                    : imgBlob
                }
                alt="Imagem do especialista"
              />
            </div>
          ) : (
            <ProfileIcon />
          )}
        </div>
        <span>
          <InputFile
            setValue={setPhoto}
            clearOnClick
            accept=".jpg, .jpeg, .png"
          >
            <PenIcon />
          </InputFile>
        </span>
      </div>

      <div>
        <div>
          <h2>
            {formatTextWithLimit(
              firstLetterCapitalize(
                data?.specialistInfo?.profissionalName ||
                  data?.specialistInfo?.name ||
                  '',
              ),
            ) || ''}
          </h2>
          <p>
            <h6>CPF:</h6>
            <span>{formatCpf(data?.specialistInfo?.cpf) || ''}</span>
          </p>
          <p>
            <h6>data?.specialistInfo?.issuingAgencyName</h6>
            <span>{data?.specialistInfo?.classCouncil || ''}</span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Header
