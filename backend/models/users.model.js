module.exports = mongosee => {
    const schema = new mongosee.Schema(
        {
            email: { type: String, unique: true },
            password: { type: String, required: true }
        }, {
        timeStamp: true
    }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id

        return object;
    })

    return mongosee.model('users', schema);
}