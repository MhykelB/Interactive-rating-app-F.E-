//
const rateBtn = document.querySelectorAll('.button');
const rateWindow = document.querySelector('.rating-box')
const thankWindow = document.querySelector('.response')
const submitBtn = document.querySelector('.submit')
const rating =  document.querySelector('#rating')
const maxrating =  document.querySelector('#max-rating')
const backBtn = document.querySelector('#backBtn')
//
class UI{
  constructor(){}
   uncolorOtherBtn(){
  rateBtn.forEach((btn)=>{
    if (btn.classList.contains('activeBtn')) //the conditional is not necessary
       btn.classList.remove('activeBtn')
  })
   }
  changeColor(btn){
   btn.classList.toggle('activeBtn')
  }
selectRating(btn){
  this.uncolorOtherBtn()
  this.changeColor(btn)
}
flipActiveWindow(){
  rateWindow.classList.toggle('toogleDisplay')
  thankWindow.classList.toggle('toogleDisplay')
}
submitRating(e){
  let currentBtn;
  rateBtn.forEach((btn)=>{
  if(btn.classList.contains('activeBtn')){
    currentBtn = btn;
    rating.innerHTML = currentBtn.innerHTML;
  maxrating.innerHTML = rateBtn.length
  this.flipActiveWindow()
  }})
  
}
reloadUI(){
  document.location.reload()
}
}
//
const ui = new UI()
// selecting the rating//
rateBtn.forEach((button)=>{
  button.addEventListener('click', (e)=>{
ui.selectRating(button)
e.preventDefault()
  })
})
//Submiting the rating
submitBtn.addEventListener('click', (e)=>{
ui.submitRating()
e.preventDefault()
})
// Go Back 
backBtn.addEventListener('click', (e)=>{
ui.reloadUI()
e.preventDefault()
} )

//or


