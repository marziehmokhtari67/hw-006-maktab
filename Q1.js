function accumulatingArray(array){
   let newArray=[]
   let sum=0
    array.forEach(item => {sum+=item;return newArray.push(sum)
      
    });
    
  
    
  return newArray  
}
console.log(accumulatingArray([1,2,3,4]))