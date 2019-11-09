export class User {
    private id: string
    private email: string
    private name: string
    private surname: string
    private password: string

    constructor (id: string, email: string, password: string, name?: string, surname?: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.password = password;
   }

   public getId = () => {
       return this.id
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
