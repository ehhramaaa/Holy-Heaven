const db = require('../models');
const bcrypt = require('bcrypt');
const users = db.users;

exports.create = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Periksa apakah email dan password telah diberikan
        if (!email || !password) {
            return res.status(400).send({ message: 'email dan password harus diisi' });
        }

        // Hash password sebelum menyimpan ke database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat objek User baru
        const newUser = new users({
            email: email,
            password: hashedPassword,
        });

        // Simpan user ke database
        await newUser.save();

        res.status(201).send({ message: 'Pengguna berhasil dibuat' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.find = (req, res) => {
    const id = req.params.id

    users.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(404).send({ message: err.message }));
};

exports.findAll = (req, res) => {
    users.find()
        .then(data => res.send(data))
        .catch(err => res.status(404).send({ message: err.message }));
};

exports.findByEmail = (req, res) => {
    const email = req.body.email;

    users.find({ email: { $eq: email } })
        .then(data => {
            if(data.length > 0){
                res.send(data)
            }else{
                res.send(404)
            }
        })
        .catch(err => res.status(404).send({ message: err.message }))
};

exports.update = (req, res) => {
    const id = req.params.id

    users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data, async () => {
            if (!data) {
                res.status(404).send({ message: `Failed To Update User With Id : ${id}` })
            }

            res.send({ message: `User With Id ${id} Successfully Updated` })
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
    const id = req.params.id
    users.findByIdAndRemove(id)
        .then(data, async () => {
            if (!data) {
                res.status(404).send({ message: `Failed To Delete User With Id : ${id}` })
            }

            res.send({ message: `Successsfully Delete User With Id : ${id}` })

        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.login = (req, res) => {
    const email = req.body.email;

    users.find({ email: { $regex: email, $options: 'i' } })
        .then(data => {
            const { email, password } = req.body;

            if (data[0].email === email && bcrypt.compareSync(password, data[0].password)) {
                res.status(200).send('Login berhasil');
            } else {
                res.status(401).send('Username atau password salah');
            }
        })
        .catch(err => res.status(404).send({ message: err.message }))
};
