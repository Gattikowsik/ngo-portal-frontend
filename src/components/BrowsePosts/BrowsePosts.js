import React, { useState } from 'react';
import './BrowsePosts.css';

// Sample data for NGOs. In a real app, you would fetch this from a server.
const initialNgos = [
  {
    id: 1,
    name: 'Teach for Tomorrow',
    type: 'Education',
    location: 'Mumbai',
    description: 'Providing quality education to underprivileged children across the city.',
  },
  {
    id: 2,
    name: 'Green Planet Foundation',
    type: 'Environment',
    location: 'Delhi',
    description: 'Working on reforestation projects and promoting sustainable living.',
  },
  {
    id: 3,
    name: 'HealthBridge India',
    type: 'Healthcare',
    location: 'Bangalore',
    description: 'Organizing free medical camps and health awareness programs in rural areas.',
  },
  {
    id: 4,
    name: 'Animal Angels',
    type: 'Animal Welfare',
    location: 'Pune',
    description: 'Rescuing and rehabilitating stray animals, and facilitating adoptions.',
  },
];

const BrowsePosts = () => {
  // State to hold the values from the search inputs
  const [postType, setPostType] = useState('');
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  
  // State to hold the list of posts to display
  const [posts, setPosts] = useState(initialNgos);

  // Function to handle the search button click
  const handleSearch = () => {
    console.log('Searching for:', { postType, keyword, location });
    // In a real application, you would use these state values
    // to filter the 'posts' array or make an API call to your backend.
    alert(`Searching for:\nType: ${postType}\nKeyword: ${keyword}\nLocation: ${location}`);
  };

  return (
    <div className="browse-ngos-container">
      <h1>Browse Posts</h1>

      {/* Search Section */}
      <div className="search-bar">
        <select value={postType} onChange={(e) => setPostType(e.target.value)}>
          <option value="">Post Type</option>
          <option value="Event">Event</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Donation">Donation</option>
          <option value="Campaign">Campaign</option>
        </select>
          <input
            type="text"
            placeholder="Enter organisation"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Posts List Section */}
      <div className="ngo-list">
        {posts.map((post) => (
          <div key={post.id} className="ngo-card">
            <h3>{post.name}</h3>
            <p className="ngo-type">{post.type}</p>
            <p className="ngo-location">📍 {post.location}</p>
            <p className="ngo-description">{post.description}</p>
            <button className="details-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePosts;