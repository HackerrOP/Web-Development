const a=40
const b=60

console.log (x=a+b)
console.log (x=a-b)
console.log (x=a*b)
console.log (x=a/b)
console.log (x=a%b)

function Multiply(a,b) {
 return a*b
}

function Add(a,b) {
    return a+b
}

function Subtract(a,b) {
    return a-b
}

function Divide(a,b) {
    return a/b
}

function mushkil(a,b,c,i) {
    if (i) {
        return (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
    }
    else {
        return (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a) 
    }
}

function bhtmushkil(a,b,c) {
    return [mushkil(a,b,c, true), mushkil(a,b,c, false)]
}

function circumference(r) {
if (r) {
    return (2*Math.PI*r)
}   
}

console.log(Multiply(25,10))
console.log(Add(250,500))
console.log(Subtract(850,500))
console.log(Divide(4500,10))
console.log(mushkil(20,100,15))
console.log(circumference(20))