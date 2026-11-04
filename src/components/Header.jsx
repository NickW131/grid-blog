/* ======================================================
    Lab 7 - Header.jsx starter    
    
    TODO: Create the entire Header component. 
    
    Requirements:
        - Show the site title and a one-sentence description.
        - Show summary numbers: totalPosts, totalLikes, totalDislikes. 
====================================================== */

export default function Header({ totalPosts, totalLikes, totalDislikes }) {
    return (
    <header className="header">
        <div className="header-content">
          <h1>GridBlog</h1>
            <p>A simple React blog for sharing posts and ideas.</p>
        </div>
        
        <div className="stats">
            <div className="stat">
                <span className="stat-number">{totalPosts}</span>
                <span className="stat-label">Posts</span>
            </div>
            
            <div className="stat">
                <span className="stat-number">{totalLikes}</span>
                <span className="stat-label">Likes</span>
            </div>
            
            <div className="stat">
                <span className="stat-number">{totalDislikes}</span>
                <span className="stat-label">Dislikes</span>
            </div>
        </div>
    </header>
    );
} 