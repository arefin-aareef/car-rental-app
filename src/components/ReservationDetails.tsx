import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightAddon,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import React, { FC } from 'react';

type ReservationDetailsProps = {
	reservationId?: string;
	pickupDate?: any;
	returnDate?: any;
	duration?: string;
	discount?: number;
	setReservationId?: any;
	setPickupDate?: any;
	setReturnDate?: any;
	setDuration?: any;
	setDiscount?: any;
};

const ReservationDetails: FC<ReservationDetailsProps> = ({
	reservationId,
	pickupDate,
	returnDate,
	duration,
	discount,
	setReservationId,
	setPickupDate,
  setReturnDate,
  setDuration,
  setDiscount
}) => {
	// HOOKS

	// STATE

	// VARIABLES
  	const currentDate = new Date();
		const formattedDate = currentDate.toISOString().substring(0, 16);

	// STYLES

	// FUNCTIONS
  
	const calculateDuration = (pickupDate: string, returnDate: string) => {
		const pickupDay = new Date(pickupDate);
		const returnDay = new Date(returnDate);
		const timeDiff = Math.abs(returnDay.getTime() - pickupDay.getTime());
		console.log('timeDiff', timeDiff);

		const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
		const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 7);
		const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

		let duration = '';
		if (weeks > 0) {
			duration += `${weeks} week${weeks > 1 ? 's' : ''} `;
		}
		if (days > 0) {
			duration += `${days} day${days > 1 ? 's' : ''} `;
		}
		if (hours > 0) {
			duration += `${hours} hour${hours > 1 ? 's' : ''}`;
		}

		return duration.trim();
	};

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column' gap={4} w='350px'>
			<Text fontWeight='700' fontSize='20px' borderBottom='2px solid blue'>
				Reservation Details
			</Text>
			<Flex
				direction='column'
				gap={4}
				p={4}
				border='1px solid #f1f1f1'
				borderRadius='4px'
			>
				<FormControl>
					<FormLabel>Reservation ID</FormLabel>
					<Input
						type='text'
						value={reservationId}
						onChange={e => setReservationId(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>
						Pickup Date<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Input
						required
						type='datetime-local'
						value={pickupDate}
						min={formattedDate}
						onChange={e => {
							setPickupDate(e.target.value);
							setDuration(calculateDuration(e.target.value, returnDate));
						}}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>
						Return Date<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Tooltip
						label='Please select a pickup date first'
						isDisabled={pickupDate !== ''}
					>
						<span>
							<Input
								required
								type='datetime-local'
								value={returnDate}
								min={pickupDate}
								disabled={pickupDate === ''}
								onChange={e => {
									setReturnDate(e.target.value);
									setDuration(calculateDuration(pickupDate, e.target.value));
								}}
							/>
						</span>
					</Tooltip>
				</FormControl>
				<FormControl>
					<Flex justifyContent='space-between' alignItems='center' gap={4}>
						<FormLabel>Duration</FormLabel>
						<Input
							textAlign='center'
							value={duration ? duration : '0'}
							readOnly
						/>
					</Flex>
				</FormControl>
				<FormControl>
					<FormLabel>Discount</FormLabel>
					<InputGroup>
						<Input
							type='number'
							min='0'
							max='100'
							value={discount}
							onChange={e => {
								let value = parseInt(e.target.value);
								if (value > 100) {
									value = 100;
								}
								setDiscount(value);
							}}
						/>
						<InputRightAddon children='%' />
					</InputGroup>
				</FormControl>
			</Flex>
		</Flex>
	);
};

export default ReservationDetails;
