

function prijspage(){
    var prijsitems = [
        {
            name:'blikje',
            image:'/images/blikje.png',
            prijs:0.15,
        },{
            name:'klein flesje',
            image:'/images/flesje.png',
            prijs:0.20,
        },{
            name:'grote fles',
            image:'/images/grotefles.png',
            prijs:0.50,
        },   
    ]
    div({style:`
        display: flex;
        flex-direction: column;
        align-items: center;
    `})
        crend('div',selectedmerk)
        div({style:`display:flex; justify-content:center;flex-wrap:wrap;`})
            for(let item of prijsitems){
                div({style:'display:flex; flex-direction:column;align-items:center;margin-right: 10px;'})
                    img({src:item.image,width:'100px',height:'120',style:`margin-bottom:10px;`})
                    div({style:`    display: flex; margin-bottom:10px;`})
                        button('-').on('click',() => {
                            item.countinput.valueAsNumber = Math.max(0,item.countinput.valueAsNumber - 1)
                            updateTotaal()
                        })
                        item.countinput = input({type:'number',min:0,value:0,style:`width:50px;`})
                        button('+').on('click',() => {
                            item.countinput.valueAsNumber++;
                            updateTotaal()
                        })
                    end()
                    div();
                        text(`€${item.prijs}`);
                    end();
                end()
            }
        end()
        div();text('totaal euro ');var totaalspan = crend('span','€0');end();
        function updateTotaal(){
            var sum = 0
            for(var item of prijsitems){
                sum += item.countinput.valueAsNumber * item.prijs
            }
            totaalspan.innerText = `€${sum.toFixed(2)}`;
        }
        
        button('toevoegen aan lijst?').on('click',() => {
            
            if((prijsitems.every(item => item.countinput.valueAsNumber >= 0) && prijsitems.reduce((p,c) => p + c.countinput.valueAsNumber,0) > 0) == false){
                alert('select atleast 1 item')
                return
            }
            
            
            
            statieItemGroups.unshift(new StatieItemGroup({
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
    end()
}