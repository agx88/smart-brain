// Switched order to make it work with FOREIGN KEY in login table (email)
const handleRegister = (db, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password) {
        return res.status(400).json('incorrect form submission');
    }
    const hash = bcrypt.hashSync(password);
    //create transaction to keep consistency!
    db.transaction(trx => {
        trx.insert({
            name: name,
            email: email,
            joined: new Date()
        })
            .into('users')
            .returning('*')
            .then(users => {
                let user = users[0];
                return trx('login')
                    .returning('*')
                    .insert({
                        email: user.email,
                        hash: hash,
                    })
                    .then(() => {
                        res.json(user);
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch(err => {
            console.log(err);
            res.status(400).json('unable to register')
        });
}

module.exports = {
    handleRegister
};