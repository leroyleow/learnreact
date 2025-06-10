export default function GroceryList({Items, handleOnToggle, handleRemoveItem}) {
    console.log("GI", Items);

    return (
        // <ul>
        //     {Items.map((item, index)=> (<li key={item.id}>{item.text}</li>))}
        // </ul>
        <div >
            {
                Items.map((item) => {
                    return(
                    <div key={item.id} className="card mb-2 pd-2">    
                    <div  
                    style={{cursor:"pointer"}}
                    className="d-flex align-items-center">
                        <div 
                        style={{height:'20px', width:'20px'}}
                        className={`rounded-circle me-2 ${
                            item.bought ? 'bg-success' : 'bg-secondary'
                        }`} 
                        onClick={() => handleOnToggle(item.id)}></div>
                        <span className={`${item.bought ? 'text-decoration-line-through' : ''}`}>
                            <div className="d-flex align-item-center">
                                <p className="display-6 pt-2">
                                    {item.text}
                                </p>
                            </div>
                        </span>
                        <button className="btn btn-danger ms-5" onClick={()=> handleRemoveItem(item.id)}><i className="bi bi-trash"></i></button>
                    </div>
                    </div>);
                })
            }
        </div>
    );
}