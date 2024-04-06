window.addEventListener("DOMContentLoaded", (event) => {
  window.parent.addEventListener("initst4", () => {
    window.parent.document.dispatchEvent(new CustomEvent("disablednextbtn"));
  });

  whatsappBtn = document.querySelector("#whatsappbtn");
  emailBtn = document.querySelector("#emailbtn");
  smsBtn = document.querySelector("#smsbtn");

  whatsappBtn.addEventListener("click", () => {
    // Generate notification
    const notification = document.createElement("div");
    notification.classList.add("whatsapp-notification");
    notification.textContent = "Codigo enviado a WhatsApp";
    showNotification(notification);
  });

  emailBtn.addEventListener("click", () => {
    // Generate notification
    const notification = document.createElement("div");
    notification.classList.add("email-notification");
    notification.textContent = "Codigo enviado por Email";
    showNotification(notification);
  });

  smsBtn.addEventListener("click", () => {
    // Generate notification
    const notification = document.createElement("div");
    notification.classList.add("sms-notification");
    notification.textContent = "Codigo enviado por SMS";
    showNotification(notification);
  });

  // se encarga de mostrar la notificacion y activar boton de next
  function showNotification(notification) {
    // Append notification to the body
    document.body.appendChild(notification);
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 1000);
    }, 2000);
    window.parent.document.dispatchEvent(new CustomEvent("activenextbtn"));
  }
});
