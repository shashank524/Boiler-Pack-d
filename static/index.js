var imagePath = "";

function statsPage(location){
    window.location.replace('/info');

    console.log(location);

    if(location=="Corec"){
        document.querySelector("#stats-image").setAttribute("src", "/static/purdue-hero-1.jpg");
    }
    else if(location=="Dining"){
        document.querySelector("#stats-image").setAttribute("src", "/static/download-1.jpg");
    }
    else{
        document.querySelector("#stats-image").setAttribute("src", "/static/download.jpg");

    }
}