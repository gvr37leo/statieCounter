function landingpage(){
    div({style:'display:flex;flex-direction:column; align-items:center;'})
        crend('div','Statie €ounter',{style:'margin:0 0 10px 0; font-weight:bold;'})
        img({src:'images/recycle.png',style:'margin:0 0 10px 0;'})
        button('start counting!',{style:'margin:0 0 10px 0;'}).on('click',() => {
            router.navigate('/merk')
        })
        crend('div','al ingelogd?',{style:'margin:0 0 10px 0;'})
        button('ga naar statielijst',{style:'margin:0 0 10px 0;'}).on('click',() => {
            router.navigate('/statielijst')
        })
    end()
}