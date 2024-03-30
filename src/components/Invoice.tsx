import { Flex, Grid, Img, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ChargesSummary from './ChargesSummary';

type InvoiceProps = {
	invoiceInfo?: any;
};

const Invoice: FC<InvoiceProps> = ({ invoiceInfo }) => {
	// HOOKS

	// STATE

	// VARIABLES

	const {
		reservationId,
		pickupDate,
		returnDate,
		duration,
		discount,
		firstName,
		lastName,
		email,
		phone,
		vehicleType,
		vehicle,
		selectedCar,
		additionalCharges,
	} = invoiceInfo;

let formattedPickupDate = '';
if (pickupDate) {
	const pickupDateObj = new Date(pickupDate);
	formattedPickupDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	}).format(pickupDateObj);
}

let formattedReturnDate = '';
if (returnDate) {
	const returnDateObj = new Date(returnDate);
	formattedReturnDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	}).format(returnDateObj);
}

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex w='full' p={4}>
			<Flex direction='column' w='794px' mx='auto' gap={4}>
				<Text fontSize='24px' fontWeight='700'>
					Invoice
				</Text>
				<Grid gridTemplateColumns='1fr 1fr' gap={2}>
					{/* LEFT PART */}
					<Flex direction='column' gap={4}>
						<Grid gridTemplateColumns='1fr 1fr' gap={2}>
							<Img
								src='https://s3.amazonaws.com/cka-dash/182-1021-RTO100/model1.png'
								alt='logo'
							/>
							<Flex direction='column'>
								<Text fontSize='14px'>CH Car Place Inc</Text>
								<Text fontSize='14px'>162 Bergen st</Text>
								<Text fontSize='14px'>Brooklyn, NY 11213</Text>
								<Text fontSize='14px'>PH# 09923558744</Text>
							</Flex>
							<Flex direction='column'>
								<Text fontWeight='700'>RENTER INFO</Text>
								<Text fontSize='14px'>
									{firstName} {lastName}
								</Text>
								<Text fontSize='14px'>{email}</Text>
								<Text fontSize='14px'>{phone}</Text>
							</Flex>
							<Flex direction='column'>
								<Text fontSize='14px'>Monday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Tuesday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Wednesday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Thursday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Friday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Saturday 9:00 AM-6:00 PM</Text>
								<Text fontSize='14px'>Sunday 9:00 AM-6:00 PM</Text>
							</Flex>
						</Grid>
						<Text fontWeight='700'>ADDITIONAL AUTHORIZED DRIVER</Text>
						<Flex direction='column'>
							<Text fontSize='16px' fontWeight='700'>
								UNIT DETAILS
							</Text>
							<Text fontSize='14px'>
								Unit: {selectedCar?.make} {selectedCar?.model}
							</Text>
							<Text fontSize='14px'>
								Make & Model: {selectedCar?.make} {selectedCar?.model}
							</Text>
							<Text fontSize='14px'>Vehicle Type: {vehicleType}</Text>
						</Flex>
						<Flex direction='column'>
							<Text fontSize='14px'>
								BILL TO: {firstName} {lastName}
							</Text>
							<Text fontSize='14px'>Payment Type: Unpaid</Text>
							<Text fontSize='14px'>AUTH: $0.00</Text>
						</Flex>
						<Flex direction='column'>
							<Text fontSize='14px'>Referral:</Text>
							<Text fontSize='14px'>
								NOTICE: Collision Insurance (CDW)-$7 per day Limits liability of
								damages to one's own vehicle up to $1000 in event of an
								accident, by waiving this coverage renter agrees to be hold
								liable for damages up to the entire value of the vehicle.
							</Text>
							<Flex justifyContent='space-evenly' py={4}>
								<Text fontSize='14px'>Accept</Text>
								<Text fontSize='14px'>Reject</Text>
							</Flex>
							<Text fontSize='14px'>
								Rental service may be refused anyone when done in the best
								interest of the renting company or customer - Rates do not
								include gasoline - Reserves te right to collect deposit covering
								estimated rental charges.
							</Text>
						</Flex>
					</Flex>
					{/* RIGHT PART */}

					<Flex direction='column'>
						<Text fontWeight='700' fontSize='18px'>
							Reservation
						</Text>
						<Text fontWeight='700' fontSize='16px'>
							RA #{reservationId}
						</Text>
						<Text fontSize='16px'>REPAIR ORDER:</Text>
						<Text fontSize='16px'>CLAIM:</Text>
						<Text fontSize='14px'>Date/Time Out: {formattedPickupDate}</Text>
						<Text fontSize='14px' mb='8px'>
							Date/Time In: {formattedReturnDate}
						</Text>
						<ChargesSummary
							additionalCharges={additionalCharges}
							duration={duration}
							selectedCar={selectedCar}
							bgColor='#e6e6e3'
						/>
						<Text fontSize='14px' pt='8px'>
							Your rental agreement offers for an additional charge, an optional
							waiver to cover all or a part of your responsibility for damage to
							or loss of the vehicle. Before deciding whether to purchase the
							waiver, you may wish to determine whether your own automobile
							insurance or credit card agreement provides you coverage for
							rental vehicle damage or loss and determine the amount of the
							deductible under your own insurance coverage. The purchase of the
							waiver is not mandatory. The waiver is not insurance. I
							acknowledge that I have received and read a copy of this.
						</Text>
						<Text fontSize='14px' pt='24px'>Renters Signature</Text>
						<Text fontSize='14px'>
							-----------------------------------------------------------------
						</Text>
						<Text fontSize='14px'>Additional Driver 1</Text>
						<Text fontSize='14px'>
							-----------------------------------------------------------------
						</Text>
					</Flex>
				</Grid>
			</Flex>
		</Flex>
	);
};

export default Invoice;
