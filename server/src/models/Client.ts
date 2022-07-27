import mongoose, { Document, Schema } from 'mongoose';

export interface IClient {
    name: string;
    adress: string;
    phoneNumber: number;
    city:string; 
}

export interface IBookModel extends IClient, Document {}

const BookSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        adress: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
        city: { type: String , required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Client', BookSchema,'clients');