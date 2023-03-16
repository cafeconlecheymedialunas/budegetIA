import Main from '@/Layouts/Main';

import TableSimple from "@/Components/TableSimple";

export default function TeamList({ data }) {
    return (


        <Main title="Projects" createUrl="/projects/create" buttonTitle="Create Project">
            <TableSimple table="Projects" keys={['Name',"Docs","Requirements","References","Archives","Project"]} data={data} />
        </Main>
    );
}