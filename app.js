const questions=[{
    'que':'Which of the follwing is a markup language?',
    'a':'JavaScript',
    'b':'Css',
    'c':'Html',
    'd':'Php',
    'correct':'c'
},
{
    'que':'Which year was javascript launched?',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'2000',
    'correct':'b'
},
{
    'que':'What does css stands for?',
    'a':'Hyper TextMarkup Language',
    'b':'Cascading Style Sheet',
    'c':'Jasan Object Notation',
    'd':'None of above',
    'correct':'b'
},
{
    'que':'What is the correct HTML for creating a hyperlink?',
    'a':'Itonlineclub.tk',
    'b':'Itonlineclub.tk',
    'c':'Itonlineclub.tk',
    'd':'Http://itonlineclub.tk',
    'correct':'c'    
},
{
    'que':'How can you open a link in a new browser window',
    'a':'_blank',
    'b':'Same',
    'c':'Target',
    'd':'Open',
    'correct':'a'    
},
{
    'que':'Inside which element do you put JavaScript?  ',
    'a':'<var>',
    'b':'<Script>',
    'c':'<Section>',
    'd':'<const>',
    'correct':'b'    
},
{
    'que':'Which is the correct way to write a comment in JavaScript?  ',
    'a':'<..  ..>',
    'b':'||',
    'c':'/*  */',
    'd':'//',
    'correct':'d'    
},
{
    'que':'Which HTML tag specifies an internal style sheet?  ',
    'a':'<css>',
    'b':'<script>',
    'c':'<style>',
    'd':'none',
    'correct':'c'    
},
{
    'que':'How to remove the underline from hyperlinks using CSS?  ',
    'a':'a {underline:none}',
    'b':'a {decoration:no underline}',
    'c':'a {text-decoration:no underline}',
    'd':'a {text-decoration:none}',
    'correct':'d'    
},
{
    'que':'Where we can use the <style> tag?    ',
    'a':'In the <head> element',
    'b':'In the <body> element',
    'c':'In the <head> and <body> elements',
    'd':'none of above',
    'correct':'a'    
}
]
let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const queBox=document.getElementById("queBox")
const optionInput=document.querySelectorAll(".options")

const loadQue=()=>{
     if(index===total){
        return endQuiz()
     }
     reset();
    const data=questions[index];
    queBox.innerText=`${index+1}) ${data.que}`
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index]
    const ans=getAnswer();
    if(ans===data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQue();
    return;
}


const getAnswer = ()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
            }
               
            
        }
    )
    return answer;
}



function reset(){
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}


const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h2>thank you for playing quiz</h2>
    <h3>${right}/${total} are correct </h3>
    </div>
    `
}






loadQue();









