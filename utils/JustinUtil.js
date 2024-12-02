const { Resource } = require('../models/Resource');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) { 
        console.error(err); 
        throw err; 
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function editResource(req, res) {
    try {
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const author = req.body.author;

        // Comprehensive field validation
        if (!title || title.trim() === '') {
            return res.status(400).json({ message: 'Title is required' });
        }

        if (!description || description.trim() === '') {
            return res.status(400).json({ message: 'Description is required' });
        }

        if (!author || author.trim() === '') {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Email validation
        if (!isValidEmail(author)) {
            return res.status(400).json({ message: 'Invalid email format for author!' });
        }

        // Read resources
        const allResources = await readJSON('utils/resources.json');
        
        // Find and modify resource
        let modified = false;
        for (let i = 0; i < allResources.length; i++) {
            if (allResources[i].id == id) {
                allResources[i].title = title;
                allResources[i].description = description;
                allResources[i].author = author;
                modified = true;
                console.log(`Blog with ID ${id} modified successfully`);
                break;
            }
        }

        // Handle modification result
        if (modified) {
            await fs.writeFile('utils/resources.json', JSON.stringify(allResources), 'utf8');
            console.log(`Resource with ID ${id} successfully saved`);
            return res.status(201).json({ 
                message: 'Blog modified successfully!',
                resource: allResources.find(r => r.id == id)
            });
        } else {
            console.error(`Failed to modify blog with ID ${id}`);
            return res.status(404).json({ message: 'Blog not found!' });
        }
    } catch (error) {
        console.error('Unexpected error in editResource:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {
    readJSON,  
    editResource
}