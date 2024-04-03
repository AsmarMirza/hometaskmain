// 1. arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]

// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)
const arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]
function checkEven(arr) {
    let maxEven=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0 && arr[i]>maxEven) {
            maxEven=arr[i]
        }
    }
    return maxEven
}
function checkOdd(arr) {
    let minOdd=arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!=0 && arr[i]<minOdd) {
            minOdd=arr[i]
        } 
    }
    return minOdd
}
// console.log(checkEven(arr));
// console.log(checkOdd(arr));
arr[arr.indexOf(checkEven(arr))]=checkOdd(arr)
arr[arr.indexOf(checkOdd(arr))]=checkEven(arr)
console.log(arr);


// Verilmis arrayin  daxilinde qiymeti  50 den cox olanlari array kimi qaytaran kod yaz  (array  methodlarina nezer yetir)


 var  arr = [  
    { urunAdi: "Beyaz Ekmek",fiyat: 2.5, stok: 100, kategori: "Ekmek" },
    { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
    { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
    { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
    { urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
    { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
    { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
    { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
];

// function checkArr(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].fiyat>5) {
//         newArr.push(arr[i])
//        }
//     }
//     return newArr
// }
// console.log(checkArr(arr) );
let highPrice=arr.filter(urun=> urun.fiyat>5)
console.log(highPrice);

// 3. yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
let category=arr.filter(urun=>urun.kategori=="Meyve ve Sebzeler")
category.forEach(urun=> console.log("urun adi:"+ " " +urun.urunAdi+" " + "fiyat:"+" "+urun.fiyat+" "+"stok:"+ " "+ urun.stok+" "+"kategori:"+ " "+urun.kategori))


// 4.   yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari   ve stokda  2 den cox olanlari   ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
let categoryStock=arr.filter(urun=>urun.kategori=="Meyve ve Sebzeler"&&urun.stok>50)
categoryStock.forEach(urun=>console.log("urun adi:"+ " " +urun.urunAdi+" " + "fiyat:"+" "+urun.fiyat+" "+"stok:"+ " "+ urun.stok+" "+"kategori:"+ " "+urun.kategori))

// 5.  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz    (array  methodlarina nezer yetir)

let haveMilk=arr.some(urun=>urun.urunAdi=="Süt")
if (haveMilk) {
   console.log("sut adli mehsul var"); 
}
else{
    console.log("sut adli mehsul yoxdur"); 
}

// 6.  yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (array  methodlarina nezer yetir)
let urunIndex=arr.findIndex(urun=>urun.urunAdi === "Ton Balığı")
console.log( urunIndex);

