console.log("It is working!");

function doStuff() {
  //go get that CTA button (line 5)
  const cta = document.querySelector(".cta-button");

  // set the display property in style to "NONE" (Hides it) (line 7)
  cta.style.display = "none";

  //create a new paragraph element
  let message = document.createElement("p");

  //add this text inside our new paragraph element
  message.innerHTML = "Your order has been placed!";

  //find the <section> tag, and add to the end our new paragraph
  document.querySelector("section").appendChild(message);
}
