// GitHub: https://github.com/seito-developer/js-quiz-apps

// 配列の中にオブジェクトを格納できる
const quiz = [
    {
      question: 'ゲーム史上、最も売れたゲーム機はどれ？',
      answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
      correct: 'ニンテンドーDS'
    }, {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
      correct: 'MOTHER2'
    }, {
      question: 'ファイナルファンタジーⅣの主人公の名前は？',
      answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
      correct: 'セシル'
    }
  ];

// const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//     'スーパーファミコン',
//     'プレステーション2',
//     'Nintendo switch',
//     'Nintendo DS'
// ];
// const correct = 'Nintendo DS';

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0; // 何問正解したかを記憶

// console.log(document.getElementsByTagName('div'));

// HTMLタグに付与したid属性を取得する
// console.log(document.getElementById('js-question'));
// document.getElementById('js-question'); // object扱い

// textContent: このHTMLタグが持っているテキスト情報を取得するプロパティ
console.log(document.getElementById('js-question').textContent);

// HTMLのオブジェクトを取得する場合は変数・定数名に$を付与するのが通例
// $が付いていることで、HTMLのオブジェクトが入っていることが理解しやすい
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映させる
// テキスト情報の書き換え
// クイズの問題文、選択肢を定義
const setupQuize = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        // ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setupQuize();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++; // 正解した場合はスコアを加点
    } else {
        window.alert('不正解！');
    }

    // 次の問題に進むような命令を追加
    quizIndex++;
    if (quizIndex < quizLength){
        // 次の問題があればこちらを実行
        setupQuize();
    } else {
        // 問題がもうなければこちらを実行
        // 結果の表示
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        // e: eventのオブジェクト（イベント自体もオブジェクト）
        // ブラウザ上のどこをクリックしたか等の情報が格納されている
        // console.log(e);
        clickHandler(e);
    });
    handleIndex++;
}

// before refactoring #2
// $button[0].addEventListener('click', (e) => {
//     // e: eventのオブジェクト（イベント自体もオブジェクト）
//     // console.log(e);
//     clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//     clickHandler(e);
// });

// before refactoring #1
// $button[0].addEventListener('click', () => {
//     if (correct === $button[0].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
// $button[1].addEventListener('click', () => {
//     if (correct === $button[1].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
// $button[2].addEventListener('click', () => {
//     if (correct === $button[2].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
// $button[3].addEventListener('click', () => {
//     if (correct === $button[3].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
