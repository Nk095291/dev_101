let cap ={
    name:"nitin",
    getname:()=>{return this.name},
    getg:function(){
        console.log(this);
    }
}
console.log(cap.getname());
// console.log(global);
// console.log(this)
// console.log("-------------------------------------------");
// cap.getg();