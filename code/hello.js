function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        //image.parentNode.replaceChild(text, image);
		image.parentNode.appendChild(text);
      }
    }
  }
 
 
function showHide(x) {
  //var x = document.getElementById(el)[0];
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function replaceButtonText(buttonId, text_show, text_hide)
{
  if (document.getElementById)
  {
    var button=document.getElementById(buttonId);
    if (button)
    {
      if (button.childNodes[0])
      {
        if (button.childNodes[0].nodeValue==text_show)
		{
			button.childNodes[0].nodeValue=text_hide;
		}
		else
		{
			button.childNodes[0].nodeValue=text_show;
		}
      }
      else if (button.value)
      {
		if (button.value==text_show)
		{
			button.value=text_hide;
		}
		else
		{
			button.value=text_show;
		}
        //button.value=text;
      }
      else //if (button.innerHTML)
      {
		if (button.innerHTML==text_show)
		{
			button.innerHTML=text_hide;
		}
		else
		{
			button.innerHTML=text_show;
		}
        //button.innerHTML=text;
      }
    }
  }
}


function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
      if (typeof child != "string") node.appendChild(child);
      else node.appendChild(document.createTextNode(child));
    }
    return node;
  }
//console.log(talksAbout(document.body, "book"));
// → true
//alert("hello World 2!")

//alert(talksAbout(document.body, "book"));