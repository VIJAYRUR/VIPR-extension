var temp = "";
var output = ``;

function oncha(val) {
  temp = val;
}


//Event Listeners for the function

var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",oncli);

var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copy);

var inputText = document.getElementById("inputBox");
inputText.addEventListener("change",(e)=>{
    oncha(e.target.value);
});

var showText = document.getElementById("outButton");
showText.addEventListener("click",show);

//

function show(){
  document.getElementById("OutputContainer").innerHTML = `<Textarea class="form-control container" rows = "5">${output}</Textarea>`;

}

function oncli() {
  var buttonText = document.getElementById("copyButton").innerText = "Copy";
  var submitText = document.getElementById("submitButton").innerText = "Removed Comments!";

  output = "";
  removeComment();
}


function lines(text) {
  return text.split('\n');
}

//Function to removeComments
var ch = [];

function removeComment() {
  var clang=false;
  var strings = temp.split('\n');
  console.log(temp.split('\n'));
  strings.forEach(element => {
    var n = element.length;
  
    var check = false;
    if (element.includes("//")) {
      n = element.indexOf("//");
      check = true;
    }

    if(element.includes("#include")){
      clang= true;
    }

    if (element.includes("#include") == false && element.includes("#") ){
      temp=n
      n=element.indexOf('#')
      check = true;
      if(element.indexOf("\"")>=0){
        if(element.indexOf("#")>element.indexOf("\"")){
          check=false;
          n=temp;
        }
      }
    }

    outputTest = element.substring(0, n);
    if(check == false){
        output+=outputTest;
        output += "\n"
      }
    else if(check==true && outputTest.trim().length!=0){
      output+=outputTest;
        output += "\n"
    }
    }
    

    
    
  
  );
  console.log(ch);
  strings = output.split('\n');
  output = "";
  var result = [];
  var check = false;
  var count = 0;
  var multipy = 0;
  strings.forEach(element => {
    if (element.includes("\"\"\"") || element.includes("\'\'\'")) {
      multipy = multipy + 1;
        check = true;
      
      if(multipy==1){
        if(element.includes("\"\"\"")){
          output+=element.substring(0,element.indexOf("\"\"\""))
          output+='\n'
        }
        else{
          output+=element.substring(0,element.indexOf("\'\'\'"))
          output+='\n'
        }
      count=0
      }
      else {
        if(element.includes("\"\"\"")){
          output+=element.substring(element.indexOf("\"\"\"")+3,element.length)
          output+='\n'
        }
        else{
          output+=element.substring(element.indexOf("\'\'\'")+3,element.length)
          output+='\n'
        }
        check = false;
        count = 1;
        multipy = 0;
      }
    }
  
    if (element.includes("/*")) {
      output+=element.substring(0,element.indexOf("/*"))
      check = true;

    }
    if (element.includes("*/")) {
      output+=element.substring(element.indexOf("*/")+2,element.length)
      check = false;
      count = 1
    }

    if (check == false && count == 0) {
      result.push(element);
      output += element;
      output += "\n";

    }
    else {
      count = 0;
    }
  }
  );
}

function copy() {

  navigator.clipboard.writeText(output);
  console.log("Done!");
  var buttonText = document.getElementById("copyButton").innerText = "Copied!";
}