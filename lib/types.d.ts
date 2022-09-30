export interface ICarData {
  carSpecs: {
    item_number: string;
    vin: string;
    name: string;
    year: number;
    startingPrice: number;
    endingPrice: number;
    mileage: number;
    views: number;
    saves: number;
    shares: number;
  };
  photos: string[];
  exterior: {
    cylinders: string;
    cityMPG: number;
    highwayMPG: number;
    engine: number;
  };
  performance: {
    cylinders: string;
    cityMPG: number;
    highwayMPG: number;
    engine: number;
  };
}

// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}
