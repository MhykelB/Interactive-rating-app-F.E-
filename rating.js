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
selectRating(btn){
 rateBtn.forEach((btn)=>{
btn.classList.remove('activeBtn')})
btn.classList.toggle('activeBtn')
}
flipActiveWindow(){
  rateBtn.forEach((btn)=>{
  btn.classList.remove('activeBtn')})
  rateWindow.classList.toggle('toogleDisplay')
  thankWindow.classList.toggle('toogleDisplay')}

submitRating(){
  let currentBtn;
  rateBtn.forEach((btn)=>{
  if(btn.classList.contains('activeBtn')){
  currentBtn = btn;
  rating.innerHTML = currentBtn.innerHTML;
  maxrating.innerHTML = rateBtn.length
  this.flipActiveWindow()
  }})}
}
//
const ui = new UI()
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
ui.flipActiveWindow()
e.preventDefault()} )

