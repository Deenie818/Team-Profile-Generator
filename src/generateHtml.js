function generateHtml (managers, engineers, interns) {
console.log(managers, engineers, interns)
//top html
var topHtml =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>`
//managers

let managerHtml=""
for(let i=0; i<managers.length; i++){
    let manager=managers[i]
    let card =`<p>${manager.name}</p>`
    managerHtml += card
}
//engineers
//interns
//bottom html
var bottomHtml = `</body>
</html>` 
var finishHtml= topHtml + managerHtml + bottomHtml
return finishHtml
}












module.exports=generateHtml