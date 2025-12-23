import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const loginSchema = new mongoose.Schema(
  {
   name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required:true
    },
    password: {
      type: String,
      required : true
    },
  },
  { timestamps: true }
);

// Instance method: generate a JWT for this user (does not include password)
loginSchema.methods.generateAuthToken = function () {
  const secret = process.env.JWT_SECRET || "Hospitalmanagament";
  const payload = { id: this._id, email: this.email };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

// Hash password before saving
loginSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare provided password with hashed password
loginSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Helper: sign a password value as a JWT and exportable for other modules
export function signPasswordJWT(password, expiresIn = "7d") {
  const secret = process.env.JWT_SECRET || "Hospitalmanagament";
  return jwt.sign({ password }, secret, { expiresIn });
}



export default mongoose.model("Login", loginSchema);
