let fs = require('fs');
let _ = require('lodash');
let datas = JSON.parse(fs.readFileSync(`${process.cwd()}/friends.json`)).friends;
function Friend(){
    function getAllFriends(){
         return datas;
}
       
 function getOne(id) {
     return _.find(datas, {'_id': parseInt(id)});
 }
 function post(obj)  
 {
     logger.log(obj);
     let insertObject ={'_id':datas.length +1,'name':obj.name,'email':obj.email};
     datas.push(insertObject);
     let outData =JSON.stringify({"friends":datas});
     fs.writeFileSync(`${process.cwd()}/friends.json`,outData)
 } 
    let that = {};
    that.getAllFriends = getAllFriends;
    that.getOne = getOne;
    that.post = post;
    return that;
    
}

module.exports = Friend;