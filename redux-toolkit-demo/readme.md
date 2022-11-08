<p>Code changes for this lesson is present in:</p>
<p>redux-toolkit-demo/app/store.js</p>
<p>and</p>
<p>redux-toolkit-demo/index.js</p>

<p>We added the redux-logger middleware in the configure store.</p>
<p>Watch video 22 for this lesson</p>
<a href="https://www.youtube.com/watch?v=dUVXHMHJio0&t=10s">Video 22</a>

<p><b>Note:</b> Look at the log output by the redux-logger middleware</p>
<p>for example: </p>
<p>prev state { cake: { numOfCakes: 10 }, icecream: { numOfIceCreams: 20 } }</p>
<p>action     { type: 'cake/ordered', payload: undefined }</p>
<p>next state { cake: { numOfCakes: 9 }, icecream: { numOfIceCreams: 20 } }</p>

<p>Look at the action object. Now, focus on the action type, it is 'cake/ordered'. It is automatically created by redux-toolkit for us. Earlier, we had to define all the action strings by ourselves</p>
