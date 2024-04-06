function compareTwoJSONs(obj1,obj2){
    var sortedObj1 = sortObjKeys(obj1);
    var sortedObj2 = sortObjKeys(obj2);
    
    var sortedObjStr1 = JSON.stringify(sortedObj1);
    var sortedObjStr2 = JSON.stringify(sortedObj2);
    
    return sortedObjStr1 === sortedObjStr2;
}
function sortObjKeys(obj){
    var sortedkeys = Object.keys(obj).sort();
    var sortedObj = {};
    for(const key of sortedkeys){
        sortedObj[key] = obj[key];
    }
    return sortedObj;
}
var obj1 = {"name": "Navya", "age":30};
var obj2 = {"age":30, "name": "Navya"};
console.log(compareTwoJSONs(obj1,obj2))