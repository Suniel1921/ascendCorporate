import React from 'react'
import "./Blog.css";
const Blog = () => {
    return (
        <div className='Blog_main'>
            <div className='blog_container'>
                <div className='blog_left'>
                    <div className='blog'>
                        OUR RECENT POSTS
                    </div>
                    <div className='blog_heading'>
                        Check our latest news & <br/> articles from the blog.
                    </div>
                </div>
                <div className='blog_right'>
                    <p className='blog_paragraph'>
                        Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.
                    </p>
                    <div className='Read_Blog_Button'>
                        Read About Us
                    </div>
                </div>
                
            </div>
            <div className="blog-grid">
                <div className="blog-card">
                    <div className='blog_card_top'>
                        <div className='blogCardHeading'>
                            <h5>OUR EXPERTISE</h5>
                            <h3>Turnaround Consulting</h3>
                        </div>
                        {/* <div className='blogcardIcon'>
                            <IoAnalyticsOutline className='icon_grid'/>
                        </div> */}
                    </div>
                    <p className='blog_card_bottom'>
                        When you use ad marketing and consulting, you create specific message to motivate people to take action.
                    </p>
                    <div className="arrow">

                    </div>
                </div>

                <div className="blog-card">
                    <div className='blog_card_top'>
                        <div className='blogCardHeading'>
                            <h5>OUR EXPERTISE</h5>
                            <h3>Turnaround Consulting</h3>
                        </div>
                         {/* <div className='blogcardIcon'>
                            <IoAnalyticsOutline className='icon_grid'/>
                        </div> */}
                    </div>
                    <p className='blog_card_bottom'>
                        When you use ad marketing and consulting, you create specific message to motivate people to take action.
                    </p>
                    <div className="arrow">
                        
                    </div>
                </div>



                <div className="blog-card">
                    <div className='blog_card_top'>
                        <div className='blogCardHeading'>
                            <h5>OUR EXPERTISE</h5>
                            <h3>Turnaround Consulting</h3>
                        </div>
                          {/* <div className='blogcardIcon'>
                            <IoAnalyticsOutline className='icon_grid'/>
                        </div> */}
                    </div>
                    <p className='blog_card_bottom'>
                        When you use ad marketing and consulting, you create specific message to motivate people to take action.
                    </p>
                    <div className="arrow">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
