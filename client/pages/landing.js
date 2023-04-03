function landingpage(){
    div()
        crend('div','statiecounter',{})
        img({src:'logo'})
        button('start counting').on('click',() => {
            router.navigate('/prijs')
        })
        crend('div','al ingelogd')
        button('ga naar statielijst').on('click',() => {
            router.navigate('/statielijst')
        })
    end()
}