
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function jumpFloor(number)
{
	// write code here
	if(number<=0){
		return 1;
	}
	if(number===1 || number===2){
		return number;
	}
	let result=[1,2];
	for(let i=2;i<number;i++){
		result[i]=result[i-1]+result[i-2];
	}
	return result[number-1];
}