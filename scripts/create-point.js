function populateUFs(){
    const ufselect = document.querySelector("select[name=uf]")

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json())
        .then( states => {

            for(const state of states)
            {
                ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        } )
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexofSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexofSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json())
    .then( cities => {
       

        for(const city of cities)
        {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }

        citySelect.disabled = false

    } )
}


document 
.querySelector("select[name=uf]") 
.addEventListener("change", getCities)


//Itens de Coleta
// Pegar todos os LIs

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems =  document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover uma classe com JS
    
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id
    
    //Verificar se existem Itens selecionados se sim
    //Pegar os Itens Selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // Isso será True ou False
        return itemFound
    })

    //Se ja estiver selecionado, 
    if(alreadySelected >= 0) {
        // tirar da seleção 
        const filteredItems = selectedItems.filter(item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent 
})

        selectedItems = filteredItems
    }else{
            //Se não estiver selecionado Adicionar a Seleção
            selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems



    //Atualizar o Campo Escondido com os dados Selecionados
}