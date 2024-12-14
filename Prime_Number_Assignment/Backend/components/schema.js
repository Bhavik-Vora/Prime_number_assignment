import mongoose from "mongoose";

export const ConnectDb = () => {
  const mongoUrl = "mongodb://127.0.0.1:27017/prime_temp";
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};

const numSchema = new mongoose.Schema(
  {
    range: {
      start: { type: Number, required: true },
      end: { type: Number, required: true },
    },
    method: {
      type: String,
      require: true,
    },
    result: { type: [Number], require: true },
    execTime: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    NumberofPrimes: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Primeschema = mongoose.model("Primeschema", numSchema);
