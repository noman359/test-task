export interface userDto {
    name: String,
    phone_number: String,
    email: String,
    password: String,
    confirm_password: String
}

export interface loginDto {
    email: String,
    password: String
}