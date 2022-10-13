import {FC} from 'react'
import {Box, Button, Flex} from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Navbar: FC = () =>{

    const router = useRouter()
  


    return (
        <>
        <Box>
            <Flex justifyContent='flex-end'   bgGradient='linear(to-r, green.200, green.500)'>
            <Box>
            <Button onClick={() => router.push('/login')}>Login</Button>
            <Button onClick={() => router.push('/register')}>Register</Button>
            </Box>
            </Flex>
        </Box>
        </>
    )
}

export default Navbar