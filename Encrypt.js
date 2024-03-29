const bcrypt = require('bcrypt');

class Encrypt {
    constructor() {
        this.saltRounds = 10;
    };

    hash(password) {
        return bcrypt.hashSync(password, this.saltRounds);
    };

    compare(testPassword, hash) {
        return bcrypt.compareSync(testPassword, hash) 
    }

};

export default Encrypt;