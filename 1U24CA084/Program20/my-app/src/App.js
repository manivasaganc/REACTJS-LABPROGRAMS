import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css'

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our website.</p>
    </div>
  );
}

// Parent Route
function Blog() {
  return (
    <div className="page">
      <h1>Blog</h1>

      <nav className="blog-nav">
        <Link to="1">React JS</Link>
        <Link to="2">JavaScript</Link>
        <Link to="3">CSS</Link>
      </nav>

      {/* Child routes appear here */}
      <Outlet />
    </div>
  );
}

// Child Routes
function BlogPost() {
  return (
    <div className="post">
      <h2>Blog Post</h2>
      <p>This is an individual blog post.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="/blog" element={<Blog />}>

          {/* Nested Child Routes */}
          <Route path="1" element={<BlogPost />} />
          <Route path="2" element={<BlogPost />} />
          <Route path="3" element={<BlogPost />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;