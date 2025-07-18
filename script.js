
  const scrollContainer = document.getElementById('movieScroll');


function scrollToRight() {
  scrollContainer.scrollLeft += 300;
}

function scrollToLeft() {
  scrollContainer.scrollLeft -= 300;
}

  const faqs = document.querySelectorAll('.faq');
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    });
  });