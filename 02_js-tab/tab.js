// ============
// 即時関数
// ============
// note:
// 即時関数を無しで書いてしまうと「グローバルを汚染する」という意味合いになる
// 複数のjsファイル上で同名の変数を定義した時、変数がぶつかってしまってエラーになる。
// 複雑な処理になるほどエラー原因になりやすいので、即時関数を使うことが推奨されている。
// -----
// usage:
// (()=>{
//      ...
// } )();
// ============
(()=>{
    // ここに命令を書く
    // 変数に$マークを付けると、DOM要素であることを明示的に表す(coding rules)
    const $doc = document;
    const $tab = $doc.getElementById('js-tab'); // JavaScriptが引っかかるものはなるべくidを使ってあげる
    const $nav = $tab.querySelectorAll('[data-nav]'); //querySelectorAll: DOM要素の中から条件に当てはまるDOMを取得する
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active'; // 定数は大文字で明示的に示す
    const navLen = $nav.length

    // === debug ===
    // console.log($tab)
    // console.log($nav)
    // console.log($content)

    // 初期化
    const init = () => {
        $content[0].style.display = 'block'; //1つ目の要素だけ見えるようにしたいのでblockにする
    };
    init();

    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault(); // クリックイベントを一回無視する

        // クリックされたbavとそのdataを取得
        // ★よく使うテクニック
        // target: クリックされた要素のDOM要素を取得する
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        // ★よく使うテクニック
        // dataset: そのDOM要素のデータ属性の値を取得
        // dataset.navというのは、data-navの"nav(データ属性名)"の値を取得するの意味

        // 対象外のnav,contentをresetする
        let index = 0;
        while (index < navLen) {
            $content[index].style.display = 'none'; // コンテンツエリアをすべて非表示にする
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        // 対象コンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block'; // 動的にコンテンツを取得
        $nav[targetVal].classList.add(ACTIVE_CLASS);
        // classList: DOM属性についているclass属性の一覧を取得
        // add: リストの中に文字列を追加

        // === debug ===
        // console.log('Clicked!');
        // console.log('$this', $this);
        // console.log('targetVal', targetVal);
        // console.log('$nav[targetVal].classList', $nav[targetVal].classList);
    }

    // 全nav要素に対して関数を実行
    let index = 0;
    while (index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }
} )();



