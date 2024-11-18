// your code here
document.getElementById("button").addEventListner("click",function(){
	// get the data
	const name = document.getElementById("name");
	const year = document.getElementById("year");

	// update url
	if(name && year){
		const url = `https://localhost:8080/?name=${name}&year=${year}`;
		document.getElementById("url").textContent = url;
	}
	else{
		alert("plase filled all the details");
	}
	
})