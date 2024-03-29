import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Heading,
	Input,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { FetchData } from '@/types/types';
import { Spinner } from '@chakra-ui/react';
import Invoice from './Invoice';
import Loading from './Loading';
import Error from './Error';
import ReservationDetails from './ReservationDetails';
import CustomerInformation from './CustomerInformation';
import VehicleInformation from './VehicleInformation';
import AdditionalCharges from './AdditionalCharges';
import ChargesSummary from './ChargesSummary';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	// HOOKS

	const { isLoading, data, error } = useFetch<FetchData>(
		'https://exam-server-7c41747804bf.herokuapp.com/carsList'
	);

	const cars = data?.data;

	console.log('cars', cars);

	// if (isLoading) {
	// 	return <Loading />;
	// } 
  
  // if (error) {
	// 	return <Error />;
	// }

	// STATE

	const [reservationId, setReservationId] = useState('');
	const [pickupDate, setPickupDate] = useState('');
	const [returnDate, setReturnDate] = useState('');
	const [duration, setDuration] = useState('');
	const [discount, setDiscount] = useState();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState();

	const [vehicleType, setVehicleType] = useState('');
	const [vehicle, setVehicle] = useState('');

  const [damage, setDamage] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [tax, setTax] = useState(0);

  // console.log('check',  vehicle);

  

	// VARIABLES

  const additionalCharges = {
		damage,
		insurance,
		tax,
	};

  const selectedCar = cars?.find(car => car.id === vehicle);

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column'>
			<Flex direction='column' p={8} gap={8}>
				<Flex justifyContent='space-between' alignItems='center'>
					<Heading>Reservation</Heading>
					<Button colorScheme='blue'>Print/Download</Button>
				</Flex>
				<Grid gridTemplateColumns='1fr 1fr 1fr' gap={2}>
						<ReservationDetails
							reservationId={reservationId}
							pickupDate={pickupDate}
							returnDate={returnDate}
							duration={duration}
							discount={discount}
							setReservationId={setReservationId}
							setPickupDate={setPickupDate}
							setReturnDate={setReturnDate}
							setDuration={setDuration}
							setDiscount={setDiscount}
						/>
						<CustomerInformation
							firstName={firstName}
							lastName={lastName}
							email={email}
							phone={phone}
							setFirstName={setFirstName}
							setLastName={setLastName}
							setEmail={setEmail}
							setPhone={setPhone}
						/>
						<ChargesSummary
							additionalCharges={additionalCharges}
							duration={duration}
							selectedCar={selectedCar}
						/>
						<VehicleInformation
							vehicleType={vehicleType}
							vehicle={vehicle}
							setVehicleType={setVehicleType}
							setVehicle={setVehicle}
							cars={cars}
						/>
						<AdditionalCharges
							damage={damage}
							insurance={insurance}
							tax={tax}
							setDamage={setDamage}
							setInsurance={setInsurance}
							setTax={setTax}
						/>
				</Grid>
			</Flex>
			<Invoice />
		</Flex>
	);
};

export default HomePage;
