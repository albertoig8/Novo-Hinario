function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../data/hinosUrl.json", function(text){
    var data = JSON.parse(text);
    return data;
});

const search = document.querySelector('#searchInput');

function searchInKeyUp(event){
    const searched = event.target.value;

    const hinosFound = hinosFilterInSearch(searched);

    hinosFound.length > 0 ? render
}

function hinosFilterInSearch(searched){
    return data.filter(hino => {
        return data.titulo.toUpperCase().includes(searched.toUpperCase());
    })
}

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400));

function gerarCard(value){
    for( var i = 0; i < 50; i++){
        var card = document.createElement("iframe");
        card.width = "380";
        card.height = "215";
        card.src = value[i].url;
        card.title = value[i].titulo;
        card.frameborder = "0";
        card.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        card.allowfullscreen = true;
        document.getElementById("card").appendChild(card);
    }
}


function buscaHinoPorTitulo(data, titulo){
    for(var i = 0; i < data.length; i++){
        if(data[i].titulo === titulo){
            var card = document.createElement("iframe");
            card.width = "380";
            card.height = "215";
            card.src = value[i].url;
            card.title = value[i].titulo;
            card.frameborder = "0";
            card.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            card.allowfullscreen = true;
            document.getElementById("card").appendChild(card);
        }
    }
}

function buscaHinoPorId(value, numero){
    for(var i = 0; i < data.length; i++){
        if(data[i].id === numero){
            var card = document.createElement("iframe");
            card.width = "380";
            card.height = "215";
            card.src = value[i].url;
            card.title = value[i].titulo;
            card.frameborder = "0";
            card.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            card.allowfullscreen = true;
            document.getElementById("card").appendChild(card);
        }
    }
}