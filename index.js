window.addEventListener('DOMContentLoaded', (event) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const textContainer = document.querySelector('#text');
    const user = document.createElement('p');
    const message = document.createElement('p');
    message.id = 'message';
    user.id = 'user';
    if(params.user && params.message){
        user.textContent = params.user;
        message.textContent = params.message;
        user.style.fontSize = getFontSize(params.user.length);
        textContainer.appendChild(user);
        textContainer.appendChild(message);
    } else{ 
        message.textContent = 'no data provided';
        textContainer.appendChild(message);
    }
});

const getFontSize = (textLength) => {
    const baseSize = 22
    let fontSize;
    if(textLength < 16) {
        fontSize = baseSize - textLength
    } else if (textLength >= 16 && textLength < 20) {
        fontSize = baseSize - textLength + (.5*textLength-7);
    } else if(textLength >= 20) {
        fontSize = baseSize - textLength + (.54*textLength-7);

    }
    console.log(`${fontSize}vw`)
    return `${fontSize}vw`
  }