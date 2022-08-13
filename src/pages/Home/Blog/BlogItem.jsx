import React from 'react';
import { MdPets } from 'react-icons/md';
import { FiUser, FiFolder } from 'react-icons/fi';
import { FaRegCommentDots } from 'react-icons/fa';
import PropTypes from 'prop-types';

// components
import Button from '~/components/Button';

const BlogItem = ({ item }) => {
    return (
        <div className="hover:scale-105 bg-white transition duration-300 border-transparent p-4 rounded-3xl shadow-md">
            <div className="blog-img relative">
                <img src={item.image} className="rounded-2xl" />
                <div
                    className={`${item.bgPrimary} blog-time absolute right-0 top-0 rounded-tr-2xl py-2 px-1 xl:w-[18%] w-[20%] text-center`}
                >
                    <MdPets className="text-white text-3xl mx-auto" />
                    <p className="text-base md:text-[18px] font-bold text-gray-600 mt-2">
                        {item.date.day}
                        <br />
                        {item.date.month}
                    </p>
                </div>
            </div>
            <div className="blog-cate px-2 flex items-center mt-3">
                <p className="blog-cate__item">
                    <span>
                        <FiUser />
                    </span>
                    {item.author}
                </p>
                <p className="blog-cate__item ">
                    <span>
                        <FaRegCommentDots />
                    </span>
                    {item.comment}
                </p>
                <p className="blog-cate__item ">
                    <span>
                        <FiFolder />
                    </span>
                    {item.category}
                </p>
            </div>
            <div className="blog-content px-2 mt-5">
                <h1 className="text-[18px] xs:text-[20px] font-bold hover:text-orange-400">{item.title}</h1>
                <p className="mt-2">{item.content}</p>
                <Button className="mt-3 mb-2" highlight small shape>
                    Read more
                </Button>
            </div>
        </div>
    );
};

BlogItem.propTypes = {
    item: PropTypes.object.isRequired,
};

BlogItem.defaultProps = {
    item: null,
};

export default BlogItem;
