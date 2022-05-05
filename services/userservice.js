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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
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
            errors.codeDoesNotExist.attributes[0] = code;
            
            throw new Error(errors.codeDoesNotExist.message, { cause: errors.codeDoesNotExist });
        }
        
        return result;
    }
}

module.exports = UserService;
