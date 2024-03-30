import { Button, Flex, Grid, Heading } from '@chakra-ui/react';
import React, { FC, useRef, useState } from 'react';
import useFetch from 'react-fetch-hook';
import { FetchData } from '@/types/types';
import Invoice from './Invoice';
import Loading from './Loading';
import Error from './Error';
import ReservationDetails from './ReservationDetails';
import CustomerInformation from './CustomerInformation';
import VehicleInformation from './VehicleInformation';
import AdditionalCharges from './AdditionalCharges';
import ChargesSummary from './ChargesSummary';
import ReactToPrint from 'react-to-print';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	const componentRef = useRef<ComponentToPrint | null>(null);
	// HOOKS

	const { isLoading, data, error } = useFetch<FetchData>(
		'https://exam-server-7c41747804bf.herokuapp.com/carsList'
	);
	const cars = data?.data;

	// STATE

	const [reservationId, setReservationId] = useState('');
	const [pickupDate, setPickupDate] = useState('');
	const [returnDate, setReturnDate] = useState('');
	const [duration, setDuration] = useState('');
	const [discount, setDiscount] = useState(0);

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
	const selectedCar = cars?.find(car => car.id === vehicle);

	const additionalCharges = {
		damage,
		insurance,
		tax,
	};

	const invoiceInfo = {
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
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <Error />;
	}

	class ComponentToPrint extends React.PureComponent {
		render() {
			return <Invoice invoiceInfo={invoiceInfo} />;
		}
	}

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Flex direction='column' gap={8} pb={8}>
			<Flex direction='column' p={8} gap={8}>
				<Flex justifyContent='space-between' alignItems='center'>
					<Heading>Reservation</Heading>
					<ReactToPrint
						trigger={() => <Button colorScheme='blue'>Print/Download</Button>}
						content={() => componentRef.current || null}
					/>
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
						discount={discount}
						borderStyle='2px solid blue'
						headerFontSize='20px'
						bgColor='#dfdfff'
						border='1px solid #5d5cff'
						width='480px'
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
			<div style={{ display: 'none' }}>
				<ComponentToPrint ref={componentRef} />
			</div>
		</Flex>
	);
};

export default HomePage;
