import React from 'react';
import './Blog.css';

const BlogCard = ({ title, category, excerpt, image }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} loading="lazy" />
        <span className="blog-card-category">{category}</span>
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
      </div>
    </div>
  );
};

const RecentBlogCard = ({ title, category, excerpt, image }) => {
  return (
    <div className="blog-recent-card">
      <div className="blog-recent-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <span className="blog-recent-category">{category}</span>
      <h3 className="blog-recent-title">{title}</h3>
      <p className="blog-recent-excerpt">{excerpt}</p>
    </div>
  );
};

const Blog = () => {
  const featuredPosts = [
    {
      title: 'Refreshing Designs',
      category: 'Resources',
      excerpt: 'Quench satisfying designs to help you stir up emotion and tell a story.',
      image: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Healthier Lifestyle',
      category: 'Lifestyle',
      excerpt: 'Living a healthier lifestyle will help with your productivity and your mind-set.',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Gaming Evolution',
      category: 'Entertainment',
      excerpt: 'Learn about the evolution of gaming and how it started a revolution.',
      image: 'https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const recentPosts = [
    {
      title: 'Best Workstations of the Year',
      category: 'Workspace',
      excerpt: 'Check out these inspiring workstations to get ideas on how to level-up your workstation.',
      image: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Eating for Productivity',
      category: 'Food',
      excerpt: 'Learn how to be more disciplined in your diet and how you can eat to maximize productivity.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'A Design Mind-set',
      category: 'Resources',
      excerpt: 'What does it mean to have a design mind-set? Learn how to improve your eye for design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">The Project Blog</h2>
          <p className="blog-subtitle">Designs and layouts to help you with your app.</p>
        </div>
        
        <div className="blog-featured">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              category={post.category}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
        
        <div className="blog-recent">
          {recentPosts.map((post, index) => (
            <RecentBlogCard
              key={index}
              title={post.title}
              category={post.category}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;