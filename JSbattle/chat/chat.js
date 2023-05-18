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
const dbRef = ref(db, "museum");

//GoogleAuth用
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();

//ログインしていれば以下の動作を処理
onAuthStateChanged(auth, (user) => {
    if(user) {
        uid = user.uid;
        if(user !== null) {
            //ログイン情報取得
            user.providerData.forEach((profile) => {
                $("#uname").text(profile.displayName);
                $("#prof").attr("src",profile.photoURL);
            });
        }    
    } else {
        _redirect();
    }
});

//送信
function send() {
    const timestamp = new Date().getTime(); //日時を取得
    const msg = {   //情報を配列して格納
        text : $("#text").val(),
        uid  : uid,
        timestamp : timestamp,
        userPhoto : $("#prof").val()
    };
    const newPostRef = push(dbRef); //ユニークキーを発行する
    set(newPostRef, msg); //ユニークキーにmsgのオブジェクトを紐づける
    $("output").scrollTop($("#output")[0].scrollHeight);//最新の場所にスクロールされる
    $("#text").val("");//送信したら入力画面の中身を空にする
};

//データベースからデータを取得する
onChildAdded(dbRef,function(data){ //新しい子要素を持つobject(data)を引数とする
    const msg = data.val(); //objectデータを取得
    const key = data.key; //ユニークkeyを取得。削除するときに使う
    //日時を取得
    const timestamp = msg.timestamp; //msgの中のtimestampを取得
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); //slice(-2)は2桁で表示
    const day = ("0" + date.getDate()).slice(-2);
    const ymd = year + "/" + month + "/" + day;
    //uid
    const mymsg = msg.uid === uid; //発信者のuidとログインuidを比較
    const msgclass = mymsg ? "my_msg":"other_msg";
    //削除ボタン付与
    const delBtn = mymsg ? '<div class="del_btn><img src="../IMG/trash.png"></div>';
    //プロフ画像を付与
    const photo = mymsg ? '': '<img class="icon" src="'+msg.userPhoto+'" width="50" height="50">';
    const h = '<div class="del" data-key="'+key+'">'+photo+'<div class="'+msgclass+'""><div class="m"><p>'+msg.text+'</p></div><div class="ydm"><p>'+ydm+'</p><div class="btn">'+delBtn+'</div></div></div><div>';
    $("#output").append(h);
    $("#output").scrollTop($("#output")[0].scrollHeight);
});
//クリックで削除
$(document).on("click","btn",function(){
    const key = $(this).parent().parent().parent().data("key"); //クリックした要素を含む親要素の持つkeyを指定する
    console.log(key);
    //if(confirm("この投稿を削除しますか？"))アラート表示
    Swal.fire({
        title: 'この投稿を削除しますか？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        //ウィンドウを閉じるとDismissReason(キャンセルボタン押した場合は"cancel")という値が返される
        if (result.dismiss !== Swal.DismissReason.cancel){
            remove(ref(db,"museum/"+"chat/"+key));
            $(this).parent().parent().remove();
            Swal.fire(
                '削除しました',
                '投稿を削除しました',
                'success'
            )
        } else { //キャンセルボタンがクリックされたら
            Swal.fire(
                'キャンセルしました',
                '投稿は削除されませんでした',
                'info'
            )
        }});
});

$("#out").on("click",function(){
    signOut(auth).then(() =>{
        _redirect();
    }).catch((error) =>{
        console.error(error);
    })
});
function _redirect(){
    location.herf = "../museum/museum.html";
}