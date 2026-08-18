import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import foodModel from "../models/foodModel.js";

const initialFoods = [
  { name: "Greek salad", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Salad", image: "1722865444288food_1.png" },
  { name: "Veg salad", description: "Food provides essential nutrients for overall health and well-being", price: 18, category: "Salad", image: "1722865514626food_2.png" },
  { name: "Clover Salad", description: "Food provides essential nutrients for overall health and well-being", price: 16, category: "Salad", image: "1722865628915food_3.png" },
  { name: "Chicken Salad", description: "Food provides essential nutrients for overall health and well-being", price: 24, category: "Salad", image: "1722865668073food_4.png" },
  { name: "Lasagna Rolls", description: "Food provides essential nutrients for overall health and well-being", price: 14, category: "Rolls", image: "1722865738489food_5.png" },
  { name: "Peri Peri Rolls", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Rolls", image: "1722865934153food_6.png" },
  { name: "Chicken Rolls", description: "Food provides essential nutrients for overall health and well-being", price: 20, category: "Rolls", image: "1722865976487food_7.png" },
  { name: "Veg Rolls", description: "Food provides essential nutrients for overall health and well-being", price: 15, category: "Rolls", image: "1722866043779food_8.png" },
  { name: "Ripple Ice Cream", description: "Food provides essential nutrients for overall health and well-being", price: 14, category: "Deserts", image: "1722866109947food_9.png" },
  { name: "Fruit Ice Cream", description: "Food provides essential nutrients for overall health and well-being", price: 22, category: "Deserts", image: "1722866148130food_10.png" },
  { name: "Jar Ice Cream", description: "Food provides essential nutrients for overall health and well-being", price: 10, category: "Deserts", image: "1722866329894food_11.png" },
  { name: "Vanilla Ice Cream", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Deserts", image: "1722866385025food_12.png" },
  { name: "Chicken Sandwich", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Sandwich", image: "1722866412882food_13.png" },
  { name: "Vegan Sandwich", description: "Food provides essential nutrients for overall health and well-being", price: 18, category: "Sandwich", image: "1722866469319food_14.png" },
  { name: "Grilled Sandwich", description: "Food provides essential nutrients for overall health and well-being", price: 16, category: "Sandwich", image: "1722866504992food_15.png" },
  { name: "Bread Sandwich", description: "Food provides essential nutrients for overall health and well-being", price: 24, category: "Sandwich", image: "1722866560218food_16.png" },
  { name: "Cup Cake", description: "Food provides essential nutrients for overall health and well-being", price: 14, category: "Cake", image: "1722866610567food_17.png" },
  { name: "Vegan Cake", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Cake", image: "1722866647952food_18.png" },
  { name: "Butterscotch Cake", description: "Food provides essential nutrients for overall health and well-being", price: 20, category: "Cake", image: "1722866694357food_19.png" },
  { name: "Sliced Cake", description: "Food provides essential nutrients for overall health and well-being", price: 15, category: "Cake", image: "1722866729053food_20.png" },
  { name: "Garlic Mushroom ", description: "Food provides essential nutrients for overall health and well-being", price: 14, category: "Pure Veg", image: "1722866777756food_21.png" },
  { name: "Fried Cauliflower", description: "Food provides essential nutrients for overall health and well-being", price: 22, category: "Pure Veg", image: "1722866830901food_22.png" },
  { name: "Mix Veg Pulao", description: "Food provides essential nutrients for overall health and well-being", price: 10, category: "Pure Veg", image: "1722866871307food_23.png" },
  { name: "Rice Zucchini", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Pure Veg", image: "1722866909328food_24.png" },
  { name: "Cheese Pasta", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Pasta", image: "1722866948105food_25.png" },
  { name: "Tomato Pasta", description: "Food provides essential nutrients for overall health and well-being", price: 18, category: "Pasta", image: "1722867018540food_26.png" },
  { name: "Creamy Pasta", description: "Food provides essential nutrients for overall health and well-being", price: 16, category: "Pasta", image: "1722867053413food_27.png" },
  { name: "Chicken Pasta", description: "Food provides essential nutrients for overall health and well-being", price: 24, category: "Pasta", image: "1722867110108food_28.png" },
  { name: "Butter Noodles", description: "Food provides essential nutrients for overall health and well-being", price: 14, category: "Noodles", image: "1722867144188food_29.png" },
  { name: "Veg Noodles", description: "Food provides essential nutrients for overall health and well-being", price: 12, category: "Noodles", image: "1722867222977food_30.png" },
  { name: "Somen Noodles", description: "Food provides essential nutrients for overall health and well-being", price: 20, category: "Noodles", image: "1722867254829food_31.png" },
  { name: "Cooked Noodles", description: "Food provides essential nutrients for overall health and well-being", price: 15, category: "Noodles", image: "1722867630288food_32.png" }
];

export const connectDB = async () => {
  let mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    console.log("No MONGO_URL found in environment. Starting local in-memory database...");
    const mongoServer = await MongoMemoryServer.create();
    mongoUrl = mongoServer.getUri();
  }
  await mongoose
    .connect(mongoUrl)
    .then(async () => {
      console.log("DB Connected to " + (process.env.MONGO_URL ? "external URL" : "in-memory database"));
      try {
        const count = await foodModel.countDocuments();
        if (count === 0) {
          console.log("Database is empty. Seeding initial food items...");
          await foodModel.insertMany(initialFoods);
          console.log("Seeding completed successfully!");
        }
      } catch (error) {
        console.error("Seeding error:", error);
      }
    })
    .catch(async (err) => {
      console.error("Failed to connect to primary MONGO_URL:", err.message);
      console.log("Falling back to local in-memory database...");
      try {
        const mongoServer = await MongoMemoryServer.create();
        const fallbackUrl = mongoServer.getUri();
        await mongoose.connect(fallbackUrl);
        console.log("DB Connected to in-memory database fallback");
        const count = await foodModel.countDocuments();
        if (count === 0) {
          console.log("Database is empty. Seeding initial food items...");
          await foodModel.insertMany(initialFoods);
          console.log("Seeding completed successfully!");
        }
      } catch (fallbackErr) {
        console.error("In-memory database connection error:", fallbackErr);
      }
    });
};
