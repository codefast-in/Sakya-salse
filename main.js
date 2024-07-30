let conForm = document.querySelector("form");

conForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cname = document.getElementById("name").value;
  let contact = document.getElementById("cContact").value;
  let email = document.getElementById("email").value;
  let companyName = document.getElementById("companyName").value;
  let message = document.getElementById("message").value;
  //   emailBody =
  //     "Name - " +
  //     cname +
  //     "<br/> Contact - " +
  //     contact +
  //     "<br/> Email -" +
  //     email +
  //     "<br/> Company Name - " +
  //     companyName +
  //     "<br/> Message - " +
  //     message;
  //   console.log(emailBody);

  emailjs
    .send("service_1m3yw4k", "template_qhrp30w", {
      name: cname,
      email: email,
      contact: contact,
      cName: companyName,
      messageBody: message,
    })
    .then((message) => alert("We Recived Your Message."));
});
