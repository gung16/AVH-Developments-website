import React from 'react';
import './PastProducts.css';

const PastProducts: React.FC = () => {
  const projects = [
    { name: "Sharks Cafe", players: "6.5k+", type: "Cafe", featured: true },
    { name: "A&El Cafe", players: "1k+", type: "Cafe", featured: true },
    { name: "Parfait Bakery", players: "1k+", type: "Bakery" },
    { name: "Japanese Garden", players: "1k+", type: "Restaurant" },
    { name: "WestCoast", players: "1k+", type: "Cafe" },
    { name: "Kohui", players: "N/A", type: "Restaurant" },
    { name: "Mintyz Dentist", players: "N/A", type: "Medical" },
    { name: "Slushyz Corporation", players: "N/A", type: "Business" },
    { name: "J+J Shopping Center", players: "N/A", type: "Shopping" },
    { name: "Center Stage Productions", players: "N/A", type: "Entertainment" },
    { name: "Aqua Community", players: "N/A", type: "Community" },
    { name: "Patisare Sushi", players: "N/A", type: "Restaurant" },
    { name: "Brightful Smiles Dentist", players: "N/A", type: "Medical" },
    { name: "Bubble Attire", players: "N/A", type: "Fashion" },
    { name: "Cleanez Dentist", players: "N/A", type: "Medical" },
    { name: "Patrize Cafe", players: "N/A", type: "Cafe" },
    { name: "PBS (Pats Basic Training)", players: "N/A", type: "Training" },
    { name: "Tide Grill", players: "N/A", type: "Restaurant" },
    { name: "Brentwood Cafe", players: "N/A", type: "Cafe" },
    { name: "Dreamverse (DV)", players: "N/A", type: "Entertainment" },
    { name: "Cuzman Y Gomez", players: "N/A", type: "Restaurant", featured: true },
    { name: "Whoosherz", players: "N/A", type: "Entertainment" },
    { name: "Air Cafe", players: "N/A", type: "Cafe", featured: true },
    { name: "PBT Cheesecake", players: "N/A", type: "Bakery" },
    { name: "Muchachos", players: "N/A", type: "Restaurant" },
    { name: "Safari Cafe (Fly's Group)", players: "N/A", type: "Cafe" },
    { name: "Venno Juice Bar", players: "N/A", type: "Restaurant" },
    { name: "Celaki", players: "N/A", type: "Restaurant", featured: true },
    { name: "Hope Hospital", players: "N/A", type: "Medical", featured: true },
    { name: "Patisare Sushi", players: "N/A", type: "Restaurant", featured: true },
    { name: "Aurora Dentist", players: "N/A", type: "Medical" },
    { name: "Pats Bakery", players: "N/A", type: "Bakery" },
    { name: "Tasties Pastries", players: "N/A", type: "Bakery" },
    { name: "The Glass Bar", players: "N/A", type: "Entertainment" },
    { name: "Rane Trampoline Park", players: "N/A", type: "Entertainment" },
    { name: "PIM District", players: "N/A", type: "District" }
  ];

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      'Cafe': '☕',
      'Restaurant': '🍽️',
      'Bakery': '🥐',
      'Medical': '🏥',
      'Business': '💼',
      'Shopping': '🛍️',
      'Entertainment': '🎪',
      'Community': '👥',
      'Fashion': '👗',
      'Training': '🎓',
      'District': '🏙️'
    };
    return icons[type] || '🎮';
  };

  return (
    <div className="past-products">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Past Products</h1>
          <p className="section-subtitle">
            Explore our extensive portfolio of successful Roblox projects. 
            From cafes to hospitals, we've delivered exceptional experiences across various genres.
          </p>
          
          <div className="portfolio-stats">
            <div className="stat-card">
              <span className="stat-number">32+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">550,629</span>
              <span className="stat-label">Total Robux Revenue</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">8.5k+</span>
              <span className="stat-label">Combined Players</span>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-header">
                  <div className="project-type">
                    <span className="type-icon">{getTypeIcon(project.type)}</span>
                    <span className="type-label">{project.type}</span>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <h3 className="project-name">{project.name}</h3>
                {project.players !== "N/A" && (
                  <p className="project-players">{project.players} players</p>
                )}
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <h2>Ready to Join Our Success Stories?</h2>
            <p>Let's create your next successful Roblox project together</p>
            <a href="https://drive.google.com/AVHProducts" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastProducts; 