// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText = "";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
              
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function load_poem(file, title) 
{
	var poem = readTextFile("poems/" + file + ".txt");
	const myArray = poem.split("\n");
	poem = myArray.join("<br>");
	title = "<h1>" + title + "</h1>"; 
    	document.getElementById("poem").innerHTML = title + "<br><br>" + poem;	
}
