export class User {
    firstname: String;
    lastname: String;
    email: String;
    password: String;
    gender: String

    constructor(option: any) {
        this.firstname = option.firstname;
        this.lastname = option.lastname;
        this.password = option.password;
        this.email = option.email;
        this.gender = option.gender;
    }
}