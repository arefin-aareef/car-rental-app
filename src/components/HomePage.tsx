import { Center, Flex, Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import useFetch from 'react-fetch-hook';
import { FetchData } from '@/types/types';
import { Spinner } from '@chakra-ui/react';
import Invoice from './Invoice';
import Loading from './Loading';
import Error from './Error';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	// HOOKS

	const { isLoading, data, error } = useFetch<FetchData>(
		'https://exam-server-7c41747804bf.herokuapp.com/carsList'
	);

	const cars = data?.data;

	console.log('cars', cars);

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column'>
			<Grid gridTemplateColumns='3fr 2fr' p={8} gap={4}>
        <Grid background='red.100'>hi</Grid>
        <Invoice />
      </Grid>
		</Flex>
	);
};

export default HomePage;
