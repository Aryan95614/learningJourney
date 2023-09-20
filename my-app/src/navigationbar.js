import React from 'react'; // Remove curly braces around React
import { Text, HStack, Box } from '@chakra-ui/react';

export default function NavigationBar() {
    function NavLink(link, text) {
        return (
            <Box px={4} py={2}>
                <a href={link}>
                    <Text fontSize='2xl'>
                        {text}
                    </Text>
                </a>
            </Box>
        );
    }

    return (
        <nav>
            <HStack>
               {NavLink("/", "Council of Knowledge")}
            </HStack>
        </nav>
    );
}
