import apiAdmin from '@/services/apiAdmin'
import axios from 'axios'
import { SpecialtysAndDocsType } from '../Types'

export const useDocsSpecialtys = (
  specialtysAndDocs: SpecialtysAndDocsType,
  cpf?: string,
): { registerDocsSpecialtys: () => Promise<void> } => {
  const createListFormDataOfSpecialtys = () => {
    const list = []

    for (const specialty in specialtysAndDocs) {
      if (!specialtysAndDocs[specialty].document) {
        continue
      }

      const formFile = new FormData()

      formFile.append('file', specialtysAndDocs[specialty].document)

      list.push({ id: specialtysAndDocs[specialty].idSpecialty, formFile })
    }
    return list
  }

  const registerDocsSpecialtys = async () => {
    const listDocs = createListFormDataOfSpecialtys()

    try {
      await axios.all(
        listDocs.map((data) =>
          apiAdmin.post(
            `medico/arquivo?cpf=${cpf}&tipoDocumento=ComprovanteEspecialidade&idEspecialidade=${data.id}`,
            data.formFile,
          ),
        ),
      )
    } catch (error) {
      throw new Error('Erro ao salvar os documentos das especialidades')
    }
  }

  return { registerDocsSpecialtys }
}
