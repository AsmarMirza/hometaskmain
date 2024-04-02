let budget =500;
let isProgramRunning=true
while (isProgramRunning) {
    isProgramRunning=confirm("proqram davam etsinmi?")
    const userInput=prompt(`
    // 1-pul daxil et
    // 2-pul cek
    //3- balansi goster
    //4-proqram dayansin
    secmek istediyiniz reqemi daxil edin:
    `)
    switch (userInput) {
        case "1":
           const userInput1=prompt("daxil edilecek meblegi yazin")
           if (isNaN(userInput1)) {
            alert("reqem daxil edin")
            break;
           }
            budget+=+userInput1
        
            break;
            case "2":
            const userInput2=prompt("cekmek istediyiniz meblegi yazin")
            if (isNaN(userInput2)) {
                alert("reqem daxil edin")
                break;
               }
               if (budget<userInput2) {
                alert("balansinizda kifayet qeder mebleg yoxdur")
                break;
               }
            budget-=+userInput2
           
            break;
            case "3":
            alert(budget)
            break;
            case "4":
                isProgramRunning=false;  
                break; 
        default:
            break;
    }
  
    
}

// 1.pul daxil et
// 2.pul cek
// balansi goster