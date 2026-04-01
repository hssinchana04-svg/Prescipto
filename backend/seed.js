import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "./models/doctorModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGODB_URI = 'mongodb+srv://hssinchana04_db_user:sinchanasinchana@cluster0.8erpwtp.mongodb.net/prescripto';
cloudinary.config({ 
    cloud_name: 'dpevzl3qm', 
    api_key: '426528254418236', 
    api_secret: 'Asn6tvG8MNRk8uai3Km1hBhmhso' 
});

const doctors = [
    { _id: 'doc1', name: 'Dr. Richard James', image: 'doc1.png', speciality: 'General physician', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc2', name: 'Dr. Emily Larson', image: 'doc2.png', speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc3', name: 'Dr. Sarah Patel', image: 'doc3.png', speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc4', name: 'Dr. Christopher Lee', image: 'doc4.png', speciality: 'Pediatricians', degree: 'MBBS', experience: '2 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 40, address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc5', name: 'Dr. Jennifer Garcia', image: 'doc5.png', speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc6', name: 'Dr. Andrew Williams', image: 'doc6.png', speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc7', name: 'Dr. Christopher Davis', image: 'doc7.png', speciality: 'General physician', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc8', name: 'Dr. Timothy White', image: 'doc8.png', speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc9', name: 'Dr. Ava Mitchell', image: 'doc9.png', speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc10', name: 'Dr. Jeffrey King', image: 'doc10.png', speciality: 'Pediatricians', degree: 'MBBS', experience: '2 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 40, address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc11', name: 'Dr. Zoe Kelly', image: 'doc11.png', speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc12', name: 'Dr. Patrick Harris', image: 'doc12.png', speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc13', name: 'Dr. Chloe Evans', image: 'doc13.png', speciality: 'General physician', degree: 'MBBS', experience: '4 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc14', name: 'Dr. Ryan Martinez', image: 'doc14.png', speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' } },
    { _id: 'doc15', name: 'Dr. Amelia Hill', image: 'doc15.png', speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years', about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.', fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' } }
];

const seedDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB");
        
        await doctorModel.deleteMany({});
        console.log("Cleared existing doctors");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("doctorpassword", salt);

        for (let doc of doctors) {
            const imagePath = path.join(__dirname, '../frontend/src/assets', doc.image);
            let imageUrl = '';
            
            if (fs.existsSync(imagePath)) {
                console.log(`Uploading ${doc.image} to Cloudinary...`);
                const uploadRes = await cloudinary.uploader.upload(imagePath, { resource_type: "image" });
                imageUrl = uploadRes.secure_url;
            } else {
                console.log(`Image ${doc.image} not found, using placeholder`);
                imageUrl = "https://via.placeholder.com/150";
            }

            const doctorData = {
                name: doc.name,
                email: `${doc._id}@prescripto.com`,
                password: hashedPassword,
                speciality: doc.speciality,
                degree: doc.degree,
                experience: doc.experience,
                about: doc.about,
                fees: doc.fees,
                address: doc.address,
                image: imageUrl,
                date: Date.now(),
            };

            const newDoctor = new doctorModel(doctorData);
            await newDoctor.save();
            console.log(`Saved ${doc.name}`);
        }

        console.log("Seeding complete!");
    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

seedDB();
