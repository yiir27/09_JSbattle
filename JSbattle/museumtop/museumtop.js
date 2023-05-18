//必要なJSを読み込み
import { initializeApp } 
    from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
    from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

//forebaseConfig[KEYを取得して設定！]
const firebaseConfig = {
    apiKey: "AIzaSyCm05cFe6v3wIMJ5oLn0goPv9c6Fn5K7Xs",
    authDomain: "museum-c4382.firebaseapp.com",
    projectId: "museum-c4382",
    storageBucket: "museum-c4382.appspot.com",
    messagingSenderId: "992255948171",
    appId: "1:992255948171:web:86b550dc9389e7853aab8e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);//Firebase-RealtimeDatabase接続
const db  = getDatabase(app); //RealtimeDBに接続
const dbRef = ref(db,"museum");

//GoogleAuth用
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
//loginしてれば処理します
onAuthStateChanged(auth, (user)=> {
    if(user) {
        const uid = user.uid;
        if (user !== null) {
            //ログイン情報取得
            user.providerData.forEach((profile) => {
                $("#uname").text(profile.displayName);
                $("#prof").attr("src",profile.photoURL);
            });
        }
    } else {
        _redirect(); //user is signed out
    }
});

// $("#chat").on("click",function(){
//     signInWithPopup(auth,provider).then((result) => {
//         location.href = "../chat.html";//次のページ
//     }).catch((error)=> {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//     });
// });

//ログアウト処理
$("#out").on("click", function(){
    signOut(auth).then(() => {
        _redirect();
    }).catch((error) => {
        console.error(error);
    });
});
//ログイン画面へ戻る
function _redirect(){
    location.href="../museum/museum.html";
}

//ハンバーガーメニュー
$(document).ready (function(){
    $('.menu').on('click',function(){
        $(this).toggleClass('active');
        $('.nav').slideToggle();
    });
});

const images = [  //画像の配列
    "../museumtop/sakuhinn/saku1.png",
    "../museumtop/sakuhinn/saku2.png",
    "../museumtop/sakuhinn/saku3.png",
    "../museumtop/sakuhinn/saku4.png",
    "../museumtop/sakuhinn/saku5.png" 
];
const selectedImages = [];
$(".img_b1 img").on("click",function(){
    var img = document.querySelector(".img_b1 img");
    var randomIndex = getRandomIndex(images, selectedImages);
    img.src = images[randomIndex];
});
function isntInArray(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex(imgArray, selectedArray){
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex(imgArray, selectedArray)//再帰処理
    }
}

const images2 = [
    "../museumtop/jiburi/jibu1.png",
    "../museumtop/jiburi/jibu2.png",
    "../museumtop/jiburi/jibu3.png",
    "../museumtop/jiburi/jibu4.png",
    "../museumtop/jiburi/jibu5.png",   
];
const selectedImages2 = [];
$(".img_b2 img").on("click",function(){
    var img2 = document.querySelector(".img_b2 img");
    var randomIndex2 = getRandomIndex2(images2, selectedImages2);
    img2.src = images2[randomIndex2];
});

function isntInArray2(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex2(imgArray, selectedArray){
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray2(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex2(imgArray, selectedArray)//再帰処理
    }
}

const images3 = [
    "../museumtop/italy1/ita2.png",
    "../museumtop/italy1/ita3.png",
    "../museumtop/italy1/ita4.png",
    "../museumtop/italy1/ita5.png",
    "../museumtop/italy1/ita6.png",
    "../museumtop/italy1/ita11.png"
];
const selectedImages3 = [];
$(".img_b3 img").on("click",function(){
    var img3 = document.querySelector(".img_b3 img");
    var randomIndex3 = getRandomIndex3(images3, selectedImages3);
    img3.src = images3[randomIndex3];
});

function isntInArray3(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex3(imgArray, selectedArray){
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray3(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex3(imgArray, selectedArray)//再帰処理
    }
}

const images4 = [
    "../museumtop/italy2/ita1.png",
    "../museumtop/italy2/ita7.png",
    "../museumtop/italy2/ita8.png",
    "../museumtop/italy2/ita9.png",
    "../museumtop/italy2/ita10.png"
];
const selectedImages4 = [];
$(".img_b4 img").on("click",function(){
    var img4 = document.querySelector(".img_b4 img");
    var randomIndex4 = getRandomIndex4(images4, selectedImages4);
    img4.src = images4[randomIndex4];
});

function isntInArray4(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex4(imgArray, selectedArray){
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray4(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex4(imgArray, selectedArray)//再帰処理
    }
}


const images5 = [
    "../museumtop/portu/portu1.png",
    "../museumtop/portu/portu2.png",
    "../museumtop/portu/portu3.png",
    "../museumtop/portu/portu4.png"
];
const selectedImages5 = [];
$(".img_b5 img").on("click",function(){
    var img5 = document.querySelector(".img_b5 img");
    var randomIndex5 = getRandomIndex5(images5, selectedImages5);
    img5.src = images5[randomIndex5];
});

function isntInArray5(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex5(imgArray, selectedArray){
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray5(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex5(imgArray, selectedArray)//再帰処理
    }
}

const images6 = [
    "../museumtop/eng/eng1.png",
    "../museumtop/eng/eng2.png",
    "../museumtop/eng/eng3.png",
    "../museumtop/eng/eng4.png",
    "../museumtop/eng/eng5.png",
    "../museumtop/eng/eng6.png"
];
const selectedImages6 = [];
$(".img_b6 img").on("click",function(){
    var img6 = document.querySelector(".img_b6 img");
    var randomIndex6 = getRandomIndex6(images6, selectedImages6);
    img6.src = images6[randomIndex6];
});

function isntInArray6(num, array){
    let isnt = true
    for(let i = 0; i < array.length; i++){
        if(num === array[i]) isnt = false
    }
    return isnt
}

function getRandomIndex6(imgArray, selectedArray){
    // console.log(imgArray.length, selectedArray.length) 確認する時に使用
    if(imgArray.length === selectedArray.length){
        selectedArray.splice(0)
    }
    
    let currentIndex = Math.floor(Math.random() * imgArray.length)
    if(isntInArray6(currentIndex, selectedArray)){
        selectedArray.push(currentIndex)
        return currentIndex
    }else{
        return getRandomIndex6(imgArray, selectedArray)//再帰処理
    }
}
