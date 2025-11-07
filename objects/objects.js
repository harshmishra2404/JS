const obj1 = {
    name : "Harsh",
    age : 25,
    location : "India",
    greet :function(){
        console.log("Hello Everybody!!",  this.name);
    }
    isLoggedIn : true
}
console.log(obj1.isloggedIn);
console.log(obj1.name);
obj1.greet()