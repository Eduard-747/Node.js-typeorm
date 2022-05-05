const router = require("express").Router();
const UserService = require("../services/userservice");

// postman code example http://localhost:3034/modify?id=4
router.get("/getUser",( async (req,res) => {
    try {
        let result = await UserService.getUser(req.query.id);        
        return res.status(200).json(result);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

router.post("/createUser", ( async (req,res) => {
    try {
        let result = await UserService.insertUser(req.body);
        return res.status(200).json(`Ok you insert user`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

router.put("/updateUserName", ( async (req,res) => {
    try {
        let result = await UserService.modifyUserName(req.body);
        return res.status(200).json(`Ok you modyfy user Name`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

router.put("/updateUserEmail", ( async (req,res) => {
    try {
        let result = await UserService.modifyUserEmail(req.body);
        return res.status(200).json(`Ok you modyfy user Email`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

router.put("/updateUserCountry", ( async (req,res) => {
    try {
        let result = await UserService.modifyUserCountry(req.body);
        return res.status(200).json(`Ok you modyfy user Country`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

router.put("/updateUserAge", ( async (req,res) => {
    try {
        let result = await UserService.modifyUserAge(req.body);
        return res.status(200).json(`Ok you modyfy user Age`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

// postman code example http://localhost:3034/deleteUser?id=4
router.delete("/deleteUser", ( async (req,res) => {
    try {
        let result = await UserService.deleteUser(req.query.id); 
        
        return res.status(200).json(`Ok you delete user`);
    } catch(error) {
        return res.status(400).json(error.message);
    }
}));

module.exports = router;