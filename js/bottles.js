var words = "pop";
var count = 99;
while (count > 0 ){
    document.write(count + " "+ words + " of pop  on the wall <br>");
    document.write(count + " "+ words + "of pop <br>")
    document.write("Take one down, pass it around <br>")
    count = count - 1
    if(count  >0 )
    {
        document.write(count + " " +words +" of pop on the wall <br> ")

    }
    else
    {
        document.write("No more " + words + " of pop on the wall <br>");
    }
}
