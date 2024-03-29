'use client';
import HomePage from '@/components/HomePage';
import { Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box mx='auto' background='#f8f8f8' w='1280px' minH='100vh'>
			<HomePage />
		</Box>
	);
}
