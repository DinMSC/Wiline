export const GET_ALL_USERS = 'SELECT * FROM "users"';
export const GET_SINGLE_USER_BY_ID = 'SELECT * FROM "users" WHERE _id=$1';
export const CREATE_USER =
  'INSERT INTO "users"  (firstname,lastname,email,phonenumber) VALUES ($1, $2, $3, $4) RETURNING _id, firstname,lastname,email,phonenumber';
