import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
// import { AiOutLineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/data')
            .then((response) => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>
                    Document List
                </h1>
                <Link to='/data/showdatabyid'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <table className='w-full border-separate border-spacing-2'>
                    <thread>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>
                                Data point 1
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Data point 2
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                Data point 3
                            </th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>
                                Data point 4
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Data point 5
                            </th>
                        </tr>
                    </thread>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={data._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {data.poin1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {data.poin2}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {data.poin3}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/data/showdatabyid/${data._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800'/>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Home