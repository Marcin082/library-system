import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
    name: string;
    birthYear: number;
}

export interface IBookModel extends IAuthor, Document {}

const BookSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        birthYear: { type: Number},
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IBookModel>('Author', BookSchema,'authors');