const { Schema,model } =require('mongoose')

const UserSchema = new Schema( {
        name :{
            type : String,
            required:true
        },
        email : {
            type:String,
            required:true,
            unique:true
        },
        password : {
            type:String,
            required:true
        }
    },{timestamps:true})

    const Forms = model("User", UserSchema)

module.exports={
    Forms
}