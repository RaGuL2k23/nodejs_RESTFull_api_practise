let items = []; // In-memory data store
let nextId = 1; // Simple ID counter

// Create (POST)
exports.createItem = (req, res) => {
    try {
        
        
        //  write logic to add to the array 



        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error });
    }
};

// Read/View (GET)
exports.getItems = (req, res) => {
    try {
       

        // write logic to return all item



        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// Get by ID (GET)
exports.getItemById = (req, res) => {
    try {



        
        // write items to find and return matched item



        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// Update (PUT)
exports.updateItem = (req, res) => {
    try {
        

        // write content to update the items based on id


        res.status(200).json(items[index]);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// Delete (DELETE)
exports.deleteItem = (req, res) => {
    try {
        

        // write content to delete the item

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};
