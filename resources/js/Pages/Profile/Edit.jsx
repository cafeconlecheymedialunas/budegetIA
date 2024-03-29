import Sidebar from '@/Layouts/Sidebar';
import Footer from '@/Layouts/Footer';
import Nav from '@/Layouts/Nav';
import MainContent from '@/Layouts/Content';

import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';


export default function Edit({ user, status }) {
   
    return (
      
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Nav />
                <MainContent >


                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <UpdateProfileInformationForm
                                    user={user}
                                    status={status}
                                  
                                />
                            </div>

                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>

                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </MainContent>
                <Footer />
            </div >

        </div >

    );
}
