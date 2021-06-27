import { useState } from 'react'
import cl from 'classnames'
import { blogs, tabs } from '../../blogs';

/** Components */
import { Footer } from '../../components/Footer'

export default function Blog() {
  const [selectedTabs, setSelectedTabs] = useState({});
  const [filteredBlog, setFilteredBlog] = useState([...blogs])

  const selectTab = (tab) => {
    if (selectedTabs[tab]) delete selectedTabs[tab];
    else selectedTabs[tab] = true;

    const selectedKeys = Object.keys(selectedTabs);
    const _blogs = [];

    blogs.forEach(b => {
      const found = b.categories.some(c => selectedKeys.includes(c));
      if (found) _blogs.push(b);
    })

    setFilteredBlog(_blogs.length ? _blogs : blogs);
    setSelectedTabs({...selectedTabs});
  }
  
  return (
    <>
      <div style={{ padding: '32px' }}>
        <h1>The Undone Blog</h1>
        <p>Tips, stories, and our musings on everything in between.</p>
        <div style={{ marginTop: '24px' }}>
          <div className="container">
            <div className="tabs-container">
              {tabs.map(t => {
                const selectedTab = selectedTabs[t];
                return (
                  <div key={t} className={cl("tab", { 'active': selectedTab })} onClick={() => selectTab(t)}>
                    {t}
                  </div>
                )
              })}
            </div>
            
            <div className="row">
              {filteredBlog.map((blog, i) => {
                return (
                  <div className="card" key={blog.title + i}>
                    <div className='media' />
                    <div className="card-header">
                      <h2>React</h2>
                    </div>
                    <div className="card-body">
                      <p>{blog.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> 
        </div>
      </div>

      <section className="trail-section-container">
        <div className="trail-info">
          <h2>Get Started with Undone</h2>
          <p>A better experience for your team, fewer headaches in your quest to get things done. Set yourself up for success in minutes.</p>
          <button className="trail-button">Start free trail</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
