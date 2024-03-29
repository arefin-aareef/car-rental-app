import { Checkbox, Flex, Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type AdditionalChargesProps = {
	damage: number;
	insurance: number;
	tax: number;
	setDamage: any;
	setInsurance: any;
	setTax: any;
};

const AdditionalCharges: FC<AdditionalChargesProps> = ({
	damage,
	insurance,
	tax,
	setDamage,
	setInsurance,
	setTax,
}) => {
	const handleCheckboxChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		setValue: any,
		value: number
	) => {
		setValue(e.target.checked ? value : 0);
	};

	return (
		<Flex direction='column' gap={4} w='350px'>
			<Text fontWeight='700' fontSize='20px' borderBottom='2px solid blue'>
				Additional Charges
			</Text>
			<Flex
				direction='column'
				gap={4}
				p={4}
				border='1px solid #f1f1f1'
				borderRadius='4px'
			>
				<Flex justifyContent='space-between'>
					<Flex gap={2}>
						<Checkbox onChange={e => handleCheckboxChange(e, setDamage, 9.0)} />
						<Text>Collision Damage Waiver</Text>
					</Flex>
					<Text>$9.00</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Flex gap={2}>
						<Checkbox
							onChange={e => handleCheckboxChange(e, setInsurance, 15.0)}
						/>
						<Text>Liability Insurance</Text>
					</Flex>
					<Text>$15.00</Text>
				</Flex>
				<Flex justifyContent='space-between'>
					<Flex gap={2}>
						<Checkbox onChange={e => handleCheckboxChange(e, setTax, 11.5)} />
						<Text>Rental Tax</Text>
					</Flex>
					<Text>11.5%</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default AdditionalCharges;
