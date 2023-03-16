import Main from '@/Layouts/Main';

import TableSimple from "@/Components/TableSimple";

export default function ClientList({ clients }) {
    return (


        <Main title="Clients" createUrl="/clients/create" buttonTitle="Create Client">
            <TableSimple table="clients" keys={["Name", "Type", "Industry"]} data={clients} />
        </Main>
    );
}