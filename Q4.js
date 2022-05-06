function showingHour(date){

    let hour= date.getHours()
    if(hour<=12){
       return hour+'Am'}
    else {
    new_hour= hour-12
    return new_hour + ' Pm'
       }
   
}
console.log(showingHour(new Date()))