let currentPage = 0;

function goToPage(pageNumber) {
  const container = document.getElementById('container');
  currentPage = pageNumber;
  container.style.transform = `translateX(-${100 * pageNumber}vw)`;
}
