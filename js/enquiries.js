let enquiriesDiv = document.querySelector(".enquiries");

async function getEnquiries(){
    let response = await fetch("http://localhost:3000/enquiries");
    let data = await response.json();
    return data.data;
}

async function displayEnquiries(){
    let data = await getEnquiries();
    console.log(typeof data);
    console.log(data);
    data.forEach(element => {
        let enquiryDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let contentDiv = document.createElement("div");
        let textSpan = document.createElement("span");
        let responseSpan = document.createElement("span");
        let respondBtn = document.createElement('button');

        // add classes to the divs
        enquiryDiv.classList.add("enquiry");
        nameDiv.classList.add("name");
        contentDiv.classList.add("content");
        textSpan.classList.add("text");
        responseSpan.classList.add("response");

        nameDiv.innerHTML = element?.email;
        textSpan.innerText = element?.enquiry;
        responseSpan.innerText = element?.response;
        respondBtn.innerText = "Respond";
        respondBtn.setAttribute('id', element?.name);
        respondBtn.addEventListener('click', respondUser);

        contentDiv.append(textSpan, responseSpan);
        enquiryDiv.append(nameDiv, contentDiv, respondBtn);

        enquiriesDiv.appendChild(enquiryDiv);
    });
}

async function respondUser(e){
    let name = e.target.id;
    let response = prompt("Response:");
    await fetch("http://localhost:3000/respond/", {
        method: "POST",
        body: JSON.stringify({response: response, name: name}),   
        headers: {"Content-Type": "application/json"}
    });
    location.reload();
}

displayEnquiries();