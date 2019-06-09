function titleCase(str) {
    let ar = str.split(' ');
    let arr = ar.map((e)=>e.split(''));
    console.log(arr);
    // let res = ar.map((e)=>{
    //   if(e[0]>='A'&&e[0]<='Z')
    //   {
    //     //do nothing
    //   }
    //   else{
    //     e[0]=e[0]-'a'+'A';
    //   }
  
    //   for(let i =1;i<e.length;i++)
    //   {
    //     if(e[i]>='A'&&e[i]<='Z')
    //       e[i]=e[i]+'a'-'A';
    //   }
    //   return e;
    // })
    console.log(ar);
    // console.log(res);
    return str;
  }
  
  titleCase("I'm a little tea pot");