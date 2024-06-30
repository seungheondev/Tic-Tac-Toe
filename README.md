# 三目並べゲーム
・useState

useStateは、関数コンポーネントのstateを保持したり、更新したりするためのフック


stateがオブジェクトや配列であれば、stateを更新する時に、その状態を更新できないようにしたほうがいい。なぜなら、stateがオブジェクトや配列であれば、その値はjavascriptの参照値だから、stateが更新される時にバグが起こる可能性がある。つまり、以前のstateを複製してオブジェクトあるいは、配列として保存して、複製されたstateを修正する。

![image](https://github.com/seungheondev/Tic-Tac-Toe/assets/170543088/224bc529-8630-4991-bc70-36d4bfed978e)

・stateのリフトアップとは？

複数のコンポーネント間で共有される状態を、上位の親コンポーネントで管理すること。

REACTでは、制御する数は最小限にして各stateでできるだけ多い情報と多い値を派生することが一番大事。

![image](https://github.com/seungheondev/Tic-Tac-Toe/assets/170543088/5af6066c-6ee0-4849-829c-a1118ee6206e)


・リフトアップをしてはいけない状況

PlayerコンポーネントではPlayerの名前を編集・保存をしている。しかし、このコンポーネントはアプリの内部で名前を共有していない。つまり、このPlayerの名前を取得してAppコンポーネントに持ってくることが必要だ。でもここでのリフトアップは間違ってる。

![image](https://github.com/seungheondev/Tic-Tac-Toe/assets/170543088/989ebe83-03e9-4dbd-ab17-2f37bf2c4ff6)

なぜなら、タイピングを入力されるたびに入力フィールドをstate更新に使ってるからだ。これをリフトアップしたら、Appコンポーネント全体がタイピングをするたびに更新されてしまう。

![image](https://github.com/seungheondev/Tic-Tac-Toe/assets/170543088/9b2e3663-91cc-4608-af9b-a617d24a84d9)

![image](https://github.com/seungheondev/Tic-Tac-Toe/assets/170543088/b4aeee72-1424-4df4-b545-d68fc8051c57)


