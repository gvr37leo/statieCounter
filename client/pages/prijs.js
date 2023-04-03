

function prijspage(){
    var prijsitems = [
        {
            name:'blikje',
            image:'/images/blikje.png',
            prijs:0.45,
        },{
            name:'klein flesje',
            image:'/images/flesje.png',
            prijs:0.60,
        },{
            name:'grote fles',
            image:'/images/grotefles.png',
            prijs:2.00,
        },   
    ]

    cr('div')
        crend('div',selectedmerk)
    end()
    div({style:'display:flex;'})
        for(let item of prijsitems){
            div({style:'display:flex; flex-direction:column;'})
                img({src:item.image,width:'100px',height:'120'})
                div()
                    button('-').on('click',() => {
                        item.countinput.valueAsNumber--;
                        updateTotaal()
                    })
                    item.countinput = input({type:'number',value:0})
                    button('+').on('click',() => {
                        item.countinput.valueAsNumber++;
                        updateTotaal()
                    })
                end()
                div();
                    text(item.prijs);
                end();
            end()
        }
    end()
    div();text('totaal euro');var totaalspan = crend('span','0');end();
    function updateTotaal(){
        var sum = 0
        for(var item of prijsitems){
            sum += item.countinput.valueAsNumber * item.prijs
        }
        totaalspan.innerText = sum.toFixed(2);
    }
    
    button('toevoegen aan lijst?').on('click',() => {
        statieItemGroups.push(new StatieItemGroup({
            createdAt:Date.now(),
            statieItems:prijsitems.map(item => {
                return new StatieItem({
                    count:item.countinput.valueAsNumber,
                    name:item.name,
                    merk:selectedmerk,
                    statiegeld:item.prijs,
                })
            }),
        }))
        localStorage.setItem('statieItemGroups',JSON.stringify(statieItemGroups))
        // router.navigate('/advert')
        router.navigate('/statielijst')
    })
}