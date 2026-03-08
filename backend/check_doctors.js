import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://hssinchana04_db_user:sinchanasinchana@cluster0.8erpwtp.mongodb.net/prescripto';

const doctorSchema = new mongoose.Schema({}, { strict: false });
const Doctor = mongoose.model('doctor', doctorSchema);

const check = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const count = await Doctor.countDocuments({});
    console.log(`Total doctors in DB: ${count}`);
    const doctors = await Doctor.find({});
    console.log(doctors.map(d => ({ name: d.name, speciality: d.speciality })));
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
}

check();
