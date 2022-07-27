import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Rental from '../models/Rental';

const createRental = (req: Request, res: Response, next: NextFunction) => {
    const { startDate ,endDate,client, books } = req.body;

    const rental = new Rental({
        startDate,
        endDate,
        client,
        books
    });

    return rental
        .save()
        .then((rental) => res.status(201).json({ rental }))
        .catch((error) => res.status(500).json({ error }));
};

const getRental = (req: Request, res: Response, next: NextFunction) => {
    const rentalId = req.params.rentalId;
    
    return Rental.findById(rentalId)
        .populate('rental')
        .then((rental) => (rental ? res.status(200).json({ rental }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const getAllRentals = (req: Request, res: Response, next: NextFunction) => {
    return Rental.find()
        .then((rentals) => res.status(200).json({ rentals }))
        .catch((error) => res.status(500).json({ error }));
};

const updateRental = (req: Request, res: Response, next: NextFunction) => {
    const rentalId = req.params.rentalId;

    return Rental.findById(rentalId)
        .then((rental) => {
            if (rental) {
                rental.set(req.body);

                return rental
                    .save()
                    .then((rental) => res.status(201).json({ rental }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteRental = (req: Request, res: Response, next: NextFunction) => {
    const rentalId = req.params.rentalId;

    return Rental.findByIdAndDelete(rentalId)
        .then((rental) => (rental ? res.status(201).json({ rental, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createRental, getRental, getAllRentals, updateRental, deleteRental };