import React from 'react'
import { Layout } from './Layout'
import { Content } from './Layout'

interface ChooseProfileProps {}

const ChooseProfile: React.FC<ChooseProfileProps> = () => {
  return <Layout title="Ínicio">
    <Content></Content>
  </Layout>
}

export default ChooseProfile
