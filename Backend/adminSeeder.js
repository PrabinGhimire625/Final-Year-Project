import User from "./models/userModel.js";
import bcrypt from "bcrypt";

const adminSeeder = async () => {
    try {
        // Use findOne to locate an existing admin by email
        const existingAdmin = await User.findOne({ email: "prabinghimire625@gmail.com" });

        if (!existingAdmin) {
            // Create the admin if no existing record is found
            await User.create({
                username: "prabin",
                email: "prabinghimire625@gmail.com",
                password: bcrypt.hashSync("prabin", 10),
                citizenshipNumber: "No needed",
                dob: new Date("2040-01-02"), // Proper date format
                role: "admin"
            });
            console.log("Admin credentials seeded successfully!");
        } else {
            console.log("Admin credentials already exist. Skipping seed.");
        }
    } catch (error) {
        console.error("Error seeding admin credentials:", error);
    }
};

export default adminSeeder;
