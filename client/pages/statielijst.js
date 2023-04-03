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
        div({style:'display:flex;'})
            //header
            //homepage
            //ad
            //"statie lijst"
            //welkom username
            //account
            //uitloggen
        end()

        div()

            for(var groupitem of statieItemGroups){
                //month date if new month
                div({style:'border:1px solid black'})
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    crend('div',new Date(groupitem.createdAt).toLocaleDateString('nl-nl',{hour:'numeric',minute:'numeric'}))

                    cr('table');cr('tbody')
                        for(var item of groupitem.statieItems){
                            cr('tr')
                                crend('td',item.count)
                                crend('td',item.name)
                                crend('td',item.merk)
                                crend('td',item.statiegeld)
                            end();
                        }
                        cr('tr')
                            crend('td','')
                            crend('td','')
                            crend('td','')
                            crend('td',groupitem.statieItems.map(item => item.count * item.statiegeld).sum().toFixed(2))
                        end();
                    end();end();
                end()

            }
        end()

        div()//footer
            button('doneren?',() => {

            })
            button('+').on('click',() => {
                router.navigate('/merk')
            })
            crend('div',`totaal: euro${statieItemGroups.flatMap(group => group.statieItems).map(item => item.count * item.statiegeld).sum().toFixed(2)}`)
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