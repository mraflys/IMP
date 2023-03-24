const models = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.getUsers = async(req, res) => {
    let {limit,page} = req.query;
    let offset;

    if ( !limit ){
        limit = 10
    }else{
        limit = parseInt(limit)
    }
    if ( !page ){
        page = 1
        offset = ((parseInt(page)-1)*limit)
    }else{
        offset = ((parseInt(page)-1)*limit)
    }

    try {
        const users = await models.MstUser.findAll({
            attributes:['id','fullname','username'],
            limit:limit,
            offset:offset,
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
exports.Register = async(req, res) => {
    const errors = validationResult(req);
    console.log(errors);
	if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
	}
    const { fullname, username, role_id, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await models.MstUser.create({
            fullname: fullname,
            username: username,
            password: hashPassword,
            role_id: role_id
        });
        res.status(200).json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}
 
exports.Login = async(req, res) => {
    const errors = validationResult(req);
    console.log(errors);
	if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
	}
    try {
        const user = await models.MstUser.findAll({
            where:{
                username: req.body.username
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const fullname = user[0].fullname;
        const username = user[0].username;
        const accessToken = jwt.sign({userId, fullname, username}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        const refreshToken = jwt.sign({userId, fullname, username}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await models.MstUser.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"username tidak ditemukan"});
    }
}
 
exports.Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await models.MstUser.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await models.MstUser.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200).json({msg: "Logout Berhasil"});
}