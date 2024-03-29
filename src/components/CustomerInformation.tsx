import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomerInformationProps = {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: number;
	setFirstName?: any;
	setLastName?: any;
	setEmail?: any;
	setPhone?: any;
};

const CustomerInformation: FC<CustomerInformationProps> = ({
	firstName,
	lastName,
	email,
	phone,
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
}) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column' gap={4} w='350px'>
			<Text fontWeight='700' fontSize='20px' borderBottom='2px solid blue'>
				Customer Information
			</Text>
			<Flex
				direction='column'
				gap={4}
				p={4}
				border='1px solid #f1f1f1'
				borderRadius='4px'
			>
				<FormControl>
					<FormLabel>
						First Name<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Input
						required
						type='text'
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>
						Last Name<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Input
						required
						type='text'
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>
						Email<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Input
						required
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>
						Phone<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Input
						required
						type='number'
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</FormControl>
			</Flex>
		</Flex>
	);
};

export default CustomerInformation;
