import {
	Flex,
	Text,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	FlexProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type ChargesSummaryProps = {
	duration?: string;
	additionalCharges: {
		damage: number;
		insurance: number;
		tax: number;
	};
	selectedCar: any;
};

const ChargesSummary: FC<ChargesSummaryProps> = ({
	duration,
	additionalCharges,
	selectedCar,
}) => {
	// HOOKS

	// STATE

	// VARIABLES
	const { damage, insurance, tax } = additionalCharges;

	const durationParts = (duration || '').split(' ');

	let weeks = 0;
	let days = 0;
	let hours = 0;

	for (let i = 0; i < durationParts.length; i += 2) {
		const value = parseInt(durationParts[i]);
		const unit = durationParts[i + 1];

		if (unit?.startsWith('week')) {
			weeks = value;
		} else if (unit?.startsWith('day')) {
			days = value;
		} else if (unit?.startsWith('hour')) {
			hours = value;
		}
	}

	const totalHourly = hours * selectedCar?.rates?.hourly;
	const totalDaily = days * selectedCar?.rates?.daily;
	const totalWeekly = weeks * selectedCar?.rates?.weekly;

	const totalBeforeTax =
		totalHourly + totalDaily + totalWeekly + damage + insurance;

	const taxAmount = totalBeforeTax * (tax / 100);

	const total = totalBeforeTax + taxAmount;

	//  console.log('check', weeks, days, hours);

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column' gap={4} w='480px'>
			<Text fontWeight='700' fontSize='20px' borderBottom='2px solid blue'>
				Charges Summary
			</Text>
			<Flex
				direction='column'
				gap={4}
				p={4}
				border='1px solid #5d5cff'
				borderRadius='4px'
				bgColor='#dfdfff'
			>
				<TableContainer>
					<Table size='sm'>
						<Thead>
							<Tr>
								<Th>Charge</Th>
								<Th>Unit</Th>
								<Th>Rate</Th>
								<Th>Total</Th>
							</Tr>
						</Thead>
						<Tbody>
							{hours > 0 && (
								<Tr>
									<Td>Hourly</Td>
									<Td>{hours}</Td>
									<Td>
										{selectedCar
											? `$${selectedCar?.rates?.hourly.toFixed(2)}`
											: ''}
									</Td>
									<Td>${totalHourly ? totalHourly.toFixed(2) : 0}</Td>
								</Tr>
							)}
							{days > 0 && (
								<Tr>
									<Td>Daily</Td>
									<Td>{days}</Td>
									<Td>
										{selectedCar
											? `S${selectedCar?.rates?.daily.toFixed(2)}`
											: ''}
									</Td>
									<Td>${totalDaily ? totalDaily.toFixed(2) : 0}</Td>
								</Tr>
							)}
							{weeks > 0 && (
								<Tr>
									<Td>Weekly</Td>
									<Td>{weeks}</Td>
									<Td>
										{selectedCar
											? `S${selectedCar?.rates?.weekly.toFixed(2)}`
											: ''}
									</Td>
									<Td>${totalWeekly ? totalWeekly.toFixed(2) : 0}</Td>
								</Tr>
							)}
							{damage > 0 && (
								<Tr>
									<Td>Collision Damage Waiver</Td>
									<Td></Td>
									<Td>${damage.toFixed(2)}</Td>
									<Td>${damage.toFixed(2)}</Td>
								</Tr>
							)}
							{insurance > 0 && (
								<Tr>
									<Td>Liability Insurance</Td>
									<Td></Td>
									<Td>${insurance.toFixed(2)}</Td>
									<Td>${insurance.toFixed(2)}</Td>
								</Tr>
							)}
							{tax > 0 && (
								<Tr>
									<Td>Rental Tax</Td>
									<Td></Td>
									<Td>{tax.toFixed(1)}%</Td>
									<Td>${taxAmount ? taxAmount.toFixed(2) : 0}</Td>
								</Tr>
							)}
						</Tbody>
						<Tfoot>
							<Tr>
								<Th fontSize='14px' fontWeight='800'>
									Total
								</Th>
								<Th></Th>
								<Th></Th>
								<Th fontSize='14px' fontWeight='800'>
									${total ? total.toFixed(2) : 0}
								</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
			</Flex>
		</Flex>
	);
};

export default ChargesSummary;
