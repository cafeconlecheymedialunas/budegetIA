

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
                {options.map((item,key) => {

                    if(!Array.isArray(item) || item["value"] == ""){
                        return <option value={item} key={key} >{item}</option>
                        
                    }
                    return  <option value={item["key"]} key={item["key"]} >{item["value"]}</option>

                }
                    
                )}

            </select>
        </div>
    );
};