let form = document.getElementById("myForm");
let inputs = form.getElementsByTagName("input");
if( localStorage.length-1 > 0 ){
    for (let i = 0; i < inputs.length-1; i++) {
        inputs[i].value=localStorage.getItem(`${inputs[i].name}`);
     };
}
form.onchange = () => {
    for (let i = 0; i < inputs.length-1; i++) {
        localStorage.setItem(`${inputs[i].name}`,`${inputs[i].value}`);
    }};
    let check = document.getElementsByClassName("check")
    for (let i= 0; i < check.length; i++) {
    if (check){

    };
};
