alert("Hello, I am your pet Iris");
var clientWindowHeight = document.body.clientHeight;


//Resize the pet
function resizeIris(){
    //GET THE HEIGHT OF WINDOW
    
    let irisHeight = (clientWindowHeight - 100) * 0.6;
    
    //改变外链CSS的方法1：改变相应id的类且css是类选择器的
    // document.getElementById("iris_image").className = "style2";

    //方法2：直接创建一个新的css外链，通过id改变src
    document.getElementById('css1').href="./irisTalk2.css";  
   
    document.getElementById("iris_image").height = irisHeight; 
    // console.log(document.getElementById("iris_image").height); // Check it 

}

// console.log();
function touchIris(){
    let username=prompt("Tell me your name", "Enter it");
    // let irisOriginal = document.getElementById("iris_image").height;
    //BUG:this let cannot be read in setTimeout
    // console.log(irisOriginal);
    // let irisBiggerHeight = (clientWindowHeight - 100) * 0.9;

    
    if(username){
      
        alert('Nice to meet you, ' + username + '.');
        document.getElementById("iris_image").src = "./iris_smile.jpg";
        // document.getElementById("iris_image").height = irisBiggerHeight;
        setTimeout("document.getElementById('iris_image').src= './iris_icon.jpg'",1000);
        //document.getElementById('iris_image').height =irisOriginal;//doesn't work
        // setTimeout("document.getElementById('iris_image').height = this.irisOriginal",1000);
    }
}