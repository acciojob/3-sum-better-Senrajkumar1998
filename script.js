function threeSum(arr, target) {
// write your code here
	let arr={-1 2 1 -4}
let target=1;
	let n=arr.length;
	let initialDiff=Infinity;
	let ans=-1;
	for (let i = 0; i <=n-3; i++) {
		for (let j = i+1; j <=n-2; j++){
			for (let k = j+1; k <=n-1; k++) {
				let sum= arr[i]+arr[j]+arr[k];
				let diff=Math.abs(sum-target);
				if(initialDiff >diff){
					ans=sum;
				}
			}
		}
		
	}
	console.log(ans);
  
}


