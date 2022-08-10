import express from "express";

import {
  getData,
  createUser,
  deleteUser,
  updateUser,
  getSingleData,
} from "../controllers/user.js";
// import auth from "../middleware/auth.js";
import { uploadBulkUser } from "../controllers/bulkUserExcel.js";
const router = express.Router();

// we need user token and the id for all auth routes
router.get("/", getData); // to get all teachers data
router.post("/create", createUser); // to create new user
router.delete("/:id", deleteUser); // to delete user
router.patch("/:id", updateUser); // to update user info
router.get("/single", getSingleData);

export default router;
