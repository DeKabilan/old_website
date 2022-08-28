const tabs = document.querySelectorAll('#top-tabs > div')

function hideOtherContentAreas(){
    const allContentAreas = document.querySelectorAll('#content-area > div')

    for(let i=0;i<allContentAreas.length;i++){
        allContentAreas[i].style.display = 'none'
    }
}


function changeTab(){
    const selector = this.dataset.activate
    if(selector){
        const el = document.querySelector(selector)
        hideOtherContentAreas()
        el.style.display = "block"
    }
}

for (let i=0;i<tabs.length;i++ ){
    const tab = tabs[i]
    tab.addEventListener('click', changeTab, false)
}

