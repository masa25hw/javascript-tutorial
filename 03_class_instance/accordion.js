// ========================================
// #2 (class, instance)
// ========================================
(() => { // 即時関数
    // クラスの定義
    class Accordion {
        // 初期化
        // クラスが呼ばれた時に一番最初に実行される
        constructor(obj){
            // debug
            // console.log('obj', obj.hookName);

            const $elm = document.querySelector(obj.hookName); // idのDOMを取得
            const $trigger = $elm.getElementsByTagName(obj.tagName);

            const trrigerLen = $trigger.length;
            let index = 0;
            while (index < trrigerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                // this: classそのものを参照する(今回の場合は、Accordion.clickHandlerという意味になる)
                index++;
            }
        }

        // クリックしたら実行される処理
        clickHandler(e){
            e.preventDefault(); // この処理によりaタグのリンクが無効化される

            const $target = e.target;
            const $content = $target.nextElementSibling; // triggerの次の要素を取得
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }

            this.actionHoge($content.style.display);

            // === debug ===
            // console.log(e);
            // console.log('Clicked!');
        };

        actionHoge(arg){
            // debug
            // console.log('Hello Masanao!', arg);
        }
    }

    // インスタンス生成
    const faq = new Accordion({
        // インスタンス生成時にid名を変えたい
        hookName: '#js-faq', // id名を指定
        tagName: 'p' // pタグを指定
    });

    const accordion = new Accordion({
        // インスタンス生成時にid名を変えたい
        hookName: '#js-accordion', // id名を指定
        tagName: 'a' // pタグを指定
    });

    const accordionmini = new Accordion({
        // インスタンス生成時にid名を変えたい
        hookName: '#js-accordion-mini', // id名を指定
        tagName: 'dt' // pタグを指定
    });

})();


// ========================================
// #1 （non-class, non-instance)
// ========================================
// (() => { // 即時関数
//     const $elm = document.querySelector('#js-accordion'); // idのDOMを取得
//     const $trigger = $elm.getElementsByTagName('a');

//     const trrigerLen = $trigger.length;
//     let index = 0;
//     while (index < trrigerLen) {
//         $trigger[index].addEventListener('click', (e) => clickHandler(e));
//         index++;
//     }

//     // クリックしたら実行される処理
//     const clickHandler = (e) => {
//         e.preventDefault(); // この処理によりaタグのリンクが無効化される
//         console.log(e);
//         // const $target = e.currentTarget;
//         const $target = e.target;
//         const $content = $target.nextElementSibling; // triggerの次の要素を取得
//         if($content.style.display === 'block'){
//             $content.style.display = 'none';
//         } else {
//             $content.style.display = 'block';
//         }

//         // === debug ===
//         // console.log('Clicked!');
//         // console.log('Clicked!');
//     };

// })();

