// Statik yox Dinamik type proqramlasdirma dilidir 
// menimsetme
//verilen data

//verilenin tipleri
// Proqramlasdirma = "81"
// EtikHacking = 91

// console.log("81" +91) //172
// toplama deyil stringlerin birlesdirilmesidir
//verilenin tipleri
//string (metnler) cut dirnaq"" tek dirnaq'' eyri dirnaq`` icinde yazilirsa bu stringdir

// transiatr (masin dilinden tercime): interprator ve compliatr dillerinden ibaretdir 
// Java script interprator dilidir melumatlari bir-bir setirbesetir oxuyur
// Pyton C sap compliatr dilidir melumatlar hamisini birden oxuyur

// Deyishen (telebeninAdi deyishendir)
// camelCase(telebeninAdi ortadaki boyuk herfe gore camelCase deyilir)
// RAM Ramdom Access Memory (Yaddash); CPU Central Processing Unit (Beyin)
telebeninAdi = "Elmar" //string
telebeninYashi = 20 // number
tebeninEvlilikStatusu = false // boolean
telebeninKursgostericisi = null // null
//  EN ONEMLISI {}
// [] Array Massiv Matris
//verilenlerin kompleks tipleri

console.log(telebeninAdi, telebeninYashi)

fakestoreapi.com/products

birinciTelebe = {
    ad: "Elmar",
    soyad: "Misirzade",
    age: 20,
    isEducated:true 
} //obyekt

ikinciTelebe = {
    ad: "Elgun",
    soyad: "Resulov",
    age: 19,
    isEducated:true 
} 

"use strict" // telebeler - bele deyishen yazmaq olamaz 
             // telebeler qabaginda "var let const" biri yazilmalidir
telebeler = [ // kvadrat moterizeden sonra [0] olur, 
             //harda  0 var for-lar gozumuzun qabagina gelmelidir
    { //key:value
        ad:"Elmar",
        soyad:"Misirzade",
        age:20,
        isEducated:true
    },

    {    // sonra [1] gelir
        ad: "Elgun",
        soyad: "Resulov",
        age: 19,
        isEducated:true 
    } 

]

console.log(telebeler[telebeler.length-1].ad)
console.log(telebeler[0].age)

// dovr operatorlari
for( var i=0; i<telebeler.length; i++) {
    console.log(telebeler[i])
}

//var let const