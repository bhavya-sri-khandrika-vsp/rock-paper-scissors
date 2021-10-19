
function game()
{
    
var name = document.getElementById('name').value;
if(name == "")
{
   alert("name is required");
}
else{

var num = Math.random() * 3
var com_choice = Math.ceil(num)
//alert(com_choice);
//document.getElementById('comp').innerHTML = com_choice;

document.getElementById('rock').addEventListener('click',function(){
    
    if(com_choice==1)
    {
        document.getElementById('comp-disp').src = "rock.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Rock";
    }
    else if(com_choice==2)
    {
        document.getElementById('comp-disp').src = "paper.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Paper";
    }
    else 
    {
        document.getElementById('comp-disp').src = "scissors.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Scissors";
    }

    document.getElementById('disp').src = "rock.png";
    var choice = 1;

    document.getElementById('result').classList.add('answer')
    document.getElementById('user-input').innerHTML = "U chosed Rock";
    if(choice==com_choice)
    {
        document.getElementById('result').innerHTML = "game tie";
    }
    else if(choice==1 && com_choice ==3)
    {
        document.getElementById('result').innerHTML = name + " won";
    }
    else{
        document.getElementById('result').innerHTML = "computer won";
    }
})

document.getElementById('paper').addEventListener('click',function(){
    if(com_choice==1)
    {
        document.getElementById('comp-disp').src = "rock.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Rock";
    }
    else if(com_choice==2)
    {
        document.getElementById('comp-disp').src = "paper.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Paper";
    }
    else 
    {
        document.getElementById('comp-disp').src = "scissors.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Scissors";
    }
    
    document.getElementById('disp').src = "paper.png";
    var choice = 2;

    document.getElementById('result').classList.add('answer')
    document.getElementById('user-input').innerHTML = "U chosed Paper";
    if(choice==com_choice)
    {
        document.getElementById('result').innerHTML = "game tie";
    }
    else if(choice==2 && com_choice ==3)
    {
        document.getElementById('result').innerHTML = "computer won";
    }
    else{
        document.getElementById('result').innerHTML = name + " won";
    }
})


document.getElementById('scissors').addEventListener('click',function(){
    if(com_choice==1)
    {
        document.getElementById('comp-disp').src = "rock.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Rock";
    }
    else if(com_choice==2)
    {
        document.getElementById('comp-disp').src = "paper.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Paper";
    }
    else 
    {
        document.getElementById('comp-disp').src = "scissors.png";
        document.getElementById('comp-input').innerHTML = "Computer chosed Scissors";
    }
    
    
    var choice = 3;

    document.getElementById('result').classList.add('answer')
    document.getElementById('user-input').innerHTML = "U chosed Scissors";
    document.getElementById('disp').src = "scissors.png";
    if(choice==com_choice)
    {
        document.getElementById('result').innerHTML = "game tie";
    }
    else if(choice==3 && com_choice ==2)
    {
        document.getElementById('result').innerHTML = name + " won";
    }
    else{
        document.getElementById('result').innerHTML = "computer won";
    }
})

}
    
}


function toggle_mode()
{

    var source = document.getElementById('dark-mode').src;
    if(source == "sun.png")
    {
        document.getElementById('dark-mode').src = "night-mode.png";
    }

    else{
        document.getElementById('dark-mode').src = "sun.png";
    }

    
}






