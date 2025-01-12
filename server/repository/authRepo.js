import db from "../database/db.js";
import AppError from "../error/AppError.js";
import bcrypt from "bcryptjs"
const addDonor = async (name, age, bloodGroup, city, email, password,  lastDonationDate, role, state, address, phone, previousDonations) => {
    const hashedPassword = await bcrypt.hash(password,10);
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        const [existingDonor] = await conn.execute(
            `SELECT * FROM users WHERE email = ? AND role = ?`,
            [email, role]
        );
        if (existingDonor.length > 0) {
            return "User already exists";
        }
        const [result] = await conn.execute(
            `INSERT INTO users (name, email, password, phone, role, state, city, address)
VALUES (?,?,?,?,?,?,?,?)`,
            [name, email, hashedPassword, phone, role, state, city, address]
        );
        const [donor] = await conn.execute(
            `INSERT INTO donors (user_id, age, blood_group, last_donation_date, total_donations)
            VALUES (?,?,?,?,?)`,
            [result.insertId, age, bloodGroup, lastDonationDate, previousDonations]
        );
        await conn.commit();
        console.log("Donor added successfully!");
        return donor.insertId;
    } catch (error) {
        await conn.rollback();
        console.error("Error adding user:", error);
        throw new AppError("Error adding user:", 400);
    }
    finally {
        conn.release();
    }

}
const addRequester = async (name, city, email, password, role, state, address, phone) => {
    const hashedPassword = await bcrypt.hash(password,10);
    const conn = await db.getConnection();
    try {
        await conn.beginTransaction();
        const [result] = await conn.execute(
            `INSERT INTO users (name, email, password, phone, role, state, city, address)
VALUES (?,?,?,?,?,?,?,?)`,
            [name, email, hashedPassword, phone, role, state, city, address]
        );
        await conn.commit();
        console.log("Requester added successfully!");
        return result.insertId;
    }
    catch (error) {
        await conn.rollback();
        console.error("Error adding user:", error);
        throw new AppError("Error adding user:", 400);
    }
    finally {
        conn.release();
    }
}
const login = async (email, password, role) => {
    const conn = await db.getConnection();
    try {
        const [user] = await conn.execute(
            `SELECT * FROM users WHERE email =? AND role =?`,
            [email,role]
        );
        if (user.length === 0) {
            throw new AppError("Invalid credential", 401);
        }
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            throw new AppError("Invalid email or password", 401);
        }
        return user[0];
    } catch (error) {
        console.error("Error logging in:", error);
        throw new AppError("Error logging in", 500);
    } finally {
        conn.release();
    }
}

export default {
    addDonor,
    addRequester,
    login
}