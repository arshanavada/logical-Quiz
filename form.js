class Form{
    constructor(){
    this.input=createInput("name");
    this.button=createButton("Next");
    this.greeting=createElement('h3');   
}

    

question1(){
    var question1= createElement("h3");
    question1.html("Q1.Which word does NOT belong with the others?"+"A. index"+
    "B. glossary"+"C. chapter"+"D. book")
    question1.position(500,200)
    Text("Arsh",200,400);
    
    var next=createButton('Next')
    next.position(500,500)
    next.mousePressed(()=>{
    this.question2
    })
   
    }

    
question2(){
    var question2= createElement("h3");
    question2.html("Q2. Which word is the odd man out?"+
    "trivial"+
    "unimportant"+
    "important"+
    "insignificant")
    question2.position(500,200)
    }
}

