const content = 'KIM JIYU’S PORTFOLIO    ';
const TXT = document.querySelector('.cover_title');
let index = 0;

function typing() {
    TXT.textContent += content[index++];
    if (index > content.length) {
        TXT.textContent = '';
        index = 0;
    }
}

setInterval(typing, 90);
