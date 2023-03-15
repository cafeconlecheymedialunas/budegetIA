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
                        <Link  href={props.createUrl}>{props.buttonTitle}</Link>
                        
                    </div>

                    {props.children}
                </div>
            </Content>
            <Footer />
        </div>
        
    </div>
    )
}