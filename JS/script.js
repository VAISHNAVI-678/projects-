let inp=document.getElementById('inp');
let inp2=document.getElementById('inp2');
let botton=document.getElementById('btn');
const mainDiv=document.getElementById('data')
function todo()
{
    const myDiv=document.createElement('div')
    constele=document.createElement('p')
    //<p></p>
    const image=document.createElement('div')
    //<img src="" alt="">
    image.src=inp2.value 

    image.alt="something"
    image.style.height="100px"
    Element.textContent=inp.value;
    myDiv.append(image,ele);
    mainDiv.appendChild(myDiv)
    myDiv.classList.add('card')
    inp.value=""
    inp2.value=""
}