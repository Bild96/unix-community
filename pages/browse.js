import Link from 'next/link';
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
import Post from '../components/browser/Post';


function BrowsePost() {

  const {posts} = useContext(GlobalContext);

  const renderPosts = () => {
    return (
      <>
      <button
        className="nav-link dashboardButton"
        onClick={() => router.push('/create')}
      >
        Create Posts
      </button>
      {
        posts.map((post, index) => (
          <div key={index}>
            <Post
              title={post.title}
              text={post.text}
              comments={post.comments}
              likes={post.likes}
              postId={post.id}
            />
          </div>
        ))
      }
      </>
    )
  }

  return (
    <div className="App">
      <Link href={'/dashboard'}>
        <a className="back">&lt;</a>
      </Link>
      <h1>Browse Page</h1>
      {posts.length ? renderPosts() : null}
    </div>
  );
}

export default BrowsePost;
