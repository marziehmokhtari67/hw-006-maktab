function average(array){
   let MultipledWeight_by_number= array.reduce((acc,item,index)=>{return acc+(item*(index+1))},0)
   let totalWeight= array.reduce( (acc,item)=>{return acc+item},0 )
   let Ave_rating=(MultipledWeight_by_number/totalWeight)

   let str="["+ Ave_rating.toFixed(2) + "]" + " "
 for(let i=1; i<Math.round(Ave_rating)+1 ;i++){
    str+="*"
 }

return str

}
console.log(average([0,2,0,1,23]))