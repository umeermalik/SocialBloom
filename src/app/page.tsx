"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Home() {
  const [video, setVideo] = useState("https://www.w3schools.com/html/mov_bbb.mp4");
  const [date, setDate] = useState(new Date());
  const [currentComment, setCurrentComment] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const comments = [
    { text: 'Great service! Highly recommend.', rating: 4.5, author: 'John Doe' },
    { text: 'Excellent support team, very responsive.', rating: 5, author: 'Jane Smith' },
    { text: 'Good experience overall, will use again.', rating: 4, author: 'David Brown' },
  ];

  const tableData = [
    {
      benefit: 'DFY custom sales engine from lead to close',
      buildingInHouse: 'X',
      agencies: 'X',
      socialBloom: 'Yes',
    },
    {
      benefit: 'Financially palatable to scale',
      buildingInHouse: 'X',
      agencies: 'X',
      socialBloom: 'Yes',
    },
    {
      benefit: 'Help building out offer and ICP',
      buildingInHouse: 'Yes',
      agencies: 'X',
      socialBloom: 'Yes',
    },
    {
      benefit: 'SOPs and processes owned by you',
      buildingInHouse: 'Yes',
      agencies: 'X',
      socialBloom: 'Yes',
    },
    {
      benefit: 'One time fee',
      buildingInHouse: 'X',
      agencies: 'X',
      socialBloom: 'Yes',
    },
    {
      benefit: 'Yearly cost',
      buildingInHouse: '$120,000',
      agencies: '$48,000',
      socialBloom: 'Less than $16,000',
    },
  ];

  const handleSwipeLeft = () => {
    setCurrentComment((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
  }; 

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <main>
      <div>
        <header style={styles.header}>
          <div style={styles.logo}>
            <h1>Social Bloom</h1>
          </div>
          <nav>
            <ul style={styles.nav}>
              <li style={styles.navItem}>
                <a href="#home" style={styles.link}>
                  Home
                </a>
              </li>
              <li style={styles.navItem} onMouseEnter={handleDropdownOpen} onMouseLeave={handleDropdownClose}>
                <a href="#about" style={styles.link}>
                  Industries
                </a>
                {isDropdownOpen && (
                  <div style={styles.dropdown}>
                    <ul style={styles.dropdownMenu}>
                      <li><a href="#industry1" style={styles.dropdownMenuItem}>Industry 1</a></li>
                      <li><a href="#industry2" style={styles.dropdownMenuItem}>Industry 2</a></li>
                      <li><a href="#industry3" style={styles.dropdownMenuItem}>Industry 3</a></li>
                    </ul>
                  </div>
                )}
              </li>
              <li style={styles.navItem}>
                <a href="#services" style={styles.link}>
                  Case studies
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#contact" style={styles.link}>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div style={styles.banner}>
          <h1>
            Scale Your Revenue With Our Proven
            <br /> Lead To Close Formula
          </h1>
          <p>
            Get an in-house sales engine from lead to close in 90 days, 100% done for you.
          </p>
          <button style={styles.button}>Get Started</button>
        </div>
        <div style={styles.trustedBy}>
          <p style={styles.trustedByTitle}>Trusted by Companies From Top Funds</p>
          <div style={styles.logosContainer}>
            <span style={styles.logoStyle2}>Combinator</span>
            <span style={styles.logoStyle3}>SEQUOIA</span>
            <span style={styles.logoStyle4}>Techstars</span>
          </div>
        </div>
        <div style={styles.videoContainer}>
          <h1 style={styles.videoTitle}>How we build your sales engine in 90 days</h1>
          <video width="740" height="460" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <button
            style={{
              ...styles.button,
              backgroundColor: '#569CFC',
              color: 'white',
              display: 'block',
              margin: '20px auto',
            }}
          >Book a Discovery Call
          </button>
        </div>
        <div style={styles.sectionTitle}>
          Proven systems for predictable revenue
        </div>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionItem}>
            <b>Create offers your target market wants to buy</b>
            <p>
              At SocialBloom, we master the art of crafting irresistible offers by deeply understanding your Ideal Customer Profile. Our process helps uncover when and how your ideal customer buys your solution. This allows us to directly address your audience's unique needs and pain points, ensuring our strategies not only resonate but also result in higher conversion rates. Discover targeted offers that truly connect with and convert your ideal customers.
            </p>
          </div>
          <div style={styles.sectionItem}>
            <b>Build and manage lead generation and sales systems</b>
            <p>
              Once we uncover deeper insight into your ICP, we build and manage outbound and marketing campaigns. We take pride in our multi-channel approach that has generated over 10,000 leads. Our top priority is client revenue so we also provide help building out the sales process.
            </p>
            <button
              style={{
                ...styles.button,
                backgroundColor: '#569CFC',
                color: 'white',
                marginTop: '10px',
              }}
            >
              Book a Discovery Call
            </button>
          </div>
          <div style={styles.sectionItem}>
            <b>Optimize system for scalability</b>
            <p>
              We optimize all lead generation channels as well as the sales process to ensure we put in place a system that generates predictable ROI. Once this is completed, you have the option to keep it running in-house without paying any additional retainer fees since it runs on its own.
            </p>
          </div>
        </div>
        <div style={styles.footerContainer}>
          <p style={styles.footerHighlight}><b>x</b></p>
          <p style={styles.footerText}>Skip the expensive and time-consuming hassle of building systems on your own</p>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Benefits</th>
                  <th style={styles.th}>Building In-house</th>
                  <th style={styles.th}>Agencies</th>
                  <th style={styles.th}>SocialBloom</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{row.benefit}</td>
                    <td style={styles.td}>{row.buildingInHouse}</td>
                    <td style={styles.td}>{row.agencies}</td>
                    <td style={styles.td}>{row.socialBloom}</td>
                  </tr>
                ))}
              </tbody>
            </table><br/><br/><br/><br/>
            <div style={styles.sectionContainer}>
              <div style={styles.sectionItem}>
                <b style={{ color: 'white' }}>Targeting based on the buyer’s window</b>
                <p style={{ color: 'white' }}>
                  Blasting, and annoying your target market with spammy messages is something we don’t do. At all. In fact, we founded a system, where we identify your target market’s buyers window and create relevant messages and talk trackers.

                  We search for what events your ICP go through before they move forward with your service or product. We then prospect contacts based on these event triggers and create relevant messaging and talk trackers around it.
                </p>
              </div>
              <div style={styles.sectionItem}>
                <b style={{ color: 'white' }}>Our weekly optimization process</b>
                <p style={{ color: 'white' }}>
                  We believe if a thing is worth doing, it’s worth doing well. We do not believe in setting up a campaign and then never making any improvements to it. Setting anything up and then never improving it makes no sense to us.

                  We use our own signature optimization process for calling, email, and LinkedIn. Each week we see if we are hitting our client’s weekly goal. If we did not hit the goal in the previous week, that client is in the Red Zone. Through our Red Zone process, we then identify the issue, match it with the solution, and implement it for the following week. Sometimes, this can be copy changes, ICP changes, and more.
                </p>
                <button
                  style={{
                    ...styles.button,
                    backgroundColor: '#569CFC',
                    color: 'white',
                    marginTop: '10px',
                  }}
                >
                  Book a Discovery Call
                </button>
              </div>
              <div style={styles.sectionItem}>
                <b style={{ color: 'white' }}>We Tailor Solutions For You</b>
                <p style={{ color: 'white' }}>
                  Listening is a great skill that, fortunately, we have developed over the years. We believe you’re different, and your situation is unique to you.

                  We have proven structures for certain industries, company stages, and target markets.

                  This allows us to skip stages like product education and ramp up time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#569CFC', width: '100%', height: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
            <div style={{ marginLeft: '50px', marginRight: '50px', flex: 1 }}>
              <p style={{ color: 'white' }}>Let’s talk about your growth!</p>
              <p style={{ marginTop: '10px', color: 'white' }}>
                SocialBloom provides an entire sales engine from lead to close within 90 days. This same system has generated 10,000+ leads and millions in revenue for our clients.
              </p>
              <p style={{ marginTop: '10px', color: 'white' }}>
                Understanding your Ideal Customer
              </p>
              <p style={{ marginTop: '10px', color: 'white' }}>
                Craft compelling offers and messaging
              </p>
              <p style={{ marginTop: '10px', color: 'white' }}>
                Creating / Managing outbound and marketing campaigns
              </p>
            </div>
            <div style={{ flex: 1, position: 'relative', marginTop:'30px' }}>
              <Calendar value={date} onChange={setDate} />
              <div style={{ textAlign: 'center', bottom: '50px', right: '50px' }}>
                <p style={{ color: 'white' ,marginRight:'400px', marginTop:'100px'} }>View Our Rankings and Reviews!</p>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', overflow: 'hidden', position: 'relative', marginTop: '50px' }}>
            <div style={{ display: 'flex', width: '100%', transition: 'transform 0.5s, opacity 0.5s' }}>
              {comments.map((comment, index) => (
                <div key={index} style={{ width: '100%', textAlign: 'center', opacity: index === currentComment ? 1 : 0, transform: `translateX(-${currentComment * 100}%)` }}>
                  <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>{comment.text}</p>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
                    {[...Array(5)].map((star, i) => (
                      <span key={i} style={{ marginRight: '2px', color: i < comment.rating ? '#ffc107' : '#e4e5e9' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '16px', color: '#666' }}>-- {comment.author}</p>
                </div>
              ))}
            </div>
            <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }} onClick={handleSwipeLeft}>
              View More
            </button>
          </div>
        </div>
        <div style={{ backgroundColor: '#333', color: 'white', padding: '50px 0',textAlign: 'center' }}>
         
         
          <button style={{ ...styles.button, backgroundColor: '#007bff', color: 'white' }}>Get Started</button>
        </div>
        <footer style={styles.footer}>
          <div style={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '20px 0' }}>
            <div style={styles.footerLogo}>
              <h2>Social Bloom</h2>
              <p>Get your business off the ground with Social Bloom.</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#home" style={{ color: 'white', textDecoration: 'none', margin: '5px 0', display: 'block' }}>Home</a></li>
                <li><a href="#about" style={{ color: 'white', textDecoration: 'none', margin: '5px 0', display: 'block' }}>About</a></li>
                <li><a href="#services" style={{ color: 'white', textDecoration: 'none', margin: '5px 0', display: 'block' }}>Services</a></li>
                <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', margin: '5px 0', display: 'block' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>Email: info@socialbloom.com</p>
              <p>Phone: 123-456-7890</p>
            </div>
            <div>
              <h3>Connect With Us</h3>
             
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    flex: '1',
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
  },
  navItem: {
    marginRight: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    top: '100%',
    zIndex: '1',
  },
  dropdownMenu: {
    listStyle: 'none',
    padding: 0,
  },
  dropdownMenuItem: {
    color: '#333',
    textDecoration: 'none',
    display: 'block',
    padding: '5px 0',
  },
  banner: {
    backgroundColor: '#f4f4f4',
    padding: '50px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#569CFC',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  trustedBy: {
    backgroundColor: '#333',
    padding: '50px',
    textAlign: 'center',
  },
  trustedByTitle: {
    color: 'white',
    fontSize: '24px',
  },
  logosContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  logoStyle2: {
    color: 'white',
    fontSize: '36px',
    margin: '0 20px',
  },
  logoStyle3: {
    color: 'white',
    fontSize: '36px',
    margin: '0 20px',
  },
  logoStyle4: {
    color: 'white',
    fontSize: '36px',
    margin: '0 20px',
  },
  videoContainer: {
    backgroundColor: '#f4f4f4',
    padding: '50px',
    textAlign: 'center',
  },
  videoTitle: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '36px',
    margin: '50px 0',
  },
  sectionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 100px',
    marginBottom: '100px',
  },
  sectionItem: {
    flex: '1',
    textAlign: 'center',
  },
  footerContainer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '50px',
  },
  footerHighlight: {
    fontSize: '48px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '20px',
    textAlign: 'center',
  },
  tableContainer: {
    width: '80%',
    margin: '0 auto',
    overflowX: 'auto',
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  th: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
  },
  footer: {
    backgroundColor: '#222',
    color: 'white',
    marginTop: '50px',
    padding: '20px 0',
  },
  footerLogo: {
    flex: '1',
  },
};

