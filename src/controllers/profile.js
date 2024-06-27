let profileFun  = (req,res) => {
    const user = {
        name:"Akshay",
        email:"akshay@gmail.com",
        skilss:['php','JavaScript','HTML','Css']
    }
    res.render(`profile`,{user})
}

// exports.profileFun = profileFun;
export default profileFun;