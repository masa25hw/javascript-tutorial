
// sample code
// https://github.com/seito-developer/js-tutorial

// =====================================================
// 変数
// =====================================================
// note: 昔はvarで定義していたが、letとconstの概念が混同していたため、最新のJavaScriptのバージョンではletとconstを使い分けるのが通例。
let t_val = 'Hello World!';

// 配列
let t_arr = ['zero', 'one', 'two', 'three', 'four']

// =====================================================
// 定数
// =====================================================
// 書き換えができない
const EMPLOY_NUM = '1558089';
// 定数も同様に配列として定義可能
const VARI = ['4101', '4102', '4103'];


t_val = 'Hello JavaScript!';

// ブラウザのConsoleで実行結果を確認
// console.log(t_val);
// console.log(t_arr[1]);

// =====================================================
// ループ文
// =====================================================
// let index = 0;
// while(index < t_arr.length){ // t_arrの配列最大要素数より小さい場合は実行する
//     // 繰り返したい命令
//     console.log(index);
//     console.log(t_arr[index]);
//     index++;
// }

// if / else文
// if(t_arr.length > 7){
//     console.log('Yeah!')
// }
// else {
//     console.log('Wow!')
// }

// =====================================================
// 関数
// =====================================================
// 1. 同じ命令を何度も使いたい時に使う
// 2. 任意のタイミングで命令を実行させい時に使う
// 下記はallow関数と呼ばれる書き方
// 型はconstではなくletでもよいが、上書きするものでもないのでconstで書くのが安牌
const func_test = (arg) => {
    // ここに実行したい命令を書く
    if(t_arr.length > arg){
        console.log('Yeah!');
    }
    else {
        console.log('Wow!');
    }
};
// こういう書き方もできるが上記の書き方(allow関数)で十分
const func_test2 = function() {
    // ここに実行したい命令を書く
    if(t_arr.length > 7){
        console.log('Success!');
    }
    else {
        console.log('Failure!');
    }
};

// 関数の実行
// func_test(3);
// func_test(5);
// func_test2();

// =====================================================
// オブジェクト
// =====================================================
// データの塊
const obj = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    func_dummy: () => { // 関数を追加することもできる
        console.log('Hello world!');
    }
};

console.log(obj);
// オブジェクトの中の一意のプロパティを表示することもできる
console.log(obj.color);
console.log(obj.func_dummy()); // 関数をコールする場合は左記のように実装する

// =====================================================
// 特殊なオブジェクト
// note: 予めJavaScriptで登録されているオブジェクトがある
// =====================================================
// window
// Webブラウザ全体のオブジェクト
// 今開いているブラウザ上の情報を取得したい場合や、このブラウザに何かさせたい場合に使う
console.log(window);
// windowの横幅を取得する場合
console.log('innerHeight:' + window.innerHeight);
// アラートを表示させる場合
// window.alert('Hello Masanao!')

// document
// 表示しているページ全体のオブジェクト(DOMtreeとかと言ったりする)
// console.log(document);
// getElementsByTagName: HTMLの何かを指定・参照したい時に使う
// console.log(document.getElementsByTagName('button'));
// 配列として取得した要素1つ1つにアクセスすることも可能
// console.log(document.getElementsByTagName('button')[0]);

// event
// ユーザーのアクションをしたタイミングで何かをしたい時に使う
// eventは、clickだけでなく、windowをloadのイベントや、スクロールのイベントを発行できる
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    //命令を書く
    window.alert('Hello Masanao, click OK!')
});


