import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "How AI is Revolutionizing E-Commerce in 2024",
      category: "AI",
      date: "March 24, 2024",
      author: "Alex Rivera",
      img: "/Images/Sr1.png",
    },
    {
      title: "The Future of Web Development: Beyond React",
      category: "Technology",
      date: "March 20, 2024",
      author: "Elena Vance",
      img: "/Images/CR3.webp",
    },
    {
      title: "Data-Driven Marketing: A Guide for Startups",
      category: "Marketing",
      date: "March 15, 2024",
      author: "Marcus Thorne",
      img: "/Images/CR1.webp",
    },
  ];

  return (
    <section style={{ padding: "120px 0" }}>
      <div className="container">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="blog-mini-title">Blog</h1>

          <h2 className="blog-title-main">
            Insights & Innovation
          </h2>

          <p className="blog-desc">
            Stay updated with the latest trends in AI, technology, and digital growth strategies.
          </p>
        </div>

        {/* GRID */}
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div key={i} className="blog-item">
              {/* IMAGE */}
              <div className="img-wrapper">
                <span className="category">{post.category}</span>
                <img src={post.img} alt={post.title} />
              </div>

              {/* CONTENT */}
              <div className="content">
                {/* META INLINE */}
                <div className="meta">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                {/* TITLE */}
                <h3 className="title">
                  {post.title}
                </h3>

                <p className="desc">
                  Discover insights and strategies shaping the future of digital industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        /* HEADER */
        .blog-mini-title{
          font-size:14px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:3px;
          color:#7c3aed;
        }

        .blog-title-main{
          font-size:48px;
          font-weight:900;
          background: linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-desc{
          font-size:18px;
          color:rgba(0,0,0,0.6);
        }

        /* GRID */
        .blog-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:40px;
          margin-top:60px;
        }

        /* ITEM */
        .blog-item{
          display:flex;
          flex-direction:column;
          gap:16px;
        }

        /* IMAGE */
        .img-wrapper{
          position:relative;
          border-radius:28px;
          overflow:hidden;
          aspect-ratio:16/10;
        }

        .img-wrapper img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:transform 1s ease;
        }

        .blog-item:hover .img-wrapper img{
          transform:scale(1.15);
        }

        /* CATEGORY */
        .category{
          position:absolute;
          top:16px;
          left:16px;
          padding:6px 14px;
          font-size:11px;
          font-weight:800;
          text-transform:uppercase;
          letter-spacing:2px;
          background:rgba(255,255,255,0.7);
          backdrop-filter:blur(10px);
          border-radius:999px;
          color:#7c3aed;
          z-index:2;
        }

        /* CONTENT */
        .content{
          padding:0 6px;
        }

        /* META SINGLE LINE */
        .meta{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:13px;
          color:rgba(0,0,0,0.45);
          margin-bottom:10px;
          white-space:nowrap;
        }

        /* TITLE GRADIENT HOVER */
        .title{
          font-size:24px;
          font-weight:800;
          color:#111;
          cursor:pointer;
          transition:0.4s ease;
        }

        .blog-item:hover .title{
          background:linear-gradient(90deg,#7c3aed,#ec4899,#06b6d4);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .desc{
          color:rgba(0,0,0,0.6);
          line-height:1.6;
          margin-top:8px;
        }

        /* RESPONSIVE */
        @media (max-width: 992px){
          .blog-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media (max-width: 576px){
          .blog-grid{
            grid-template-columns:1fr;
          }

          .blog-title-main{
            font-size:34px;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;