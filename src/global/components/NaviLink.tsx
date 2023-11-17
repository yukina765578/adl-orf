import React from "react";
import { Link as ChakraLink } from '@chakra-ui/react'
import { NavLink as RouterLink } from 'react-router-dom'

type LinkProps = React.ComponentProps<typeof ChakraLink> & React.ComponentProps<typeof RouterLink>

const NaviLink = ({ children, ...props }: LinkProps) => {
    return(
        <ChakraLink as={RouterLink} {...props}>
            {children}
        </ChakraLink>
    )
}

export default NaviLink