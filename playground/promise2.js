require("../src/db/mongoose")
const Task = require("../src/models/tasks")

// Task.findByIdAndRemove('619365f968bd4792d23b60ba').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const removeandcount = async(id)=>{
    const remove = await Task.findOneAndRemove(id)
    const count = await Task.countDocuments({completed:false})
    return count 
}

removeandcount("619398b66b1198f449163052").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})