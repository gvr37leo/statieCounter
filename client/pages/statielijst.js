class StatieItemGroup{
    createdAt
    statieItems

    constructor(data){
        Object.assign(this,data)
    }
}

class StatieItem{
    count
    name
    merk
    statiegeld

    constructor(data){
        Object.assign(this,data)
    }

}


var statieItemGroups = JSON.parse(localStorage.getItem('statieItemGroups')) ?? []



function statielijstpage(){
    div()
        div({style:'display:flex; justify-content:space-between; margin:0 0 20px 0; text-align:center;'})
            crend('a','Home',{href:'/'})
            crend('div','advertentie banner')
            crend('div','Welkom Erik')
            //homepage
            //ad
            //"statie lijst"
            //welkom username
            //account
            //uitloggen
        end()

        div({style:'margin-bottom:86px;'})

            for(let i = 0; i < statieItemGroups.length; i++){
                var groupitem = statieItemGroups[i]
                //month date if new month
                div({style:`
                    border:1px solid black;
                    border-radius:3px;
                    margin:0 0 10px 0;
                    padding:5px;
                    background: #fcbd4b;
                    box-shadow: 0px 3px 5px 2px black;
                `})
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    crend('div',new Date(groupitem.createdAt).toLocaleDateString('nl-nl',{hour:'numeric',minute:'numeric'}))
                    crend('div',groupitem.statieItems[0].merk)
                    cr('table',{style:`width:100%;`});cr('tbody')
                        for(var item of groupitem.statieItems){
                            cr('tr')
                                crend('td',item.count)
                                crend('td',item.name)
                                crend('td',`€${(item.count * item.statiegeld).toFixed(2)}`)
                            end();
                        }
                        cr('tr')
                            crend('td','')
                            crend('td','')
                            crend('td',`€${groupitem.statieItems.map(item => item.count * item.statiegeld).sum().toFixed(2)}`)
                        end();
                    end();end();
                    button('-',{}).on('click',() => {
                        statieItemGroups.splice(i,1)
                        localStorage.setItem('statieItemGroups',JSON.stringify(statieItemGroups))
                        router.trigger('/statielijst')
                    })
                end()
            }
        end()

        div({style:`
            display:flex;
            justify-content:space-between;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 66px;
            background: white;
            padding: 5px;
            box-shadow: 1px -2px 20px 0px black;
            background:orange;
        `})//footer
            button('doneren?',() => {

            })
            button('+',{}).on('click',() => {
                router.navigate('/merk')
            })
            crend('div',`totaal: €${statieItemGroups.flatMap(group => group.statieItems).map(item => item.count * item.statiegeld).sum().toFixed(2)}`)
        end()
    end()
}

Array.prototype.sum = function(){
    var sum = 0;
    for(var item of this){
        sum += item;
    }
    return sum
}