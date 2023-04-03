var selectedmerk = ''

function merkpage(){
    var merkitems = ['coca-cola','fanta','sprite','spa-blauw','heineken']
    div()
        cr('ul')
            for(var merk of merkitems){
                crend('li',merk).on('click',(e) => {
                    selectedmerk = e.target.innerText;
                    router.navigate('/prijs')
                })
            }
        end()
    end()
}