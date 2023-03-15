import Sidebar from "@/Layouts/Sidebar";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import Content from "@/Layouts/Content";
import { Link } from '@inertiajs/react';

export default function Main(props){
    return (
        <div className="wrapper">
        <Sidebar />
        <div className="main">
            <Nav />
            <Content >
                <div className='p-4 sm:p-8'>
                    <div className="flex justify-between mb-4">
                        <h1>{props.title}</h1>
                        <Link as="button" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" href={props.createUrl}>{props.buttonTitle}</Link>
                        
                    </div>

                    {props.children}
                </div>
            </Content>
            <Footer />
        </div>
        
    </div>
    )
}