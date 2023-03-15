

import Sidebar from "@/Layouts/Sidebar";
import Nav from "@/Layouts/Nav";
import Footer from "@/Layouts/Footer";
import MainContent from "@/Layouts/Content";
import Profile from "@/Components/Profile";

export default function ProfilePage({ user }) {
    console.log(user)
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Nav />
                <MainContent >
                    <Profile/>
                </MainContent>
                <Footer />
            </div>
        </div>
    );
}