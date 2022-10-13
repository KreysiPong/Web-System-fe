import type { NextPage } from 'next'

import {Box} from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
<>
<Navbar />
<Box w='100%' h='100vh' bgGradient='linear(to-r, green.200, green.500)' /></>
  )
}

export default Home
