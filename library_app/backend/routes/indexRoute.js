import express from 'express'
import {indexController} from '../controllers/indexController.js'

const route = express.Router();

 route.get('/', indexController)


export default route;