import { Center, Flex, Spinner, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type LoadingProps = {};

const Loading: FC<LoadingProps> = ({}) => {
	return (
		<Center minHeight='100vh'>
			<Flex>
				<Text mr='2px'>Please wait...</Text>
				<Spinner />
			</Flex>
		</Center>
	);
};

export default Loading;
