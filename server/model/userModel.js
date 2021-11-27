import mongoose from 'mongoose';

const userDataModel = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
})

const UserModel = mongoose.model('user', userDataModel)

export default UserModel;