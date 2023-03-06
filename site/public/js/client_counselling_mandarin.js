window.addEventListener("load", function () {   
    function addCard(content){
        const card = document.createElement("div");
        const container = document.querySelector("div.counselling_mandarin_box");
        container.appendChild(card);
        card.classList.add(content.cssBigName);
    
        const cardBody = document.createElement("div");
        card.appendChild(cardBody);
        cardBody.classList.add(content.cssSmallName);

        const img = document.createElement("img");      
        card.appendChild(img); 
        if(content.imageName){
            img.src = `./images/${content.imageName}.jpg`;
            img.classList.add(content.imageName);
        }

        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        cardBody.appendChild(h2);
        cardBody.appendChild(p);
        h2.innerHTML = content.name;
        p.innerHTML = content.description;

    }

    content.forEach(function(content, index){
            addCard(content);
       
    })


});