class User {
    constructor(nickName, password) {
        this.nickName = nickName;
        this.password = password;
        this.quest = false
    }

    isGuest() {
        return this.quest;
    }
}

export default User;