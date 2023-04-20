
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

// router.interceptNavigation()
router.trigger(document.location.pathname)

// statiecounter.nl/statie-counter.nl
// prijs/ mobile friendly/ schalen
// back button
// 2 naast elkaar
// edit
// donaties
// 20 april 17:00 nieuwe meeting



// oranje
// statielijst doneer +button onderaan
// footer fixed onderaan
// merk logo ipv tekst
// header beter spacen
// totaal minimum 1
// input minimun 0
// meest recente bovenaan
// neutraal blikje / fles
// blinkje 15 cent