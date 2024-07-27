exports.simpleGet = async (req,res)=>{
    res.status(200).json({"message":"Response from method"})
}

exports.simplePost = async (req,res)=>{
//    logic here
}

exports.simplePut = async (req,res)=>{
    res.status(200).json({"message":"Response from PUT method"})
}
exports.simpleDelete = async (req,res)=>{
    res.status(200).json({"message":"Response from DELETE method"})
}

