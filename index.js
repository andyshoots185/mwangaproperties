// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Simple testimonial slider
const testimonials = [
  {
    text: '"Mwanga Properties helped me find my dream home in Kampala. Their professional approach and attention to detail made the entire process smooth and stress-free."',
    author: "James Mukasa",
    role: "Business Executive",
    avatar: "james.jpg",
  },
  {
    text: '"The construction quality of our office building exceeded expectations. Mwanga Properties delivered on time and within budget. Highly recommended!"',
    author: "Sarah Nakato",
    role: "Company Director",
    avatar: "sarah.jpg",
  },
  {
    text: '"The interior design team transformed our apartment into a beautiful, functional space that reflects our style perfectly. We couldn\'t be happier with the results."',
    author: "David Ochieng",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

let currentTestimonial = 0;
const testimonialElement = document.querySelector(".testimonial-card");

function changeTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  const testimonial = testimonials[currentTestimonial];

  testimonialElement.innerHTML = `
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}">
                </div>
                <p class="testimonial-text">${testimonial.text}</p>
                <h4 class="testimonial-author">${testimonial.author}</h4>
                <p class="testimonial-role">${testimonial.role}</p>
            `;
}

// Change testimonial every 5 seconds
setInterval(changeTestimonial, 5000);

// Form submission
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your inquiry! We will contact you shortly.");
  this.reset();
});
