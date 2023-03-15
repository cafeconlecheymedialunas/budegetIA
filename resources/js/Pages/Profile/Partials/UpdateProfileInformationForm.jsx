import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';




export default function UpdateProfileInformation({user, status, className }) {
    console.log(user)
   
    const { data, setData, patch, errors, processing, recentlySuccessful,progress} = useForm({
        name: user.name,
        email: user.email,
        user_id:user.id,
        address_city: (user.profile) ? user.profile.address_city:"",
        address_country: (user.profile) ? user.profile.address_country:"",
        address_number: (user.profile) ? user.profile.address_number:"",
        address_postcode: (user.profile) ? user.profile.address_postcode:"",
        address_state: (user.profile) ? user.profile.address_state:"",
        address_street: (user.profile) ? user.profile.address_street:"",
        area: (user.profile) ? user.profile.area:"",
        image:user.image,
        phone: (user.profile) ? user.profile.phone:"",
        role: (user.profile) ? user.profile.role:"",
        seniority: (user.profile) ? user.profile.seniority:"",
        
    });

    const submit = (e) => {
        e.preventDefault();
        
        patch(route('profile.update',data.user_id),data);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 grid gap-4 grid-cols-2 content-center" encType='multipart/form-data'>
                <div >
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div >
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div >
                    <InputLabel htmlFor="area" value="Area" />

                    <select name="area"  id="area" className='form-control' value={data.area} onChange={(e) => setData('area', e.target.value)}>
                        
                    <option value="">Choose an Area</option>
                        <option value="Tech">Tech</option>
                        <option value="QA">QA</option>
                        <option value="Design">Design</option>
                        <option value="ux">UX</option>
                        
                    </select>

                    <InputError className="mt-2" message={errors.area} />
                </div>
                <div >
                    <InputLabel htmlFor="role" value="Role" />

                  
                        <select name="role"  id="role" className='form-control' value={data.role} onChange={(e) => setData('role', e.target.value)}>
                        
                        <option value="">Choose a Role</option>
                          <option value="Developer">Developer</option>
                          <option value="Tech Lead">Tech Lead</option>
                          <option value="Project Manager">Project Manager</option>
                          <option value="Designer">Designer</option>
                          <option value="UX Designer">UX Designer</option>
                          <option value="QA Specialist">QA Specialist</option>
                        </select>
                        
                    <InputError className="mt-2" message={errors.role} />
                </div>
                <div >
                    <InputLabel htmlFor="address_country" value="Country" />

                    <TextInput
                        id="address_country"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_country}
                        onChange={(e) => setData('address_country', e.target.value)}
                        required
                        autoComplete="address_country"
                    />

                    <InputError className="mt-2" message={errors.address_country} />
                </div>
                <div >
                    <InputLabel htmlFor="address_number" value="Number" />

                    <TextInput
                        id="address_number"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_number}
                        onChange={(e) => setData('address_number', e.target.value)}
                        required
                        autoComplete="address_number"
                    />

                    <InputError className="mt-2" message={errors.address_number} />
                </div>
                <div >
                    <InputLabel htmlFor="address_postcode" value="Post Code" />

                    <TextInput
                        id="address_postcode"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_postcode}
                        onChange={(e) => setData('address_postcode', e.target.value)}
                        required
                        autoComplete="address_postcode"
                    />

                    <InputError className="mt-2" message={errors.address_postcode} />
                </div>
                <div >
                    <InputLabel htmlFor="address_state" value="State" />

                    <TextInput
                        id="address_state"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_state}
                        onChange={(e) => setData('address_state', e.target.value)}
                        required
                        autoComplete="address_state"
                    />

                    <InputError className="mt-2" message={errors.address_state} />
                </div>
                <div >
                    <InputLabel htmlFor="address_street" value="Street" />

                    <TextInput
                        id="address_street"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address_street}
                        onChange={(e) => setData('address_street', e.target.value)}
                        required
                        autoComplete="address_street"
                    />

                    <InputError className="mt-2" message={errors.address_street} />
                </div>
                <div >
                    <InputLabel htmlFor="image" value="Image" />
                    
                    <input type="file" id="image" onChange={e => setData('image', e.target.files[0])} />
                    {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                    )}
                    <InputError className="mt-2" message={errors.image} />
                </div>
                <div >
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>
                <div >
                    <InputLabel htmlFor="seniority" value="Seniority" />

                    <TextInput
                        id="seniority"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.seniority}
                        onChange={(e) => setData('seniority', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.seniority} />
                </div>
                

                

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
