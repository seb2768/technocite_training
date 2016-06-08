let fs = require('fs');
let _ =require('lodash');
let datas =JSON.parse(fs.readFileSync(`${process.cwd()}/datas/pages.json`,'utf8'));
function PagesModel(){        
    function searchPageByUrl(urlStr){
       return _.find(datas.pages,{url:urlStr});
    }
    let that={};
    that.searchPageByUrl=searchPageByUrl;

    return that;
}
module.exports=PagesModel;