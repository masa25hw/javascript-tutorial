# JavaScript学習

## 参考
### HTML5 Boilerplate
HTML5のサイトが素早く作れるフレームワーク
- [HTML5 Boilerplate](https://html5boilerplate.com/)

### Bootstrap
Bootstrap: ボタン、見出し、リストなどのパーツをコピペで使えるように提供しているフレームワーク
- [Bootstrap](https://getbootstrap.com/)

## Bootstrap
いい感じにWebサイトにFitするように整形してくれるCSSのclass。
レスポンシブ対応: PC、スマホ、タブレットなど様々なデバイスに表示を最適化できるテクニック。

```html
<div class="container">
```


## アプリケーションの構築
クイズゲームの構築。

### 設計フェーズ
いきなりコードを書くのではなく、作る前にどのような機能を付けるか等を決めておく。  
下記2つのドキュメントを作成する。

1. 画面設計図（ワイヤー）
1. フローチャート

#### 画面設計図
- フロントエンドにおける見た目の設計図。

実際の開発現場では、AdobeXDなどのアプリで作成して、詳細を書き込んでいく。
ページ数に応じて設計が必要

#### フローチャート
プログラムのロジックと処理の流れを図にしたもの。

### コーディング


### リファクタリング
リファクタリング: ソフトウェアの外部的振舞いを保ちつつ、理解や修正が簡単になるように、内部構造を改善すること

## BEM
[５分でCSS設計規則「BEM」をおさらい](https://cloudsmith.co.jp/blog/frontend/2021/03/1742107.html)

Block　Element　Modifier　の頭文字からきており、
- Block -> 大きな括り
- Element -> ブロックの中の要素
- Modifier -> ブロックやエレメントの変化

上記３つを用いた厳格な命名規則が特徴のCSS設計手法。


```css
<div class="Block">
  <div class="Block__element">
    <div class="Block__element--modifier"></div>
  </div>
</div>
```

## SaasとLESS
[SassとLESSの違い ー CSSプリプロセッサ入門 ー](https://blog.asial.co.jp/1456)


## ES6
### ES2015(ES6)とは
ECMASCriptの6th Editionのこと。ECMAScript 6th editionの6を取ってES6と呼ばれていたが、2015年に標準化されたため正式名称はES2015になった。

## DOM
[DOMとは](https://www.javadrive.jp/javascript/dom/index1.html#:~:text=DOM%20%E3%81%A8%E3%81%AF%20Document%20Object,%E3%81%8C%E8%A1%8C%E3%82%8F%E3%82%8C%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%80%82)

DOM とは Document Object Model の略で HTML や XML 文書を取り扱うための API です。 DOM は標準化団体である W3C で以前は標準化が行われていましたが、現在では WHATWG によって標準化が行われています。

DOM はドキュメントオブジェクトモデルという名前の通り、 HTML や XML のドキュメントに含まれる要素や要素に含まれるテキストのデータをオブジェクトとして扱います。そしてドキュメントをオブジェクトが階層的に組み合わされたものとして識別します。 そして DOM では JavaScript など色々なプログラミング言語などから、オブジェクトを扱うための API を提供しています。

DOM ではドキュメントを構成するオブジェクトのことを「ノード」と呼びます。ノードはさらに種類に応じて「要素ノード」「テキストノード」「属性ノード」などに分類されます。

Web ページに記述した JavaScript から DOM を使用することで、 Web ページ上のテキストデータを読み込んだり、新しい要素を追加したり、 Web ページ上に表示されたボタンがクリックされた時にあらかじめ設定した処理を行うことができるようになります。

## メモ
JavaScriptでDOMを操作したいが、idやclassを使いたくない場合、data属性を使うとよい。


## 即時関数
