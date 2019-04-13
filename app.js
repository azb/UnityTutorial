
let lastPage = instructions.length;

let page = lastPage;

let newStr = ``;

let videoDiv = $("#videos");

for(let i = 0 ; i < videoFiles.length ; i++)
	{
	if (videoFiles[i]!="")
		{
		newStr = `
		<video height="500" controls> //autoplay loop
		<source src="${videoFiles[i]}" type="video/mp4">
		Browser doesn't support video
		</video><br>
		`
		}
	else
		{
		newStr = ``;
		}
	
	let newVideoDiv = $(`<div id="TutorialImage${i}">`);

	newVideoDiv.append(newStr);

	if (i!=0)
	newVideoDiv.hide();

	videoDiv.append(newVideoDiv);
	}

UpdateInstructions();
EnableDisablePrevNextButtons()

//$("#PrevPage").hide();

function PrevPage()
	{
	page--;
	console.log("PrevPage: "+page);

	UpdateInstructions();
	EnableDisablePrevNextButtons();
	}

function NextPage()
	{
	page++;
	console.log("NextPage: "+page);

	UpdateInstructions();
	EnableDisablePrevNextButtons();
	}
	
function EnableDisablePrevNextButtons()
{
	if (page === 1) {
		$("#PrevPage").prop('disabled' , true);
	}
	else {
		$("#PrevPage").prop('disabled' , false);
	}
	
	if (page === lastPage) {
		$("#NextPage").prop('disabled' , true);
	}
	else {
		$("#NextPage").prop('disabled' , false);
	}
}
	
function UpdateInstructions() 
	{
	$("#PartTitle").text("Page "+page+" / "+lastPage);

	for(let i = 0 ; i < videoFiles.length ; i++)
		{
		$(`#TutorialImage${i}`).hide();
		}
	
	if (videoFiles[page-1] != "")
		{
		$(`#TutorialImage${page-1}`).show();
		}
	
	console.log("UpdateImage() "+videoFiles[page-1]);
	
	$("#TutorialImage").attr("src", videoFiles[page-1]);
	
	$("#Instructions").html(instructions[page-1]);
	}
