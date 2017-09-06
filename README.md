# mean-stack

mean.io、meanJSがどうにも理解できないうえに、バグがあったりするので、一から自分で作成するとともに、最終的にはひな形が作れたらいいなという願望。

## 使用技術

以下の技術を使用しようと思う

- mongoDB
- express
- angular4
- nodeJS

ここまでは基本形。あとは作っていくうえで少しずつ追加していく

- nodemon   : 開発用自動リビルド
- mongoose  : mongoDB接続


とりあえずは`webpack`は使わない
⇒よくわかんなくなったのでまずは入れてみる

## フォルダ構成

フォルダ構成は以下のように構成する。勉強していくうえで変更していく可能性あり

```
myApp
 ├──config
 ├──server          : サーバサイド資産
 |   ├──config      : 
 |   ├──controllers : 
 |   ├──helpers     : 
 |   ├──models      : 
 |   └──routes      : 
 ├──client          : クライアントサイド資産
 |   ├──app         : クライアント側メインモジュール
 |   ├──Assets      : 
 |   ├──meta        : 
 |   └──styles      : 
 └──start.js        : スタート用JS
```
 
## 状況

1. expressのインストール
1. `npm install`
1. `npm install nodemon --save`
1. mean.ioを参考にwebpackを導入