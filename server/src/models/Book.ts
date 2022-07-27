import mongoose, { Document, Schema } from 'mongoose';

export interface IBook {
    title: string;
    author: string;
    publishmentYear: number;
    price:number;
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: Schema.Types.ObjectId, required: true,ref: 'Author' },
        publishmentYear: { type: String, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Book', BookSchema,'books');