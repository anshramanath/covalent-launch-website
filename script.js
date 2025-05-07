document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-in")
  const fadeItems = document.querySelectorAll(".fade-item")

  // On mobile, skip lazy loading for smoother scrolling
  if (window.innerWidth < 768) {
    fadeSections.forEach(el => el.classList.add("visible"))
    fadeItems.forEach(el => el.classList.add("visible"))
    return
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        obs.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  })

  fadeSections.forEach(el => observer.observe(el))
  fadeItems.forEach((item) => {
    item.style.animationDelay = `${0.5}s`
    observer.observe(item)
  })

  // Accordion functionality
  const accordions = document.querySelectorAll(".accordion-question")
  accordions.forEach(q => {
    q.addEventListener("click", () => {
      q.classList.toggle("active")
      const answer = q.nextElementSibling
      answer.classList.toggle("expanded")
    })
  })
})