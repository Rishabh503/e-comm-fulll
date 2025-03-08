import React, { useEffect, useState } from 'react';
import { AddCategory } from './AddCategory';

const Start = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/categories/allCategories")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((e) => console.log(e));
    }, []);
    // console.log(data)
    return (
        <section className='min-h-screen w-full py-10 px-6'>
            <div className='text-black text-center mb-8'>
                <h2 className='text-3xl font-bold'>Browse By Categories</h2>
                <p className='text-gray-400 mt-2'>Discover various categories of products</p>
            </div>
                <div className='flex items-end justify-end'>
                    <AddCategory/>
                </div>
            {loading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className='bg-gray-800 animate-pulse rounded-xl p-6 h-48'></div>
                    ))}
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {data.data.map((d, i) => (
                        <div key={i} className='bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                            <div className='h-20 w-20 flex items-center justify-center bg-gray-700 rounded-full mb-4'>
                                <img src={d.posterUrl} alt={d.name} className='h-16 w-16' />
                            </div>
                            <h3 className='text-xl font-semibold text-gray-200'>{d.name}</h3>
                            <p className='text-gray-400 text-sm text-center mt-2'>{d.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Start;