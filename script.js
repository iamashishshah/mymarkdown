const clearBtn = document.getElementById('clearBtn');
const markdownInput = document.getElementById('markdown');
const previewArea = document.getElementById('preview');


// Event listener for input changes in the markdown input field
markdownInput.addEventListener('input', function () {
    let markdownText = this.value;

     // Parse the markdown text and highlight any code blocks using highlight.js
    let htmlContent = marked.parse(markdownText, {
        highlight: function (code, lang) {
            return hljs.highlightAuto(code).value;
        },
    });
    previewArea.innerHTML = htmlContent;
});
 
// clear the both sides of field
clearBtn.addEventListener('click', () => {
    document.getElementById('markdown').value = '';
    document.getElementById('preview').innerHTML = '';
});
