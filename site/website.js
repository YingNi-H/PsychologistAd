window.addEventListener("load", function () {

    // Sporadic website base URL
    const BASE_URL = "https://sporadic.nz/a01-parttime";

    // TODO Your code here.
    document.querySelector("#randomePokemonImage").src = "";
    displayRandomePokemon();
    getTypesTable();

    //Randome button-new randome pokemon
    document.querySelector("#btnRandome").addEventListener("click", displayRandomePokemon);
    

    //Fetch a randome Pokemon from server
    async function displayRandomePokemon(){
        let getRandomePokemon = await fetch(`https://trex-sandwich.com/auckland-online-cs719-assignment-01/services/pokemon/summary/random`);
        let responseGetRandomePokemon = await getRandomePokemon.json();
        console.log(`#btnRandome:${responseGetRandomePokemon.id}`);

        //Display the randome Pokemon's image and information in the card
        document.querySelector("#randomePokemonImage").src = `https://trex-sandwich.com/auckland-online-cs719-assignment-01/images/${responseGetRandomePokemon.imageUrl}`;
        document.querySelector("#randomePokemonName").innerHTML = responseGetRandomePokemon.name;
        let typeArray = responseGetRandomePokemon.types;

        //Call type diaplay function
        displayType(typeArray);
        typeArray = null;

        //MoreInfo button-pokemon pop up 
        document.querySelector("#btnMoreInfo").addEventListener("click", getPokemonIdDetails(responseGetRandomePokemon.id)); 
        responseGetRandomePokemon.id = null;
        

    }

    

    //Show the randome Pokemon's type
    let typeDisplay = document.querySelector("#randomePokemonType");
    function displayType(typeArray){
        typeDisplay.innerHTML = `<strong>Types:</strong> `;
        typeArray.forEach(function(item){
            typeDisplay.innerHTML += `${item}  `;


        });
        

    }
    
    //Acquire types data from server
    async function getTypesTable(){
        let tableTypes = await fetch(`https://trex-sandwich.com/auckland-online-cs719-assignment-01/services/pokemon/types`);
        let responseTableTypes = await tableTypes.json();
        console.log(`responseTableTypes:${responseTableTypes}`);
        for(let i = 0; i < responseTableTypes.length; i++){
            displayTypesTable(responseTableTypes[i]);

        }

    }

    const typesTable = document.querySelector("#typesTable");
    const typesHead = document.createElement("thead");
    const typesBody = document.createElement("tbody");
    const rowHead = document.createElement("tr");
    typesTable.appendChild(typesHead);
    typesTable.appendChild(typesBody);
    typesHead.appendChild(rowHead);
    rowHead.innerHTML = `<th></th>`;

    //Display the fetched types data in the table
    function displayTypesTable(typesData){
        rowHead.innerHTML += `<th>${typesData.name}</th>`;
        const rowBody = document.createElement("tr");
        typesBody.appendChild(rowBody);
        rowBody.innerHTML = `<td>${typesData.name}</td>`;

        //Populate data array in cells
        for(let i = 0; i < typesData.data.length; i++ ){
            rowBody.innerHTML += `<td>${typesData.data[i]}</td>`;

        }

    }

    //Modal pop-up display
    async function getPokemonIdDetails(pokemonId){
        let theIdPokemon = await fetch(`https://trex-sandwich.com/auckland-online-cs719-assignment-01/services/pokemon/detail/${pokemonId}`);
        let responseTheIdPokemon = await theIdPokemon.json();

        document.querySelector("#modalTitle").innerHTML = responseTheIdPokemon.name;
        document.querySelector("#modalImage").src = `https://trex-sandwich.com/auckland-online-cs719-assignment-01/images/${responseTheIdPokemon.imageUrl}`; 
        document.querySelector("#descriptionP").innerHTML = responseTheIdPokemon.description;

        //Display modal types- Reuse code but bugs so quit this
        // typeDisplay = document.querySelector("#typeP");
        // displayType(responseTheIdPokemon.types);

        //Display modal types
        const typeP = document.querySelector("#typeP");
        typeP.innerHTML = `<strong>Types:</strong> `;
        responseTheIdPokemon.types.forEach(function(item){
            typeP.innerHTML += `${item}  `;

        });


    }
    
    
    
});