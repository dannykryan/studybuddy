import { pool } from "../index.js";

async function getUserById(userId) {
  try {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [userId],
    };
    const result = await pool.query(query);
    console.log("User:", result.rows[0]);
    return result.rows[0]; // Assuming the query returns one user
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

await getUserById(1);
