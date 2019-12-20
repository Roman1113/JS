window.addEventListener("load", Start);
function Start() {
    const btn_send = document.querySelector(".btn_send");
    btn_send.addEventListener("click", Init);
}

function Init() {
    const text = document.querySelector(".text");
    let city = text.value;
    const URL = `https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=${city}`;
    let printCity = document.querySelector(".locations");
    let locations = document.getElementsByClassName(".locations");
    if (locations.length > 1) {
        printCity.removeChild(printCity.lastChild);
    }
    Request(URL);
    initMap();
}

function Request(URL) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    console.log(xhr);
    xhr.onreadystatechange = function (aEvt) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                let local_Info = document.querySelector(".locations");
                local_Info.setAttribute("style", "display:inline-block;");
                let table = document.createElement("table");
                table.setAttribute("width", "300px");
                for (let i = 0; i < data.devices.length; i++) {
                    let div = document.createElement("tr");
                    div.innerHTML = `<td>${[i + 1]}.</td>
                    <td>${data.devices[i].fullAddressUa}</td>
                    <td>${data.devices[i].placeUa}</td>
                    <td>${data.devices[i].cityUA}</td>
                    <button id = but_${[i + 1]} style = "margin-left = 10px">on map</button>`;
                    table.appendChild(div);
                }
                local_Info.appendChild(table);

            } else {
                console.log("Error loading page\n");
            }
        }
    };
    xhr.send();
}

function clickBtn() {
    var button = document.getElementById(btn_1);
    button.addEventListener("click", button)

}


function initMap() {
    // The location of Uluru
    var uluru = { lat: 50.616810, lng: 26.273060 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 15, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

