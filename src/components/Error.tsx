import { Center, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type ErrorProps = {};

const Error: FC<ErrorProps> = ({}) => {
	return (
		<Center minHeight='100vh'>
			<Text color='red'>Could not load data. Please Try again later.</Text>
		</Center>
	);
};

export default Error;
