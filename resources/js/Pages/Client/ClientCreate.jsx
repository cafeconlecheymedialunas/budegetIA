
import { useForm,Link,router } from '@inertiajs/react';
import {useState } from 'react';


import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';


import SelectInput from '@/Components/SelectInput';
import TextArea from "@/Components/TextArea";
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Main from '@/Layouts/Main';


export default function ClientCreate(props) {




    const { data, setData, post, processing, errors } = useForm({
        name: "",
        industry: "",
        type: "",
        description: ""
    })



    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("clients.store"));
    };


    return (
        <Main title="Create Client" createUrl="/clients" buttonTitle="Back">
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
                    <InputLabel htmlFor='industry' value='Type' />

                    <SelectInput
                        id='industry'
                        type='industry'
                        name='industry'
                        value={data.industry}
                        onChange={(e) => setData('industry', e.target.value)}
                        className='form-control mt-1 block w-100'
                        options={["Accommodation (NAICS 721)",
                            "Accommodation and Food Services (NAICS 72)",
                            "Administrative and Support Services (NAICS 561)",
                            "Administrative and Support and Waste Management and Remediation Services (NAICS 56)",
                            "Agriculture, Forestry, Fishing and Hunting (NAICS 11)",
                            "Air Transportation (NAICS 481)",
                            "Ambulatory Health Care Services (NAICS 621)",
                            "Amusement, Gambling, and Recreation Industries (NAICS 713)",
                            "Animal Production (NAICS 112)",
                            "Apparel Manufacturing (NAICS 315)",
                            "Arts, Entertainment, and Recreation (NAICS 71)",
                            "Beverage and Tobacco Product Manufacturing (NAICS 312)",
                            "Broadcasting (except Internet) (NAICS 515)",
                            "Building Material and Garden Equipment and Supplies Dealers (NAICS 444)",
                            "Chemical Manufacturing (NAICS 325)",
                            "Clothing and Clothing Accessories Stores (NAICS 448)",
                            "Computer and Electronic Product Manufacturing (NAICS 334)",
                            "Construction (NAICS 23)",
                            "Construction of Buildings (NAICS 236)",
                            "Couriers and Messengers (NAICS 492)",
                            "Credit Intermediation and Related Activities (NAICS 522)",
                            "Crop Production (NAICS 111)",
                            "Data Processing, Hosting, and Related Services (NAICS 518)",
                            "Education and Health Services",
                            "Educational Services (NAICS 61)",
                            "Electrical Equipment, Appliance, and Component Manufacturing (NAICS 335)",
                            "Electronics and Appliance Stores (NAICS 443)",
                            "Fabricated Metal Product Manufacturing (NAICS 332)",
                            "Finance and Insurance (NAICS 52)",
                            "Financial Activities",
                            "Fishing, Hunting and Trapping (NAICS 114)",
                            "Food Manufacturing (NAICS 311)",
                            "Food Services and Drinking Places (NAICS 722)",
                            "Food and Beverage Stores (NAICS 445)",
                            "Forestry and Logging (NAICS 113)",
                            "Funds, Trusts, and Other Financial Vehicles (NAICS 525)",
                            "Furniture and Home Furnishings Stores (NAICS 442)",
                            "Furniture and Related Product Manufacturing (NAICS 337)",
                            "Gasoline Stations (NAICS 447)",
                            "General Merchandise Stores (NAICS 452)",
                            "Goods-Producing Industries",
                            "Health Care and Social Assistance (NAICS 62)",
                            "Health and Personal Care Stores (NAICS 446)",
                            "Heavy and Civil Engineering Construction (NAICS 237)",
                            "Hospitals (NAICS 622)",
                            "Information (NAICS 51)",
                            "Insurance Carriers and Related Activities (NAICS 524)",
                            "Internet Publishing and Broadcasting (NAICS 516)",
                            "Leather and Allied Product Manufacturing (NAICS 316)",
                            "Leisure and Hospitality",
                            "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works) (NAICS 533)",
                            "Machinery Manufacturing (NAICS 333)",
                            "Management of Companies and Enterprises (NAICS 55)",
                            "Manufacturing (NAICS 31-33)",
                            "Merchant Wholesalers, Durable Goods (NAICS 423)",
                            "Merchant Wholesalers, Nondurable Goods (NAICS 424)",
                            "Mining (except Oil and Gas) (NAICS 212)",
                            "Mining, Quarrying, and Oil and Gas Extraction (NAICS 21)",
                            "Miscellaneous Manufacturing (NAICS 339)",
                            "Miscellaneous Store Retailers (NAICS 453)",
                            "Monetary Authorities - Central Bank (NAICS 521)",
                            "Motion Picture and Sound Recording Industries (NAICS 512)",
                            "Motor Vehicle and Parts Dealers (NAICS 441)",
                            "Museums, Historical Sites, and Similar Institutions (NAICS 712)",
                            "Natural Resources and Mining",
                            "Nonmetallic Mineral Product Manufacturing (NAICS 327)",
                            "Nonstore Retailers (NAICS 454)",
                            "Nursing and Residential Care Facilities (NAICS 623)",
                            "Oil and Gas Extraction (NAICS 211)",
                            "Other Information Services (NAICS 519)",
                            "Other Services (except Public Administration) (NAICS 81)",
                            "Paper Manufacturing (NAICS 322)",
                            "Performing Arts, Spectator Sports, and Related Industries (NAICS 711)",
                            "Personal and Laundry Services (NAICS 812)",
                            "Petroleum and Coal Products Manufacturing (NAICS 324)",
                            "Pipeline Transportation (NAICS 486)",
                            "Plastics and Rubber Products Manufacturing (NAICS 326)",
                            "Postal Service (NAICS 491)",
                            "Primary Metal Manufacturing (NAICS 331)",
                            "Printing and Related Support Activities (NAICS 323)",
                            "Private Households (NAICS 814)",
                            "Professional and Business Services",
                            "Professional, Scientific, and Technical Services (NAICS 54)",
                            "Publishing Industries (except Internet) (NAICS 511)",
                            "Rail Transportation (NAICS 482)",
                            "Real Estate (NAICS 531)",
                            "Real Estate and Rental and Leasing (NAICS 53)",
                            "Religious, Grantmaking, Civic, Professional, and Similar Organizations (NAICS 813)",
                            "Rental and Leasing Services (NAICS 532)",
                            "Repair and Maintenance (NAICS 811)",
                            "Retail Trade (NAICS 44-45)",
                            "Scenic and Sightseeing Transportation (NAICS 487)",
                            "Securities, Commodity Contracts, and Other Financial Investments and Related Activities (NAICS 523)",
                            "Service-Providing Industries",
                            "Social Assistance (NAICS 624)",
                            "Specialty Trade Contractors (NAICS 238)",
                            "Sporting Goods, Hobby, Book, and Music Stores (NAICS 451)",
                            "Support Activities for Agriculture and Forestry (NAICS 115)",
                            "Support Activities for Mining (NAICS 213)",
                            "Support Activities for Transportation (NAICS 488)",
                            "Telecommunications (NAICS 517)",
                            "Textile Mills (NAICS 313)",
                            "Textile Product Mills (NAICS 314)",
                            "Trade, Transportation, and Utilities",
                            "Transit and Ground Passenger Transportation (NAICS 485)",
                            "Transportation Equipment Manufacturing (NAICS 336)",
                            "Transportation and Warehousing (NAICS 48-49)",
                            "Truck Transportation (NAICS 484)",
                            "Utilities (NAICS 22)",
                            "Warehousing and Storage (NAICS 493)",
                            "Waste Management and Remediation Services (NAICS 562)",
                            "Water Transportation (NAICS 483)",
                            "Wholesale Electronic Markets and Agents and Brokers (NAICS 425)",
                            "Wholesale Trade (NAICS 42)",
                            "Wood Product Manufacturing (NAICS 321)"]}
                        placeholder='Type'
                    />

                    <InputError message={errors.industry} className='mt-1' />
                </div>

                <div className='mt-3'>
                    <InputLabel htmlFor='type' value='Type' />

                    <SelectInput
                        id='type'
                        type='text'
                        name='type'
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        options={["A", "B", "C"]}
                        className='mt-1 block w-100 form-control'
                        placeholder='Type'
                    />


                    <InputError message={errors.type} className='mt-1' />
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

                    <Link as="button" className='inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150' href="/clients">Cancel</Link>
                    <PrimaryButton  disabled={processing} className='ml-3'>
                        Save
                    </PrimaryButton>
                </div>

            </form>
        </Main>



    );
}