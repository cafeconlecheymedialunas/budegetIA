
import { useForm ,Link} from '@inertiajs/react';



import Main from '@/Layouts/Main';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from "@/Components/TextArea";
import PrimaryButton from '@/Components/PrimaryButton';



export default function TeamUpdate({ team }) {
   


    const { data, setData, put, errors, } = useForm({
        name: team.name,
        description: team.description,
    });


    const handleSubmit = (e) => {
        e.preventDefault();
       
       
        put(route("teams.update", team.id));
    };





    return (

        <Main title="Update Team" createUrl="/teams" buttonTitle="Back">

            <form onSubmit={handleSubmit} className='p-y4'>
                <div className='mt-3'>
                    <InputLabel htmlFor='name' value='Name' />

                    <TextInput
                        id='name'
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className='mt-1 block w-100 form-control'

                        placeholder='Name'
                    />

                    <InputError message={errors.name} className='mt-1' />
                </div>

                <div className='mt-3'>
                    <InputLabel htmlFor='description' value='Description' />

                    <TextArea
                        id='description'
                        type='text'
                        name='description'
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className='mt-1 block w-100 form-control'
                    />

                    <InputError message={errors.description} className='mt-1' />
                </div>
                <div className='mt-3 flex justify-end'>
                    <Link className='inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150' href="/teams">Cancel</Link>


                    <PrimaryButton className='ml-3'>
                        Save
                    </PrimaryButton>
                </div>

            </form>

        </Main>
    );
}