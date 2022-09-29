import mongoose from 'mongoose';
import { ICarData } from './types';

// Connection url (Get Database Url from .env.local)
const { DB_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DB_URL as string)
    .catch((err) => console.log(err));
  console.log('Mongoose Connection Established');

  // Car schema
  const CarSchema = new mongoose.Schema<ICarData>({
    item_number: String,
    vin: String,
    name: String,
    year: Number,
    startingPrice: Number,
    endingPrice: Number,
    mileage: Number,
    photos: [String],
    views: Number,
    saves: Number,
    shares: Number,
    exterior: {
      cylinders: String,
      cityMPG: Number,
      highwayMPG: Number,
      engine: Number,
    },
    performance: {
      cylinders: String,
      cityMPG: Number,
      highwayMPG: Number,
      engine: Number,
    },
  });

  // Cars model
  const Cars = mongoose.model<ICarData>('Cars', CarSchema);

  return { conn, Cars };
};
