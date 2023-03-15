

export default function CustomTable(props) {


    return (

        <div className="overflow-x-auto  rounded-lg border border-gray-200 shadow-md">

            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        {props.keys.map(key =>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">{key}</th>
                        )}   
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900" />
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                   {props.children}
                </tbody>
            </table>
        </div>

    )
}