export const Navbar = () => {
    return (
        <header className="w-full">
            <div className="container mx-auto flex justify-between mt-5">
                <div className="font-serif">Miralou</div>
                <nav className="w-96">
                    <ul className="flex justify-between">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Product</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </nav>
                <div>Actions</div>
            </div>
        </header>    
    );
};