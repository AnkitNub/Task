require("../src/db/mongoose")
const User = require("../src/models/user")

// User.findByIdAndUpdate('6193a0ac70930f89f0cf205a',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const ageupdateandcount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

ageupdateandcount("619377f88d743eeb07a9b579" , 19).then((count)=>{
console.log(count)
}).catch((e)=>{
    console.log(e)
})