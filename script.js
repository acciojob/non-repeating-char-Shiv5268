function firstNonRepeatedChar(str) {
	let count={};    
    for(let i=0;i<str.length;i++){
		let c=str[i];
        if(count[c])
            count[c]++;
        else
            count[c)]=1;
    }
    for (let i=0;i<str.length;i++) {
       let c=str[i]; 
        if(count[c]===1){  
            return c;
        }
    }
    return null; 
}
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input));  
