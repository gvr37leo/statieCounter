var selectedmerk = ''

function merkpage(){
    var merkitems = ['coca-cola-logo.png','fanta-logo.png','sprite-logo.png','spa-blauw-logo.svg','heineken-logo.png']
    div({style:`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size:30px;
    `})
        crend('div','welk merk?')
        div({style:`
            display:flex;
            flex-direction:column;
        `})
            for(var merk of merkitems){
                img({src:`/images/${merk}`,width:200,style:`
                    cursor:pointer;
                    margin:10px;
                `}).on('click',(e) => {
                    selectedmerk = e.target.innerText;
                    router.navigate('/prijs')
                })
            }
        end()
    end()
}