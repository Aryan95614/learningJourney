import AskCouncil from '../pages/AskCouncil';
import HomePage from '../pages/main';
import {Text, HStack} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <>
            <Router>
                <nav>
                    <HStack>
                        <Link to="/HomePage"> 
                            <Text px={4} py={4}>Council of Knowledge</Text>
                        </Link>
                        <Link to="/ask-council"> 
                            <Text px={4} py={4}>Ask the Experts</Text>
                        </Link>
                    </HStack>      
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ask-council" element={<AskCouncil />} />
                </Routes>
                
            </Router>
            
        </>
    );
}