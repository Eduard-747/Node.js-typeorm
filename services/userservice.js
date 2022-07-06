const typeorm = require('../database/typeorm');
const usermodel = require('../database/model/usermodel');

class UserService {

    constructor() {
    }
    
    static async getUser (code) {
        
        let result = await typeorm.connection
        .getRepository(usermodel)
        .createQueryBuilder("my_db")
        .where("my_db.ID = :ID", { ID : code })
        .getOne();
        console.log(result);

        if (!result) {           
            throw new Error('Error get User');
        }

        return result;
    }

    static async insertUser (code) {
        
        let result =  await typeorm.connection
        .createQueryBuilder()
        .insert()
        .into(usermodel)
        .values([
            {ID: code.ID, Name: code.Name, Country: code.Country,
                Email: code.Email, Age: code.Age}, 
        ])
        .execute();
    
        if (!result) {            
            throw new Error('Error insert user');
        }
        
        return result;
    }

    static async modifyUserName (code) {
        
        let result =  await typeorm.connection
        .createQueryBuilder()
        .update(usermodel)
        .set({ Name: code.Name })
        .where("ID = :ID", { ID: code.ID })
        .execute();
    
        if (!result) {
            throw new Error('Error change user name');
        }
        
        return result;
    }

    static async modifyUserEmail (code) {

        let result =  await typeorm.connection
        .createQueryBuilder()
        .update(usermodel)
        .set({ Email: code.Email })
        .where("ID = :ID", { ID: code.ID })
        .execute();
    
        if (!result) {
            throw new Error('change user email');
        }
        
        return result;
    }

    static async modifyUserCountry (code) {

        let result =  await typeorm.connection
        .createQueryBuilder()
        .update(usermodel)
        .set({ Country: code.Country })
        .where("ID = :ID", { ID: code.ID })
        .execute();
    
        if (!result) {
            throw new Error('change user country');
        }
        
        return result;
    }

    static async modifyUserAge (code) {
        
        let result =  await typeorm.connection
        .createQueryBuilder()
        .update(usermodel)
        .set({ Age: code.Age })
        .where("ID = :ID", { ID: code.ID })
        .execute();
    
        if (!result) {
            throw new Error('Error change user age');
        }
        
        return result;
    }

    static async deleteUser (code) {
        
        let result =  await typeorm.connection
        .createQueryBuilder()
        .delete()
        .from(usermodel)
        .where("ID = :ID", { ID: code })
        .execute();
    
        if (!result) {
            throw new Error('Error delete user');
        }
        
        return result;
    }
}

module.exports = UserService;
