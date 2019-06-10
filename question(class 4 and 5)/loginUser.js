let obj ={
    name:"nitin",
    loginOk:function(){console.log(`${this.name} logged in`)},
    loginFail:function(){console.log(`${this.name} is failed`)}
};
let check=(a,b,p)=>{
    p=='pep'?a():b();
}
check(obj.loginOk.bind(obj),obj.loginFail.bind(obj),process.argv[2]);