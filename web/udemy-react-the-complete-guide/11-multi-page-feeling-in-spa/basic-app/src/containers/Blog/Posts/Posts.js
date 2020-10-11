import React, { Component } from 'react';

import Post from '../../../components/Post/Post'
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data
                    .slice(0,4)
                    .map((post) => ({...post, author: 'Max'}));

                this.setState({posts})
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    };

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
