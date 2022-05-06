function adding_new_score(a){
    this.scores.aljebre=a
    return this
}
console.log(adding_new_score.call({
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
    scores: { english: 10, math: 19.5, physics: 14 },
    },16))
    function adding_new_role(b){
        this.age=b
        if (b<=18){
        this.roles[2]='very young'}
        else {this.role[2]='young'}
        return this
    }
    console.log(adding_new_role.call({
        id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
        scores: { english: 10, math: 19.5, physics: 14 },
        },14))
function converting_array_to_obj(){
   let arr= Object.entries(this)
   arr[length+1]=['father','ali']
   let newobj={}
   arr.forEach((item)=>{
      return newobj[item[0]]=item[1]
})
    return newobj  
}
console.log(converting_array_to_obj.call({
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age: 19,
    scores: { english: 10, math: 19.5, physics: 14 }}
    ))
