import React from 'react'
import './Admin'
import './Venue.css'
import { useState } from 'react';
import Admin from './Admin';
export default function Venue() {
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: "Image 1", description: "Dinning", imageUrl: "https://images.squarespace-cdn.com/content/v1/63ab550a73e63e44a0766bb2/1674357251087-F65I6SMZYUEFARUZFSV0/1+Alfresco+Dinner+Party+copy.jpg?format=500w" },
        { id: 2, title: "Image 2", description: "Dinning", imageUrl: "https://images.squarespace-cdn.com/content/v1/63ab550a73e63e44a0766bb2/1672266884968-03ZLXFX3XP48AGJB3LO9/35+The+Best+Wedding+Planners+I+Scottsdale+Destination+Wedding+copy.jpg?format=500w" },
        { id: 3, title: "Image 3", description: "Dinning", imageUrl: "https://images.squarespace-cdn.com/content/v1/63ab550a73e63e44a0766bb2/1672266859977-LL7SA2V4YZZ8J8MNUTZK/27+Luxury+Floral+Garland+Wedding+Centerpiece+copy.jpg?format=500w" }
    ]);

    // Function to add a new gallery item
    const addGalleryItem = () => {
        const newGalleryItem = {
            id: galleryItems.length + 1,
            title: "New Image",
            description: "New Description",
            imageUrl: "https://via.placeholder.com/150"
        };
        setGalleryItems([...galleryItems, newGalleryItem]);
    };

    // Function to delete a gallery item
    const deleteGalleryItem = (id) => {
        const updatedGalleryItems = galleryItems.filter(item => item.id !== id);
        setGalleryItems(updatedGalleryItems);
    };

   
    const updateGalleryItem = (id, updatedItem) => {
        const updatedGalleryItems = galleryItems.map(item => {
            if (item.id === id) {
                return updatedItem;
            }
            return item;
        });
        setGalleryItems(updatedGalleryItems);
    };
  return (
    <div>
    <Admin/>
    <div className="admin-venue-container">
    <h2 className="venue-header">Venue</h2>
    <button className="venueadd-button" onClick={addGalleryItem}>Add Photo</button>
    <div className="venueimage-grid">
        {galleryItems.map(item => (
            <div key={item.id} className="venuecard">
                <img src={item.imageUrl} alt={item.title} />
                <div className="venuecard-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="venuecard-buttons">
                        <button onClick={() => deleteGalleryItem(item.id)}>Delete</button>
                        <button onClick={() => updateGalleryItem(item.id, { ...item, title: `${item.title} Updated` })}>Update</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

    </div>
  )
}
