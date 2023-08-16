const inputEl = document.getElementById("input");
const infoText = document.getElementById("info-text");
const container = document.querySelector(".meaning-container");
const palabra = document.getElementById("title");
const sigWord = document.querySelector("#Meaning");
const audio = document.querySelector("#audio");



inputEl.addEventListener('keydown', (e)=>{
    
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }


})

const fetchAPI  = async (word)=>{
    
   
    try {
    infoText.style.display = "block";
    container.style.display = "none";
    infoText.innerText = `Buscando el significado de  ${word}`
    
    const url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const resultado = await url.json();

        if(url.status == 404){
            container.style.display = "block";
            audio.style.display = "none";
            palabra.innerText = "Palabra";

            infoText.style.display = "none";
            sigWord.innerText = "No hay significado para esa palabra"
        }else{
            infoText.style.display = "none";
            container.style.display = "block";
            audio.style.display = "inline-block";
    
            const significado = resultado[0].meanings[0].definitions[0].definition;
            const AudioURl = (resultado[0].phonetics[1].audio);
        
            palabra.innerText = `${word}`;
        
            sigWord.innerText = `${significado}`;
        
            audio.src = AudioURl;
        
        }
  
   
        
   

    } catch (error) {
        
        
    }


}