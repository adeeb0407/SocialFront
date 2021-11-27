import express from "express"
import {loginUser, createUser, getUser} from "../controller/userControl.js"

const router = express.Router()

router.post('/login', loginUser)
router.get('/login/details', getUser)
router.post('/register', createUser)

export default router