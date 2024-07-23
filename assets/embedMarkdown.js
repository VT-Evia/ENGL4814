document.addEventListener("DOMContentLoaded", function() {
  fetch('https://raw.githubusercontent.com/VT-Evia/finalproject/master/_posts/2010-03-07-post-link.md')
    .then(response => response.text())
    .then(text => {
      document.getElementById('markdown-content').innerHTML = marked(text);
    })
    .catch(error => console.error('Error fetching markdown file:', error));
});
