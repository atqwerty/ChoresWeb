export class User {
    private email: string
    private name: string
    private surname: string
    private password: string

    constructor (email: string, password: string, name?: string, surname?: string) {
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
   }

    public getEmail = () => {
        return this.email
    }

    public getName = () => {
        return this.name
    }

    public getSurname = () => {
        return this.surname
    }
}
