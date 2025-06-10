function GroceryFooter ({totalBought, totalItems}) {
    return (
        <div className="footer">
            <footer className="bg-light text-dark text-center p-3">
                <p className="display-6">
                    {totalBought} of {totalItems} Items have been bought
                </p>
            </footer>
        </div>
    );
}

export default GroceryFooter;