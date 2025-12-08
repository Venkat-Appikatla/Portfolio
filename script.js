// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll(".nav-link");
//   const sections = document.querySelectorAll("section");
//   const navList = document.querySelector(".nav-list");
//   const navToggle = document.getElementById("navToggle");
//   const form = document.getElementById("contactForm");
//   const formStatus = document.getElementById("formStatus");

//   // Mobile nav toggle
//   if (navToggle) {
//     navToggle.addEventListener("click", () => {
//       navList.classList.toggle("show");
//     });
//   }

//   // Smooth scroll & active link highlight
//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       const targetId = link.getAttribute("href").substring(1);
//       const target = document.getElementById(targetId);

//       if (target) {
//         const offset = document.querySelector(".header").offsetHeight;
//         const targetPosition =
//           target.getBoundingClientRect().top + window.pageYOffset - offset;

//         window.scrollTo({ top: targetPosition, behavior: "smooth" });

//         // Close mobile menu
//         navList.classList.remove("show");
//       }
//     });
//   });

//   // Change active nav link on scroll
//   window.addEventListener("scroll", () => {
//     let current = "";

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop - 80;
//       if (pageYOffset >= sectionTop) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href") === `#${current}`) {
//         link.classList.add("active");
//       }
//     });
//   });

//   // Contact form - send via mailto (simple for static site)
//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const message = document.getElementById("message").value.trim();

//       if (!name || !email || !message) {
//         formStatus.textContent = "Please fill in all fields.";
//         formStatus.style.color = "#fca5a5";
//         return;
//       }

//       // Change this to your real email
//       const toEmail = "youremail@example.com";

//       const subject = encodeURIComponent(
//         `Portfolio Contact from ${name}`
//       );
//       const body = encodeURIComponent(
//         `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//       );

//       window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;

//       formStatus.textContent =
//         "Your email app will open. Please confirm and send.";
//       formStatus.style.color = "#bbf7d0";

//       form.reset();
//     });
//   }
// });


// Contact form - send via Formspree
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    formStatus.textContent = "Sending...";
    formStatus.style.color = "#facc15";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "#22c55e";
        form.reset();
      } else {
        formStatus.textContent = "Oops! Something went wrong.";
        formStatus.style.color = "#f87171";
      }
    } catch (error) {
      formStatus.textContent = "Network error. Please try again.";
      formStatus.style.color = "#f87171";
    }
  });
}
