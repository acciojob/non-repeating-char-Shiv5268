function firstNonRepeatedChar(str) {
 // Write your code here 
	let ans=null; 
	for (let i=0; i<str.length;i++) {
		if(ans==null)
			ans=str.charAt(i);
		else if(ans==str.charAt(i))
			ans=null;
	}
	return ans;
}
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
