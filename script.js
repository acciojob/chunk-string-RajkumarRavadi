function stringChop(str, size) {
  //base case
	let chunks = [];
	if(!str){
		return chunks;
	}

	// Ensure size is an integer
  size = parseInt(size, 10);

	for(let i=0; i<str.length; i=i+size){
		chunks.push(str.slice(i, i+size));
	}

	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
