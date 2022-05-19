import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/clinic-profile.svg'
import { InputFile } from '@/components/Form/InputFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { firstLetterCapitalize } from '@/helpers/firstLetterCapitalize'
import formatCnpj from '@/helpers/formatCnpj'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'
import React from 'react'
import { Container } from './styles'
import { useModal } from '@/hooks/useModal'
/** Context */
import { ClinicEditContext } from '../Context/ClinicEditContext'

const Header: React.FC = () => {
  const { data, setPhoto: setFotoClinica } = React.useContext(ClinicEditContext)
  /** States */
  const [imgBlob, setImgBlob] = React.useState('')
  const [photo, setPhoto] = React.useState<File>({ size: 0 } as File)

  const { showSimple } = useModal()
  const removePhoto = () => setPhoto({} as File)

  const onFileInput = async () => {
    if (photo && photo.size !== 0 && !isValidSizeFile(photo)) {
      removePhoto()
      showSimple.error(
        'Arquivo não suportado, O tamanho máximo do arquivo deve ser 10MB, nas extensões JPG, JPEG e PNG.',
      )
    } else {
      if (photo && photo.size !== 0) {
        const _imgBlob = URL.createObjectURL(photo)
        setImgBlob(_imgBlob)
        setFotoClinica(photo)
        console.log(_imgBlob)
      }
    }
  }

  React.useEffect(() => {
    onFileInput()
  }, [photo])

  return (
    <Container>
      <div>
        <div>
          {data?.avatar || imgBlob ? (
            <div>
              <img
                src={
                  imgBlob === ''
                    ? `data:image/png;base64,${data?.avatar}`
                    : imgBlob
                }
                alt="Imagem da clinica"
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
              firstLetterCapitalize(data?.razaoSocial || ''),
            ) || ''}
          </h2>
          <p>
            <h6>CNPJ:</h6>
            <span> {formatCnpj(data?.cnpj) || ''}</span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Header
