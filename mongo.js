import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

// person scheme
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

// create new person
const person = new Person({
  name: "Test Person 3",
  number: "111-111111",
});

// save person to database
// person.save().then((res) => {
//   console.log("Person saved");
//   mongoose.connection.close();
// });

Person.find({}).then((res) => {
  res.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
});
