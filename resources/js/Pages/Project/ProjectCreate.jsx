
import { useForm,Link,router } from '@inertiajs/react';


import Main from '@/Layouts/Main';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from "@/Components/TextArea";
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';



export default function TeamCreate({teams}) {

    console.log(teams)


    const { data, setData, post, processing, errors } = useForm({
        name: "",
        references:"",
        requirements:"",
        docs:"",
        project_id:"",
        archives: ""
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route("projects.store"));
    };


    return (
        <Main title="Create project" createUrl="/projects" buttonTitle="Back">
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
                    <InputLabel htmlFor='references' value='References' />

                    <TextArea
                        id='references'
                        type='text'
                        name='references'
                        value={data.references}
                        onChange={(e) => setData('references', e.target.value)}
                        className='mt-1 block w-100 form-control'
                    />

                    <InputError message={errors.references} className='mt-1' />
                </div>
                <div className='mt-3'>
                    <InputLabel htmlFor='requirements' value='Requirements' />

                    <TextArea
                        id='requirements'
                        type='text'
                        name='requirements'
                        value={data.requirements}
                        onChange={(e) => setData('requirements', e.target.value)}
                        className='mt-1 block w-100 form-control'
                    />

                    <InputError message={errors.requirements} className='mt-1' />
                </div>
                <div className='mt-3'>
                    <InputLabel htmlFor='docs' value='Docs' />

                    <TextArea
                        id='docs'
                        type='text'
                        name='docs'
                        value={data.docs}
                        onChange={(e) => setData('docs', e.target.value)}
                        className='mt-1 block w-100 form-control'
                    />

                    <InputError message={errors.docs} className='mt-1' />
                </div>

                 
                <div className='mt-3'>
                    <InputLabel htmlFor='archives' value='Archives' />

                    <TextInput
                        id='archives'
                        type='file'
                        name='archives'
                        value={data.archives}
                        onChange={(e) => setData('archives', e.target.value)}
                        className='mt-1 block w-100 form-control'

                        placeholder='Archives'
                    />

                    <InputError message={errors.archives} className='mt-1' />
                </div>
                <div className='mt-3'>
                    <InputLabel htmlFor='team_id' value='Team' />

                    <SelectInput
                        id='team_id'
                        
                        name='team_id'
                        value={data.team_id}
                        onChange={(e) => setData('team_id', e.target.value)}
                        className='form-control mt-1 block w-100'
                        options={teams}
                        placeholder='Team'
                    />

                    <InputError message={errors.team_id} className='mt-1' />
                </div>
                <div className='mt-3 flex justify-end'>

                    <Link as="button" className='inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150' href="/projects">Cancel</Link>
                    <PrimaryButton  disabled={processing} className='ml-3'>
                        Save
                    </PrimaryButton>
                </div>

            </form>
        </Main>



    );
}