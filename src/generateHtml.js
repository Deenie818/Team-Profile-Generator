// function generateHtml(managers, engineers, interns) {
//     console.log(managers, engineers, interns)
//     //top html
//     var topHtml = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Team</title>
//     <link rel="stylesheet" href="./dist/style.css">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <script src="https://kit.fontawesome.com/c502137733.js"></script>
// </head>

// <body>`


//     //managers

//     let managerHtml = ""
//     for (let i = 0; i < managers.length; i++) {
//         let manager = managers[i]
//         let card = `<div class ="card employee-card">
//     <div class="card-header"
//     <h2 class="card-title">${manager.getName()}</h2>
//     <h3 class="card-title"><i class="fas fa-mug-hot mr-2"><i/>${manager.getRole()}</h3>
//     </div>
//     <div class="card-body">
//         <ul class="list-group">
//         <li class="list-group-item">ID: ${manager.getId()}</li>
//         <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
//         <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
//         </ul>
//         </div>
//         </div>
//         `;
//         managerHtml += card
//     };

//     //engineers
//     let engineerHtml = ""
//     for (let i = 0; i < engineers.length; i++) {
//         let engineer = engineers[i]
//         let card = `<div class ="card employee-card">
//         <div class="card-header"
//         <h2 class="card-title">${engineer.getName()}</h2>
//         <h3 class="card-title"><i class="fas fa-glasses mr-2"><i/>${engineer.getRole()}</h3>
//         </div>
//         <div class="card-body">
//             <ul class="list-group">
//             <li class="list-group-item">ID: ${engineer.getId()}</li>
//             <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
//             <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noferrer">${engineer.getGithub()}</a></li>
//             </ul>
//             </div>
//             </div>
//             `;
            
//         engineerHtml += card
//     };
//     //interns

//     let internHtml = ""
//     for (let i = 0; i < interns.length; i++) {
//         let intern = interns[i]
//         let card = `<div class ="card employee-card">
//         <div class="card-header"
//         <h2 class="card-title">${intern.getName()}</h2>
//         <h3 class="card-title"><i class="fas fa-user-graduate mr-2"><i/>${intern.getRole()}</h3>
//         </div>
//         <div class="card-body">
//             <ul class="list-group">
//             <li class="list-group-item">ID: ${intern.getId()}</li>
//             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
//             <li class="list-group-item">School: ${intern.getSchool()}</li>
//             </ul>
//             </div>
//             </div>
//             `;
            
//         engineerHtml += card
//     };

//     //bottom html
//     var bottomHtml = `</body>
// </html>`
//     var finishHtml = topHtml + managerHtml + engineerHtml + internHtml + bottomHtml;
//     return finishHtml
// }












// module.exports = generateHtml
function generateHtml(managers, engineers, interns) {
    console.log(managers, engineers, interns)
    //top html
    var topHtml = `<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="./dist/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <style>
    #myHeader {
        background-color: red;
        color: black;
        padding: 40px;
        text-align:center;
   }
   </style>
 </head>
 <body>

 <h1 id="myHeader">My Team</h1>

 <div class="container">
 <div class="row">
 `
    //managers
    let managerHtml = ""
    for (let i = 0; i < managers.length; i++) {
        let manager = managers[i]
        let card = `
 <div class="col-md-4">
 <div class ="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
 </div>
        `;
        managerHtml += card
    };
    //engineers
    let engineerHtml = ""
    for (let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = `
 <div class="col-md-4">
 <div class ="card employee-card">
        <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noferrer">${engineer.getGithub()}</a></li>
            </ul>
            </div>
            </div>
 </div>
            `;
        engineerHtml += card
    };
    //interns
    let internHtml = ""
    for (let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = `
 <div class="col-md-4">
 <div class ="card employee-card">
        <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
            </div>
 </div>
            `;
        internHtml += card
    };
    //bottom html
    var bottomHtml = `
</div>
</div>
</body>
</html>`
 
 var finishHtml = topHtml + managerHtml + engineerHtml + internHtml + bottomHtml;
    return finishHtml
 }
 module.exports = generateHtml