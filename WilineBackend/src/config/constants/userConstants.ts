/* export const GET_ALL_USERS = 'SELECT * FROM "users"'; */
export const GET_SINGLE_USER_BY_UID = 'SELECT * FROM "users" WHERE _id=$1';
export const CREATE_USER =
    'INSERT INTO "users" (firstname, lastname, email, phonenumber) VALUES ($1, $2, $3, $4) RETURNING _id, firstname, lastname, email, phonenumber';
export const UPDATE_USER_BY_UID =
    'UPDATE "users" SET firstname = $1, lastname = $2, email = $3, phonenumber = $4 WHERE _id = $5';
export const DELETE_USER = 'DELETE FROM users WHERE _id = $1';
