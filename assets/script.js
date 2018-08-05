var urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('view') !== 'pdf') {
  document.body.className = document.body.className.replace("pdf-version","");
  // document.body.classList.add("pdf-version");
}


