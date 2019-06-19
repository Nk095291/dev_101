let animals =['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
function read(ar){
    return ar.map((e)=>e[0]).join('');
}
console.log(read(animals));