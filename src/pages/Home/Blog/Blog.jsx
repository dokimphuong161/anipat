import React from 'react';
import FootImg from '~/assets/images/foot.png';
import { BLOG_DATA } from '~/constants/blogData';
import BlogItem from './BlogItem';

const Blog = () => {
    return (
        <section className="blog">
            <div className="container mx-auto pt-16 md:pb-8 pb-4 md:px-0 px-4">
                <div className="section-heading md:w-1/2 w-auto text-center mx-auto">
                    <img src={FootImg} className="w-14 mx-auto" />
                    <h1 className="heading">Lasted News</h1>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-4">
                    {BLOG_DATA.map((item, index) => (
                        <BlogItem item={item} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
