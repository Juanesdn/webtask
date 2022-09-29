export interface ICarData {
  item_number: string;
  vin: string;
  name: string;
  year: number;
  startingPrice: number;
  endingPrice: number;
  mileage: number;
  photos: string[];
  views: number;
  saves: number;
  shares: number;
  exterior: {
    cylinders: string;
    city_mpg: number;
    highway_mpg: number;
    enginer: number;
  };
  performance: {
    cylinders: string;
    city_mpg: number;
    highway_mpg: number;
    enginer: number;
  };
}

// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}
