window.addEventListener("load", function () {
    function addCard(content){
        const card = document.createElement("div");
        const container = document.querySelector("div.title");
        container.appendChild(card);
        const card2 = document.createElement("div");
        container.appendChild(card2);

        
        card.classList.add(content.cssSmallName); // specialty
        card2.classList.add(content.cssMiddleName); //middle

        const img = document.createElement("img");      
        card2.appendChild(img); 
        if(content.imageName){
            img.src = `./images/${content.imageName}.jpg`;
            img.classList.add(content.imageName);
        }

        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        card.appendChild(h2);
        card.appendChild(p);
        h2.innerHTML = content.name;
        p.innerHTML = content.description;
    }
    content.forEach(function(content, index){
        addCard(content);

    })
});