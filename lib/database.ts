import mongoose from 'mongoose';

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.DB_URL as string)
    .catch((err) => console.log(err));
  console.log('Mongoose Connection Established');

  // Car schema
  const CarSchema = new mongoose.Schema({
    carSpecs: {
      item_number: String,
      vin: String,
      name: String,
      year: Number,
      startingPrice: Number,
      endingPrice: Number,
      mileage: Number,
      views: Number,
      saves: Number,
      shares: Number,
    },
    photos: [String],
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
  const Cars = mongoose.models.Cars || mongoose.model('Cars', CarSchema);

  return { conn, Cars };
};
