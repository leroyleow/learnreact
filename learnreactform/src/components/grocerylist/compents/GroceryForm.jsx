function GroceryForm ({itemtext, handleSubmit, handleOnChange}) {
    return(
        <div>
            <form onSubmit={handleSubmit} className="mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Add a gocery item" 
                value={itemtext} 
                onChange={handleOnChange} />
                <button className="btn btn-primary mt-2">Add</button>
            </form>
        </div>
    );
}

export default GroceryForm;