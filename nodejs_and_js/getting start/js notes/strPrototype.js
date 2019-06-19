String.prototype.replaceAt=function(i,{length},after)
{
    return this.slice(0,i)+after + this.slice(length+i); 
}
console.log('this is just for testing'.replaceAt(0,'this','after'));
// let ar='this is just for testing';
// console.log(ar.splice(ar.indexOf('this'),1,'after'))