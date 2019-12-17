window.addEventListener("load", Init);

function Init() {
    const sendMSG = document.querySelector(".sendMSG");
    sendMSG.addEventListener("click", GetData);
    Request();
}

function GetData() {
    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    const telNumber = document.querySelector(".telNumber").value;

    const formData = {
        username: username,
        email: email,
        message: message,
        telNumber: telNumber
    };

    console.log("formData", formData);
}

// function Request() {
//   const URL =
//     "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

//   let xhr = new XMLHttpRequest();
//   //   console.log(xhr);
//   xhr.open("GET", URL, true);
//   xhr.onreadystatechange = function(aEvt) {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//       } else {
//         console.log("Error loading page\n");
//       }
//     }
//   };
//   xhr.send();
// }

function Request() {
    const URL =
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL, true);
    xhr.onreadystatechange = function (aEvt) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                let money = document.querySelector(".kursV");
                console.log(money);
                money.setAttribute("style", "display:inline-block;");
                money.setAttribute("style", "margin-left: 90px;");
                let table = document.createElement("table");
                table.setAttribute("width", "250px");
                for (let i = 0; i < 4; i++) {
                    let row = document.createElement("tr");
                    row.innerHTML = `<td>${data[i].ccy}</td> <td>${data[i].base_ccy}</td> <td>${data[i].buy}</td> <td>${data[i].sale}</td>`;
                    table.appendChild(row);
                }
                money.appendChild(table);
                console.log(data);
            } else {
                console.log("Error loading page\n");
            }
        }
    };
    xhr.send();
}
