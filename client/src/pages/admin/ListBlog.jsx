import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';


const ListBlog = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        setBlogs(blog_data)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
            <h1>ALl Blogs</h1>

            <div className="relative h-4/5 mt-4 max-w-6xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
                <table className="w-full text-sm text-gray-700">
                    <thead className="text-xs text-gray-600 text-left uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-4 py-4">#</th>
                            <th scope="col" className="px-4 py-4">Blog Title</th>
                            <th scope="col" className="px-4 py-4 max-sm:hidden">Date</th>
                            <th scope="col" className="px-4 py-4 max-sm:hidden">Status</th>
                            <th scope="col" className="px-4 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <BlogTableItem
                                key={blog._id}
                                blog={blog}
                                fetchBlogs={fetchBlogs}
                                index={index + 1}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
