console.log("script.js => Starting");

function getLinks() {
	

	let classNameToFind = "product-images-carousel";
	let img_reg = new RegExp("st.mngbcn.com.*?jpg", 'g');
	let content;
	let links;
	let i;
	let resultUl = document.getElementsByClassName(classNameToFind);


	if (resultUl.length == 0) {
		console.log(`script.js => Unable to find class: ${classNameToFind}`);

	} else {
		 console.log(`script.js => Found class: ${classNameToFind}`)
		 content = resultUl[0].innerHTML;
		 links = content.match(img_reg);
		 i;
		 for (i=0; i<links.length;i++)  {
			links[i] = "http://" + links[i];
		 }
		console.log(`script.js => Got ${i} links`);
		console.log(links);
	}

	return links;
}






getLinks();