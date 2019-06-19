let obj={
    step:0,
    up:function(){
        this.step++;
        return this;
    },
    down:function(){
        this.step--;
        return this;
    },
    showstep:function(){
        console.log(this.step);
        return this;
    }
};
obj.up().up().up().up().down().down().showstep();