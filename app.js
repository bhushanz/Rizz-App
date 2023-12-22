let joke = document.querySelector('.jokes')
let btn = document.querySelector('.btn')

let arr =[
    'Can I buy you a drink? I’d like to see how good you are at swallowing.',
    'Kiss me if I’m wrong but, the earth is for sure flat.',
    'You must be my lucky charm, because you’re magically delicious!',
    'This date has been a big bowl of ‘frosted flakes’! It’s GRRRRRREAT!',
    'Hey, I’m sorry to bother you, but my phone must be broken because it doesn’t seem to have your number in it.',
    'Do you believe in love at first sight? Or, do I have to walk by again?',
   ' You want to know my favorite tea? I’m looking at her, shawTea!',
  ' I’m not quite Jesus, I’m more of an apostle. I could never turn water into wine. But I bet I can turn you into mine.',
  'I’d like to take you to the movies, but they don’t allow outside SNACKS.',
 ' You got no paper and no pencil but still you’re drawing my attention. '

]

btn.addEventListener('click', function(){
    let num= Math.floor(Math.random()*arr.length-1 ) +1;
     joke.innerHTML = arr[num];
     console.log(num);
  
});