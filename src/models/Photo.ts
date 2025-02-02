import mongoose, { Schema, Document } from "mongoose";

interface IPhoto extends Document {
  id: number;
  src: string;
  alt: string;
  likes: number;
}

const PhotoSchema = new Schema<IPhoto>({
  id: { type: Number, required: true, unique: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

export default mongoose.models.Photo || mongoose.model<IPhoto>("Photo", PhotoSchema);
