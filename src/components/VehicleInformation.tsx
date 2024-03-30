import { Flex, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';
import { ca } from 'date-fns/locale';
import React, { FC } from 'react';

type VehicleInformationProps = {
	vehicleType?: string;
	vehicle?: string;
	setVehicleType?: any;
	setVehicle?: any;
	cars?: any
};

const VehicleInformation: FC<VehicleInformationProps> = ({
	vehicleType,
	vehicle,
	setVehicleType,
	setVehicle,
	cars,
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
				Vehicle Information
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
						Vehicle Type<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Select
						placeholder='Select vehicle type'
						value={vehicleType}
						onChange={e => setVehicleType(e.target.value)}
					>
						<option value='Sedan'>Sedan</option>
						<option value='SUV'>SUV</option>
					</Select>
				</FormControl>
				<FormControl>
					<FormLabel>
						Vehicle<span style={{ color: 'red' }}>*</span>
					</FormLabel>
					<Select
						placeholder='Select vehicle'
						value={vehicle}
						onChange={e => setVehicle(e.target.value)}
					>
						{cars?.map((car: any) => (
							<option value={car?.id}>
								{car?.make} {car?.model}
							</option>
						))}
					</Select>
				</FormControl>
			</Flex>
		</Flex>
	);
};

export default VehicleInformation;
