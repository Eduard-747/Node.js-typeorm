const EntyitySchema = require('typeorm').EntitySchema

const usermodel = require('../model/usermodel');

module.exports = new EntyitySchema({
    tableName: 'my_db',
    target: usermodel,
    columns: {
        ID: {
            primary: true,
            name: 'ID',
            type: 'int',
            unique: true
        },
        Name: {
            name: 'Name',
            type: 'varchar',
        },
        Country: {
            name: 'Country',
            type: 'varchar',
        },
        Email: {
            name: 'Email',
            type: 'varchar',
        },
        Age: {
            name: 'Age',
            type: 'varchar',
        }
    }
});
