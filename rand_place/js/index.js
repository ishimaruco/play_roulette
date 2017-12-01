(function arrayPlace(){
	'use strict';
	var startBtn = document.getElementById('start');
	var roulette = document.getElementById('roulette');
	var place = '';
	roulette.insertAdjacentHTML('afterend',place);
	startBtn.addEventListener('click' , function(){
	//シャッフルする処理を書く
	//ストップボタンを押すファンクション作成
	//画面に結果を表示
	var ary = [
						"高円寺「アイノワール」:オムライス",
						"池袋「駄菓子バー」:駄菓子",
						"恵比寿「コロプラキャナルウォーク」:イルミネーション",
						"乃木坂「ダンデライオン」:チョコレートドリンク",
						"お台場「レインボー花火」:花火",
						"浅草橋「まるっと小動物展」:動物",
						"恵比寿「ガーデンプレイス」:イルミネーション",
						"としまえん:イルミネーション",
						"カレッタ汐留「カノン・ダジュール」:イルミネーション",
						"東京都「よみうりランド」:イルミネーション",
						"高円寺「たちばな」:餃子",
						"自由が丘「果香」:ゼリー",
						"吉祥寺「カウラナコーンバレー」:肉",
						"浅草「濃い抹茶アイス」:アイス",
						"原宿「エニウェア・ドア」:りんごのケーキ",
						"西新宿「天府舫」:餃子",
						"上野「上野500バル」:ピザ500円",
						"京橋「100% CholateCafe」:チョコレートカフェ",
						"川崎「ステーキ丼専門店Beef bank」:ステーキ",
						"銀座「茨城マルシェ」:メロンパフェ",
						"赤坂見附「銀だこ」:セルフたこ焼き",
						"神楽坂「ふくぼく」:ラーメン",
						"北千住「楽空」:豆腐食べ放題",
						"阿佐ヶ谷「でんでん串」:おでん・串カツ",
						"高田馬場「マニト」:焼肉",
						"銀座「KOSO」:牛トロ丼",
						"南砂町「喜代寿司」:寿司",
					];
	 place = ary[Math.floor( Math.random() * ary.length )];


	roulette.className = 'name';
	roulette.textContent = place + "に行く！";
	// roulette.insertAdjacentHTML('afterend',"<p>" + place + "に行く！</p>");
	});
})();

// $ = function(x) {
//   return document.getElementById(x);
// }

// // ビンゴ用数字配列
// var numList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

// var isStop = true;

// function startBingo() {
//   // ボタンの表示切り替え
//   $("start").style.display = "none";
//   $("stop").style.display = "inline";
//   isStop = false;
//   roulette();
// }

// function stopBingo() {
//   // ボタンの表示切り替え
//   $("start").style.display = "inline";
//   $("stop").style.display = "none";
//   isStop = true;
// }

// function roulette() {
//   var id = "";
//   var rnd = Math.floor(Math.random() * numList.length);

//   // ストップボタンが押された
//   if (isStop) {
//     // 遅延呼び出しを解除
//     clearTimeout(id);

//     $("view").innerHTML = numList[rnd];
//     if (!$("out").innerHTML) {
//       $("out").innerHTML = $("out").innerHTML + numList[rnd];
//     }
//     else {
//       $("out").innerHTML = $("out").innerHTML + "　" + numList[rnd];
//     }

//     //決定した数字をリストから削除する
//     numList.splice(rnd, 1);
//     // リストが空になったら終了
//     if (numList.length == 0) {
//       alert("最後です。");
//       $("start").disabled = true;
//     }
//     return false;
//   }

//   // 乱数を画面に表示
//   $("view").innerHTML = numList[rnd];
//   // 100ms後に再帰的に実行するよう登録する
//   id = setTimeout("roulette()", 100);
// }
