var n=100;
for(var i =2;i<=n;i++)
{
	var flag = false;
	for(var j=2;j*j<i;j++)
	{
		if(i%j==0){
			flag=true;
			break;
		}
	}
	if(flag==false){
		console.log("prime   "+ i);
	}

}