

export default function Content(props){
   
    return (
        <main className="content">
                    <div className="container-fluid p-0">
                        <div className="flex">
                        <h1 className="h3 mb-3">{props.title}</h1>
                        </div>
                        
                        <div className="row">
                            <div className="col-12">
                           
                            {props.children}
                                        
                            </div>
                        </div>
                    </div>
                </main>
    )
}