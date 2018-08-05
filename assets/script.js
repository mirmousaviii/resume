var urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('view') === 'pdf') {
  document.body.classList.add("pdf-version");
}
