import React from 'react'
import ReactDOM from 'react-dom' // スラッシュ[/]がないとnode_modulesからの物になる

import App from './App'

// ReactDOM.render(React.createElement('h1', {}, 'hello, world'), document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'))

//react は　SPA(シングルページアプリケーション)
//一つのhtmlを読み込んで、コンテンツの入れ替えやページ遷移などを全てJSで処理していく