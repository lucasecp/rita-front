import { MultiSelectOption } from '@/components/Form/MultSelect'
import { SpecialtysAndDocsType } from '../Types'

const convertFileType = (name: string, type: string) => {
  return name + '.' + type.split('/')[1]
}

export const specialysDocsFromApi = (
  docs: any[],

  specialtys: MultiSelectOption[],
): SpecialtysAndDocsType => {
  console.log(docs)
  return specialtys.reduce((ac: SpecialtysAndDocsType, value, index) => {
    const fileType = docs[index].headers['content-type']

    ac[value.name] = {
      idSpecialty: specialtys[index].id,
      document: new File(
        [docs[index].data],
        convertFileType(specialtys[index].name, fileType),
        {
          type: fileType,
        },
      ),
    }

    return ac
  }, {})
}
