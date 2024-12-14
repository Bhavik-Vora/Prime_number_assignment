import express from "express";
import { Primeschema } from "../components/schema.js";
import { NaiveMethod } from "../../Methods/Method1.js";
import SquareRootMethod from "../../Methods/Method2.js";
import SieveMethod from "../../Methods/Method3.js";

const router = express.Router();

const Primemethods = {
  NaiveMethod,
  SquareRootMethod,
  SieveMethod,
};

router.post("/calculate", async (req, res) => {
  if (!req.body) {
    return res.status(411).json({ message: "Body is Missing" });
  }
  try {
    const { start, end, method } = req.body;

    if (!start || !end || !method) {
      res.status(400).json({ message: "In Body something is missing :(" });
    }
    if (start < 1 || end < 1) {
      res.json({
        "message": "No negative value allowed"
      });
    }
    const methodFn = Primemethods[method];
    const starttime = Date.now();
    const Finalresult = methodFn(start, end);
    const execTime = Date.now() - starttime;

    const savedData = await Primeschema.create({
      range: { start, end },
      method,
      result: Finalresult,
      execTime: `${execTime} ms`,
      NumberofPrimes: Finalresult?.length,
    });

    return res.json({ savedData });
  } catch (error) {
    console.log(error);
    return error;
  }
});

export default router;


