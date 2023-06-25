document.write("hello world");

class User {
    _name : string;
    email: string ;
    constructor(name : string, email : string) {
        this._name = name;
        this.email = email;
    }

    set name(newName : string) {
        this._name = newName;
    }
}

const user4 = new User("marta", "mark@mail.com");

const user3 = new User("marks", "marks@mail.com");

