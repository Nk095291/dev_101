let obj={
    name:"nitin",
    sayhi:function(){
        console.log(this.name);
    }
};
let g = obj.sayhi.bind(obj);
g();