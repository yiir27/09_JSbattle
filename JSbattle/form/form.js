function onFormSubmit(e) {
    var sheet = SpreadsheetApp.getActiveSheet().getSheetByName('form'); // スプレッドシートのアクティブシートを取得
    var row = sheet.getLastRow('E'); // 最後の行を取得
    var timestamp = e.values[0]; // フォーム送信時のタイムスタンプ
    var name = e.values[1]; // フォームに入力された名前    var title = e.values[3];
    var message = e.values[2]; // フォームに入力されたメッセージ
  
    sheet.getRange(row+1, 1).setValue(timestamp); // タイムスタンプをスプレッドシートに書き込み
    sheet.getRange(row+1, 2).setValue(name); // 名前をスプレッドシートに書き込み
    sheet.getRange(row+1, 3).setValue(message); // メッセージをスプレッドシートに書き込み
}