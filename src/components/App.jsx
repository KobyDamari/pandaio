import React from 'react';
import 'assets/scss/App.scss';
import CommentFeed from'./CommentFeed/CommentFeed';

class App extends React.PureComponent {
    render() {
        return (
            <div className="app">
                <CommentFeed/>
            </div>
        );
    }
}

export default App;
