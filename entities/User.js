class User {
    constructor(username, firstName, lastName, password) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.quest = false
    }

    getUsername() {
        return this.username;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getPassword() {
        return this.password;
    }

    isGuest() {
        return this.quest;
    }
}

export default User;