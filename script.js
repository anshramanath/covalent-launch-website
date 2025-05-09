document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-in")
  const fadeItems = document.querySelectorAll(".fade-item")

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        obs.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  fadeSections.forEach(el => observer.observe(el))
  fadeItems.forEach((item) => {
    observer.observe(item)
    item.style.animationDelay = `${2}s`
  })

  // Accordion functionality
  const accordions = document.querySelectorAll(".accordion-question")
  accordions.forEach(q => {
    q.addEventListener("click", () => {
      q.classList.toggle("active")
      const answer = q.nextElementSibling

      if (q.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px"
      } else {
        answer.style.maxHeight = null
      }
    })
  })
})

window.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline')
  const line = document.getElementById('progress-line')
  const bounds = timeline.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const middle = windowHeight / 2

  if (bounds.top < middle && bounds.bottom > 0) {
    const progress = Math.min((middle - bounds.top) / bounds.height, 1)
    line.style.transform = `scaleY(${Math.max(progress, 0)})`
  } else if (bounds.top >= middle) {
    line.style.transform = 'scaleY(0)'
  } else {
    line.style.transform = 'scaleY(1)'
  }
})