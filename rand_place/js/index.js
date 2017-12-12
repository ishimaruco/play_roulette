// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;

// 行きたい場所を配列にぶち込む
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
