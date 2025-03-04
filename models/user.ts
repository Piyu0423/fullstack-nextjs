import { Schema, model, models, Document, Model } from "mongoose";

interface IUser extends Document {
  email: string;
  username: string;
  image: string;
}

const UserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exist!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});
const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);
export default User;
