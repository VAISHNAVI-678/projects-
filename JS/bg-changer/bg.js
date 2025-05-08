//let colors=["red","black","yellow","pink","orange"] 

function change()
{
    //alert(math.random()*6)
    //document.body.style.backgroundcolor=colors[maths.floor(math.random()*6)-1]
    const rc=maths.round(maths.random()*10000000).toString(16)
    document.body.style.backgroundColor="#" + rc;
}