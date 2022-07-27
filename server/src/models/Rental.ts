import mongoose, { Document, Schema } from 'mongoose';
import { IBook } from './Book';
import { IClient } from './Client';

export interface IRental {
    startDate: string;
    endDate: string;
    client: IClient;
    books: IBook[];
}

export interface IBookModel extends IRental, Document {}

const BookSchema: Schema = new Schema(
    {
        startDate: { type: String, required: true },
        endDate: { type: String, required: true },
        client: { type:  Schema.Types.ObjectId, required: true, ref: 'Client' },
        books: [{ type: Schema.Types.ObjectId, required: true, ref: 'Book' }],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Rental', BookSchema,'rentals');