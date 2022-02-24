import React, { useEffect, useState } from 'react'

import CustomMultSelect, {
  MultiSelectOption,
} from '@/components/Form/MultSelect'

import apiUser from '@/services/apiUser'
import { toast } from '@/styles/components/toastify'

interface IProfilesMultiSelectProps {
  initialProfiles: MultiSelectOption[]
  onGetAccessProfile: React.Dispatch<React.SetStateAction<MultiSelectOption[]>>
}

const ProfilesMultiSelect: React.FC<IProfilesMultiSelectProps> = ({
  initialProfiles,
  onGetAccessProfile,
}) => {
  const [profileOptions, setProfileOptions] = useState(
    [] as MultiSelectOption[],
  )
  const [accessProfile, setAccessProfile] = useState(initialProfiles)

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const { data } = await apiUser.get<{ id: number; nome: string }[]>(
          '/perfil',
        )

        const profilesOptionsMapped = data.map((profileOption) => ({
          id: profileOption.id,
          name: profileOption.nome,
        }))

        setProfileOptions(profilesOptionsMapped)
      } catch (error) {
        toast.error('Erro ao carregar lista de perfis!')
      }
    }

    loadProfiles()
  }, [])

  useEffect(() => {
    onGetAccessProfile(accessProfile)
  }, [accessProfile])

  return (
    <CustomMultSelect
      options={profileOptions}
      variation="secondary"
      label="Perfil de Acesso:"
      value={accessProfile}
      setValue={setAccessProfile}
    />
  )
}
export default ProfilesMultiSelect
