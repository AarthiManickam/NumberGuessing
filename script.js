var minimum=1
var maximum=10
var GuessLimit=3

var randomNumber=getRandom(minimum,maximum)
console.log(randomNumber)
var message=document.getElementById('num-output');
var btn=document.getElementById('guess-value');
console.log(btn)

btn.addEventListener('click',function(){
    var a=document.getElementById("num-input").value;
    if(!(isNaN(a)))
    {
        message.innerText="The number is"+ a;
        if(a==randomNumber)
        {
            
            gameWin('green',`${a} was the correct number! YOU WIN`);
        }
        else if (a>=minimum && a<=maximum && a!='')
        {
            gameLoss('red',`${a} was not correct number! ${GuessLimit} guess left`)
            //resetmessage()

            if(GuessLimit==0)
            {
                gameLoss('red','You Lose')
                btn.innerText ="Play Again";
                btn.addEventListener("click", function () {
                    location.reload();
                });
            }
            else{
                GuessLimit=GuessLimit-1

            }
           
        }
        else{
            message.innerText="Please enter number between 1-10"
        }


    }
    else 
    {
        message.innerText="Please enter valid number"
    }

})

function gameWin(colour,msg)
{
message.style.color=colour
message.className="alert alert-success";
message.innerText=msg;
btn.innerText ="Play Again";
btn.addEventListener("click", function () {
    location.reload();
});

}
function gameLoss(colour,msg)
{
message.className="alert alert-danger"
message.innerText=msg;

}
function resetmessage()
{
    message.innerText="";
}








function getRandom(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


    function setMessage(msg, color) {
       message.color=color;
       message.textContent=msg;
    }
    
