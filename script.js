let center=document.querySelector(".center");
let str = document.querySelector(".star");
let head = document.querySelector(".top");
let thank = document.querySelector(".para");
let buttons = document.querySelector(".btns");
let button = document.querySelectorAll(".btn");
let end = document.querySelector(".submit");
let img=document.querySelector("img");
let ans;
// run function 
function run() {
    // Change the image
    img.setAttribute("src","images/illustration-thank-you.svg")

    // Adding img class to star element
    str.classList.add("img")

    // Removing margin-left from star
    str.style.marginLeft="0";
    // Removing the background circle from star
    str.style.width="0";

    // Removing margin-left from top element
    head.style.marginLeft="0";

    // New Element p name para 
    let para = document.createElement("p");
    para.innerText = " We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"

    // Creating New Element h1 name heading 
    let heading = document.createElement("h1");

    // changing inner Text of para to conver it from p to h1
    thank.innerHTML="<h1>Thank you! </h1>"

    // Changing the center class
    center.classList.add("home");
 
    // adding para in place of button   
    thank.append(para);
    thank.style.marginLeft="0";
 
    // removing buttons and submit element
    buttons.remove();
    end.remove();

    // adding class to top element heading
    head.classList.add("mini");
    head.innerText = `You selected ${ans} out of 5`;

}

// for changing color in the buttons
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        ans=button[i].value;
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
// eventListener for submit button this will execute the run function which the submit button will be clicked
end.addEventListener("click", run);
