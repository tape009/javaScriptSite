function wordgention(){

let wordphase = ""
let funPrahs=[word=['no','BOO','super '], word2=['.','waddwad'],word3= ["wawd"],word4=['wadas'],word5=['.js','()','.html']]

let prahsGen = Math.floor(Math.random() *funPrahs.length )

switch(prahsGen){
case 0:
    wordgen = Math.floor(Math.random() * word.length )
    wordphase = word[wordgen]
    
break; 

case 1:
    wordgen = Math.floor(Math.random() * word.length)
    wordgen2 = Math.floor(Math.random() * word2.length)
    wordphase = word[wordgen]+' ' + word2 [wordgen2]
  
break
case 2:
    wordgen = Math.floor(Math.random() * word.length)
    wordgen2 = Math.floor(Math.random() * word2.length)
    wordgen3 = Math.floor(Math.random() * word3.length)
    wordphase = wordgen[word]+' '+ wordgen2 [word2] +' '+ wordgen3[word3]
   break;
case 3:
    wordgen = Math.floor(Math.random() * word.length)
    wordgen2 = Math.floor(Math.random() * word2.length)
    wordgen3 = Math.floor(Math.random() * word3.length)
    wordgen4 = Math.floor(Math.random() * word4.length)
    wordphase = word[wordgen]+" "+ word2 [wordgen2] +" " + word[wordgen3] +" "+ word4[wordgen4]
   
    
case 4:
    wordgen = Math.floor(Math.random ()* word.length)
    wordgen2 = Math.floor(Math.random() * word2.length)
    wordgen3 = Math.floor(Math.random ()* word3.length)
    wordgen4 = Math.floor(Math.random ()* word4.length)
    wordgen5 = Math.floor(Math.random() * word5.length)
    wordphase = wordgen[wordgen]+' '+ word2 [wordgen2] +' '+ word3[wordgen3] +' '+ word4[wordgen4] + ' '+ word5[wordgen5]
    
break;

}
alert(wordphase)
}


