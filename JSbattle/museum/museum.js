// firebaseライブラリを読み込み
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

//firebaseconfig[KEYを取得して設定]
const firebaseConfig = {
    apiKey: "AIzaSyCm05cFe6v3wIMJ5oLn0goPv9c6Fn5K7Xs",
    authDomain: "museum-c4382.firebaseapp.com",
    projectId: "museum-c4382",
    storageBucket: "museum-c4382.appspot.com",
    messagingSenderId: "992255948171",
    appId: "1:992255948171:web:86b550dc9389e7853aab8e"
};
const app = initializeApp(firebaseConfig);

//googleAuth(認証用)
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
const auth = getAuth();

$("#login").on("click",function(){
    signInWithPopup(auth,provider).then((result) => {
        location.href = "../museumtop/museumtop.html";//次のページ
    }).catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
});

const img = document.getElementById('anime1');//ロゴ画像
const r = 'rotate-animation';
img.addEventListener('click',() =>{ //画像をクリック
    if(!img.classList.contains(r)){
        img.classList.add(r);
    } else {
        img.classList.remove(r);
        void img.offsetWidth;
        img.classList.add(r);
    }   
});

const img2 = document.getElementById('anime2');
const l = 'late-animation';
img2.addEventListener('click',() => {
    if(!img2.classList.contains(l)){
        img2.classList.add(l);
    } else {
        img2.classList.remove(l);
        void img2.offsetWidth; //リセットして再度再生
        img2.classList.add(l);
    }
});