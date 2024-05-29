import Image from "next/image";
"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Home() {
  const [video, setVideo] = useState("https://www.w3schools.com/html/mov_bbb.mp4");
  const [date, setDate] = useState(new Date());
  const [currentComment, setCurrentComment] = useState(0);

  const comments = [
    { text: 'Great service! Highly recommend.', rating: 4.5, author: 'John Doe' },
    { text: 'Excellent support team, very responsive.', rating: 5, author: 'Jane Smith' },
    { text: 'Good experience overall, will use again.', rating: 4, author: 'David Brown' },
  ];

  const handleSwipeLeft = () => {
    setCurrentComment((prevIndex) => (prevIndex === comments.length - 1 ? 0 : prevIndex + 1));
  }; 
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

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'lightblue',
    },
    nav: {
      display: 'flex',
      listStyle: 'none',
    },
    navItem: {
      margin: '0 15px',
    },
    link: {
      color: 'lightblue',
      textDecoration: 'none',
    },
    banner: {
      backgroundColor: 'lightblue',
      width: '100%',
      height: '400px',
      padding: '40px 80px',
      textAlign: 'center',
      color: '#fff',
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#0077b6',
      border: 'none',
      padding: '12px 24px',
      fontSize: '18px',
      fontWeight: '700',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '20px',
    },
    trustedBy: {
      backgroundColor: '#555',
      color: '#fff',
      width: '100%',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
    },
    trustedByTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    logosContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
    },
    logoStyle2: {
      fontSize: '20px',
      fontWeight: '600',
      color: 'orange',
    },
    logoStyle3: {
      fontSize: '20px',
      fontWeight: '600',
      color: 'lightgreen',
    },
    logoStyle4: {
      fontSize: '20px',
      fontWeight: '600',
      color: 'black',
    },
    customCalendar: {
      width: '300px', 
      maxWidth: '100%',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#0077b6',
      color: 'white',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    },
    navigationButton: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
    },
    weekdays: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd',
    },
    weekday: {
      textDecoration: 'none',
      fontSize: '12px',
    },
    days: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '2px',
    },
    tile: {
      padding: '10px',
      textAlign: 'center',
    },
    tileNow: {
      backgroundColor: '#0077b6',
      color: 'white',
    },
    tileActive: {
      backgroundColor: '#0077b6',
      color: 'white',
      borderRadius: '50%',
    },
    videoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
    },
    videoTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '40px 0',
    },
    sectionContainer: {
      width: '80%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center',
      marginTop: '20px',
    },
    sectionItem: {
      width: '30%',
      height: '380px',
    },
    footerContainer: {
      backgroundColor: '#212529',
      width: '100%',
      height:'1500px',
      padding: '50px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    footerText: {
      color: 'white',
      fontSize: '40px',
      textAlign: 'center',
    },
    footerHighlight: {
      color: 'red',
      fontSize: '90px',
      textAlign: 'center',
    },
    tableContainer: {
      padding: '20px',
      marginTop: '50px',
      width: '80%',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '8px',
      textAlign: 'left',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      color: '#fff',
    },
     dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdownMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  dropdownMenuItem: {
    padding: '10px',
    textDecoration: 'none',
    color: '#333',
    display: 'block',
  },
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div style={{ backgroundColor: '#333', color: 'white', padding: '50px 0', textAlign: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
    <a href="mailto:your@email.com" style={{ color: 'white', textDecoration: 'none' }}>
      <img src="email-icon.png" alt="Email" style={{ width: '30px', height: '30px' }} />
    </a>
    <a href="https://wa.me/1234567890" style={{ color: 'white', textDecoration: 'none' }}>
      <img src="whatsapp-icon.png" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
    </a>
    <a href="https://www.instagram.com/your_instagram/" style={{ color: 'white', textDecoration: 'none' }}>
      <img src="instagram-icon.png" alt="Instagram" style={{ width: '30px', height: '30px' }} />
    </a>
  </div>
  <p style={{ fontSize: '20px', marginBottom: '20px' }}>Connect with us on social media:</p>
  <div style={{ marginBottom: '20px' }}>
    <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Us:</p>
    <p style={{ fontSize: '20px' }}>Phone: +123-456-7890</p>
    <p style={{ fontSize: '20px' }}>Email: your@email.com</p>
  </div>
  <p style={{ marginBottom: '20px', fontSize: '18px' }}>Follow us on social media for updates and promotions!</p>
</div>

        </div>
      </div>
    </main>
  );
}

