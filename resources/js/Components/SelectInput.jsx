

export default function SelectInput({ className = '', options = [], ...props }) {


    return (
        <div className="flex flex-col items-start">

            <select
                {...props}
                className={
                    'form-control mb-3 ' +
                    className
                }
              >
                <option value="">Choose a option</option>
                {options.map(item =>
                    <option key={item} >{item}</option>
                )}

            </select>
        </div>
    );
};