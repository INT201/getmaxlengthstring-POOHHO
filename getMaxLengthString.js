const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  
if( arrayOfString == null || arrayOfString == undefined){
  return undefined
}
let str = [...arrayOfString]
let max = 0
let arr
for (let i = 0; i < str.length; i++) {
   if(  str[i].length > max){
        arr = []
        max = str[i].length
   }
   if( str[i].length === max){
      arr.push(str[i])
   }

}
return arr


}
module.exports = getMaxLengthString
