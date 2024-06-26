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

type ChargesSummaryProps = FlexProps & {
	duration?: string;
	additionalCharges: {
		damage: number;
		insurance: number;
		tax: number;
	};
	selectedCar: any;
	discount?: number;
	borderStyle?: string;
	headerFontSize?: string;
	bgColor?: string;
	border?: string;
	width?: string;
};

const ChargesSummary: FC<ChargesSummaryProps> = ({
	duration,
	additionalCharges,
	selectedCar,
	discount,
	borderStyle,
	headerFontSize,
	bgColor,
	border,
	width,
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

	const totalWithTax = totalBeforeTax + taxAmount;

	const discountAmount = (totalWithTax * (discount || 0)) / 100;

	const total = totalWithTax - discountAmount;

	return (
		<Flex direction='column' gap={4} w={width}>
			<Text
				fontWeight='700'
				fontSize={headerFontSize}
				borderBottom={borderStyle}
			>
				Charges Summary
			</Text>
			<Flex
				direction='column'
				border={border}
				borderRadius='4px'
				bgColor={bgColor}
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
							<Tr>
								<Td>Collision Damage Waiver</Td>
								<Td></Td>
								<Td>${damage.toFixed(2)}</Td>
								<Td>${damage.toFixed(2)}</Td>
							</Tr>
							<Tr>
								<Td>Liability Insurance</Td>
								<Td></Td>
								<Td>${insurance.toFixed(2)}</Td>
								<Td>${insurance.toFixed(2)}</Td>
							</Tr>
							<Tr>
								<Td>Rental Tax</Td>
								<Td></Td>
								<Td>{tax?.toFixed(1)}%</Td>
								<Td>${taxAmount ? taxAmount.toFixed(2) : 0}</Td>
							</Tr>
							<Tr>
								<Td>Discount</Td>
								<Td></Td>
								<Td>{discount ? discount?.toFixed(1) : '0.0'}%</Td>
								<Td>${discountAmount ? discountAmount.toFixed(2) : 0}</Td>
							</Tr>
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
