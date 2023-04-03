
var router = new Router()

var maindiv = crend('div','')
startContext(maindiv)

localStorage.setItem('','')
router.pretrigger = () => {
    maindiv.innerHTML = ''
}

router.listen(new RegExp('^/$'),(e) => {
    landingpage()
})
router.listen(new RegExp('^/merk'),(e) => {
    merkpage()
})
router.listen(new RegExp('^/prijs'),(e) => {
    prijspage()
})
router.listen(new RegExp('^/statielijst'),(e) => {
    statielijstpage()
})
router.posttrigger = () => {

}

router.interceptNavigation()
router.trigger(document.location.pathname)