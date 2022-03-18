window.addEventListener('load', getData);

async function getData() {
    const url = '/apod';

    var res = await fetch(url,{method: 'GET'})
        .then(response => response.json())
        .then(data => {
            showData(data)})

        .catch(e => {
            window.location.href = "./error.html";
        })
}

async function showData({date, explanation, media_type, title, url}) {
    
    document.getElementById('loader').style.display = 'none';
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector('#c_multimedia');

    if (media_type == 'video') {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" style="height: 500px; width: 80%" src="${url}" allowfullscreen></iframe>`;
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
    }
}