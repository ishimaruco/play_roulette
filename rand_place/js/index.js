// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;

// 行きたい場所を配列にぶち込む
// var food = [
// 					'<a href="https://tabelog.com/tokyo/A1319/A131904/13162480/" target="_blank">高円寺「アイノワール」:オムライス</a>',
// 					'<a href="https://r.gnavi.co.jp/g485010/" target="_blank">池袋「駄菓子バー」:駄菓子</a>',
// 					'<a href="https://www.enjoytokyo.jp/shopping/event/1445788/" target="_blank">乃木坂「ダンデライオン」:チョコレートドリンク</a>',
// 					'<a href="https://tabelog.com/tokyo/A1319/A131904/13108909/" target="_blank">高円寺「たちばな」:餃子</a>',
// 					'<a href="http://www.sweets-forest.com/kaka.html" target="_blank">自由が丘「果香」:ゼリー</a>',
// 					'<a href="https://tabelog.com/tokyo/A1320/A132001/13031791/" target="_blank">吉祥寺「カウラナコーンバレー」:肉</a>',
// 					'<a href="https://tabelog.com/tokyo/A1311/A131102/13153620/" target="_blank">浅草「壽々喜園」:抹茶アイス</a>',
// 					'<a href="http://anywheredoor.jp/" target="_blank">原宿「エニウェア・ドア」:りんごのケーキ</a>',
// 					'<a href="https://tabelog.com/tokyo/A1304/A130401/13129407/" target="_blank">西新宿「天府舫」:餃子</a>',
// 					'<a href="https://tabelog.com/tokyo/A1311/A131101/13170658/" target="_blank">上野「上野500バル」:ピザ500円</a>',
// 					'<a href="https://tabelog.com/kanagawa/A1405/A140501/14067292/" target="_blank">京急川崎「ステーキ丼専門店Beef bank」:ステーキ</a>',
// 					'<a href="https://ibarakimarche.com/" target="_blank">有楽町「茨城マルシェ」:メロンパフェ</a>',
// 					'<a href="https://www.hotpepper.jp/strJ001144724/" target="_blank">赤坂見附「銀だこ」:セルフたこ焼き</a>',
// 					'<a href="https://tabelog.com/tokyo/A1309/A130905/13207277/" target="_blank">飯田橋「ふくぼく」:ラーメン</a>',
// 					'<a href="https://tabelog.com/tokyo/A1324/A132402/13089889/" target="_blank">北千住「楽空」:豆腐食べ放題</a>',
// 					'<a href="https://tabelog.com/tokyo/A1319/A131905/13158422/" target="_blank">阿佐ヶ谷「でんでん串」:おでん・串カツ</a>',
// 					'<a href="https://tabelog.com/tokyo/A1305/A130503/13212569/" target="_blank">高田馬場「マニト」:焼肉</a>',
// 					'<a href="https://tabelog.com/tokyo/A1301/A130103/13060578/" target="_blank">銀座「KOSO」:牛トロ丼</a>',
// 					'<a href="https://tabelog.com/tokyo/A1313/A131303/13070790/" target="_blank">南砂町「喜代寿司」:寿司</a>',
// 					'<a href="http://kajitsuen.jp/" target="_blank">東京「果実園」:フルーツパーラー</a>'
// 				]
var ary = [
					'<a href="http://colopl.co.jp/news/pressrelease/2017103001.php" target="_blank">恵比寿「コロプラキャナルウォーク」:イルミネーション</a>',
					'<a href="http://www.tokyo-odaiba.net/rainbow/hanabi2017.html" target="_blank">お台場「レインボー花火」:花火</a>',
					'<a href="https://www.enjoytokyo.jp/museum/event/1372777/" target="_blank">浅草橋「まるっと小動物展」:動物</a>',
					'<a href="https://gardenplace.jp/special/2017christmas/" target="_blank">恵比寿「ガーデンプレイス」:イルミネーション</a>',
					'<a href="http://www.toshimaen.co.jp/winter_fantasia2017-2018/" target="_blank">豊島園:イルミネーション</a>',
					'<a href="https://sp.jorudan.co.jp/illumi/spot_0114.html" target="_blank">汐留「カノン・ダジュール」:イルミネーション</a>',
					'<a href="http://www.tokyo-midtown.com/jp/event/3766/" target="_blank">六本木「ミッドタウンイルミネーション」:イルミネーション</a>',
					'<a href="http://omotesando.or.jp/illumi/" target="_blank">表参道「表参道　イルミネーション」:イルミネーション</a>',
					'<a href="http://www.ozmall.co.jp/xmas/date/11338/" target="_blank">押上「リサとガスパールと過ごすフランスのクリスマス」:イルミネーション</a>',
					'<a href="https://tokyochristmas.net/" target="_blank">日比谷「クリスマスマーケット」:クリスマスマーケット</a>',
					'<a href="http://www.ozmall.co.jp/xmas/date/11644/" target="_blank">元町・中華街「世界のクリスマス2017」:クリスマス体験</a>',
					'<a href="http://www.yomiuriland.com/jewellumination/" target="_blank">京王よみうりランド「よみうりランド」:イルミネーション</a>'
				];

// スタートボタンを押したときの処理
function clickedStart() {
	'use strict';
	isStart = true;
	startBtn.disabled = "disabled";
	intervalID = setInterval(function() {
		if(isStart==true) {
			place = ary[Math.floor( Math.random() * ary.length )];
			roulette.className = 'name';
			document.getElementById("isPlace").innerHTML = place;
		}
	}, 100);
}

// ストップボタンを押した時の処理
function clickedStop() {
	'use strict';
	clearTimeout(intervalID);
	startBtn.disabled = "";
	isStart = false;
	if(place == '') {
		alert("スタートボタンを押してからストップボタンを押してね！");
	} else {
// 結果を画面に表示
	roulette.className = 'name';
	document.getElementById("isPlace").innerHTML = place;
	}
}
