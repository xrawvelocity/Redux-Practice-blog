import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import User from "./User";

class PostList extends Component {
  async componentDidMount() {
    await this.props.fetchPosts();
  }

  showPosts = () => {
    if (this.props.posts) {
      return this.props.posts.data.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h4>Title: {post.title}</h4>
            <p>Post: {post.body}</p>
            <User userId={post.userId}/>
          </div>
        );
      });
    } else {
      return <div className="loading">Loading</div>;
    }
  };

  render() {
    console.log(this.props);
    return <div className="posts">{this.showPosts()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
