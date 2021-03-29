console.log("Make Line");
function makeLine(n)
{
  line=" ";
  for(let i=0;i<n;i++)
  {
   line="*"+line; 
  }
   console.log(line);
}
console.log(makeLine(5));

console.log("Make Square");

function makeSquare(n)
{
  line=" ";
  for(let i=0;i<n;i++)
  {
   line=makeLine(n); 
  }
}
console.log(makeSquare(5));

console.log("Make Rectangle");
function makeRectangle(width,height)
{
  line=" ";
 while(height){
   line=makeLine(width)
   height--;
 }
return line;}
makeRectangle(3,5);

console.log("Make Downstairs");
function makeDownwardStairs(n)
{
  line=" ";
  let i=1
 while(n){
   line=makeLine(i)
   n--;
   i++;
 }
return line;}
console.log(makeDownwardStairs(5));

console.log("Make SpaceLine");
function makeSpaceLine(numSpaces, numChars)
{line=" ";
  newLine=" ";
  final=" "
  for(let i=0;i<numSpaces;i++)
  {line=" "+line;}
    for(let j=0; j<numChars; j++){
      newLine="*"+newLine;}
    final=line+newLine+line;
    console.log(final)}
console.log(makeSpaceLine(3, 5));

console.log("Make Isosceles Triangle");
function makeIsoscelesTriangle(n)
{
  line=" ";
  let i;
  for(i=0;i<n;i++){
   line=makeSpaceLine(n-i-1, 2*i+1)}
     n--;
   i++;
 return line;}
console.log(makeIsoscelesTriangle(5));

console.log("Make Diamond");
function makeDiamond(n)
{
  line=" ";
  let i;
  let diamond;
  for(i=0;i<n;i++){
   line=makeSpaceLine(n-i-1, 2*i+1)}
   return line;
  }
 function reverseDiamond(n)
{
  line=" ";
  let i;
  
  for(i=n;i>=0;i--){
   line=makeSpaceLine(n-i, 2*i-1)}
   
 return line;
 
 }
 
console.log(reverseDiamond(5));
function diamond(n)
{
let diamond;
diamond=makeIsoscelesTriangle(n)+reverseDiamond(n);
}
console.log(diamond(5));

// function pyramid(n) { 
 
//   for(let i=1; i<= n; i++){ 
//     let str = ' '.repeat(n-i); 
//     let str2 = '#'. repeat(i*2 -1) 
//     console.log(str + str2 + str); 
//   } 
  
// } 
// pyramid(5)