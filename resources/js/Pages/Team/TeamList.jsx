import Main from '@/Layouts/Main';

import TableSimple from "@/Components/TableSimple";

export default function TeamList({ data }) {
    return (


        <Main title="Teams" createUrl="/teams/create" buttonTitle="Create team">
            <TableSimple table="teams" keys={["Name", "Docs","Requirements","Archives"]} data={data} />
        </Main>
    );
}