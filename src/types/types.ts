interface CarFeatures {
	id: string;
	make: string;
	model: string;
	year: number;
	type: string;
	seats: number;
	bags: number;
	features: string[];
	rates: {
		hourly: number;
		daily: number;
		weekly: number;
	};
	imageURL: string;
}

export interface FetchData {
	data: CarFeatures[];
}
