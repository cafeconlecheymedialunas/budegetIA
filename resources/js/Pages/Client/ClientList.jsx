import { useState } from 'react';



import TableSimple from "@/Components/TableSimple";


import Main from '@/Layouts/Main';




export default function ClientList({ clients }) {
    return (


        <Main title="Clients" createUrl="/clients/create" buttonTitle="Create Client">
            <TableSimple table="clients" keys={["Name", "Type", "Industry"]} data={clients} />
        </Main>
    );
}