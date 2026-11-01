document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('text');
    const button = document.getElementById('mainBtn');
    const image = document.getElementById('myImage');

    const oldImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_4Qiam4muej0Q1sC8UvDDuiwwpgg4Fi6O-4yfoI_-WvQxCcgSXWJ_1gU&s=10";
    const newImageSrc = "https://media.istockphoto.com/id/1454459887/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%8D%D0%B4%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3-%D1%88%D0%BE%D1%82%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D1%82%D0%B0%D1%83%D0%BD%D1%85%D0%B0%D1%83%D1%81%D1%8B-%D0%B6%D0%B8%D0%BB%D0%BE%D0%B9-%D1%80%D0%B0%D0%B9%D0%BE%D0%BD.jpg?s=612x612&w=0&k=20&c=Ag1Ijtlqb7NEmoGlirsKKjix2hSARKEOASipBEytiNQ="; 

    function toggleElements() {
        if (heading.textContent === 'Старая картинка') {
            heading.textContent = 'Новая картинка';
            button.textContent = 'Обратно';
            image.src = newImageSrc;
            image.alt = 'Новая картинка';
        } 
        else {
            heading.textContent = 'Старая картинка';
            button.textContent = 'Другое';
            image.src = oldImageSrc;
            image.alt = 'Старая картинка';
        }
    }

    if (button) {
        button.addEventListener('click', toggleElements);
    }
});