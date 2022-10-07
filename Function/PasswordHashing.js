const bcrypt = require('bcryptjs')
const hashing= async(value)=>{
    try{
        const salt= await bcrypt.genSalt(10);
        const hash= await bcrypt.hash(value,salt);
        return hash
    }
    catch(error){
        return error;
    }
}

const hashcompare=async(value,hash)=>{
    try {
        return await bcrypt.compare(value,hash)
    } catch (error) {
       return error 
    }
}

module.exports={hashing,hashcompare}