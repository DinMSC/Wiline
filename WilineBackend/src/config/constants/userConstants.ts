/* export const GET_ALL_USERS = 'SELECT * FROM "users"'; */
export const GET_SINGLE_USER_BY_UID = 'SELECT * FROM "users" WHERE uid=$1';
export const CREATE_USER =
    'INSERT INTO "users" (uid ,firstname, lastname, email, phonenumber) VALUES ($1, $2, $3, $4, $5) RETURNING _id, uid, firstname, lastname, email, phonenumber';
export const UPDATE_USER_BY_UID =
    'UPDATE "users" SET firstname = $1, lastname = $2, email = $3, phonenumber = $4 WHERE uid = $5';
export const DELETE_USER = 'DELETE FROM users WHERE uid = $1';
