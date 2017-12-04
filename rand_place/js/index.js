// 変数宣言
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var roulette = document.getElementById('roulette');
var place = '';

// 行きたい場所を配列にぶち込む
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

// スタートボタンを押したときの処理
function clickedStart() {
	'use strict';
	roulette.insertAdjacentHTML('afterend',place);
	startBtn.addEventListener('click' , function() {
		//シャッフルをはじめる
	place = ary[Math.floor( Math.random() * ary.length )];


	roulette.className = 'name';
	roulette.textContent = place + "に行く！";
	});
};

clickedStart();

// ストップボタンを押した時の処理

function clickedStop() {
	'use strict';
	stopBtn.addEventListener('click' , function() {
		// じんわり止める処理
	});
}
