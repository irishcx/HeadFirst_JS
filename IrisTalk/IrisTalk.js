alert("Hello, I am your pet Iris");
console.log(document.getElementById("iris_image").naturalWidth);
console.log(document.getElementById("iris_image").naturalHeight);
function touchIris(){
    var username=prompt("Tell me your name", "Enter it");
    if(username){
        alert('Nice to meet you, ' + username + '.');
        document.getElementById("iris_image").src = "./iris_smile.jpg";
    }
}