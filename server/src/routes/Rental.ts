import express from 'express';
import controller from '../controllers/Rental';

const router = express.Router();

router.post('/create',  controller.createRental);
router.get('/get/:rentalId', controller.getRental);
router.get('/get/', controller.getAllRentals);
router.patch('/update/:rentalId', controller.updateRental);
router.delete('/delete/:rentalId', controller.deleteRental);

export = router;