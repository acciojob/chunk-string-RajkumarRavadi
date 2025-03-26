function stringChop(str, size) {
  //base case
	let chunks = [];
	if(str == null){
		return chunks;
	}

	for(int i=0; i<str.length; i=i+size){
		chunks.push(str.slice(i, size));
	}

	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
