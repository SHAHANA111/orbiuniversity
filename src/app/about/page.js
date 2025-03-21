import Navbar from "../../components/Navbar";  // Adjust path as needed
import Footer1 from "../../components/Footer1";

const About = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <main style={{ flexGrow: 1, paddingTop: "6rem" }}>
        <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1rem" }}>
            <h1 style={{ fontFamily: "sans-serif", fontSize: "2.5rem", fontWeight: "bold", color: "#043455", marginBottom: "1.5rem", textAlign: "center" }}>
              About Orbi University
            </h1>
            
            <div>
              <p style={{ fontSize: "1.125rem", color: "#043455cc", marginBottom: "1.5rem" }}>
                Welcome to Orbi University, the educational arm of Orbi.pk - Pakistan's premier e-commerce platform. 
                Established with a vision to empower entrepreneurs and businesses in the digital marketplace, 
                we provide comprehensive education on all aspects of e-commerce success.
              </p>
              
              <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#043455", marginTop: "3rem", marginBottom: "1rem" }}>Our Mission</h2>
              <p>
                Our mission is to democratize e-commerce knowledge and provide actionable education 
                that helps individuals and businesses thrive in the digital marketplace. We believe that 
                with the right knowledge and tools, anyone can build a successful online business.
              </p>
              
              <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#043455", marginTop: "3rem", marginBottom: "1rem" }}>What We Offer</h2>
              <p>Orbi University offers specialized courses across the e-commerce ecosystem:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
                <li><strong>Dropshipping Mastery:</strong> Learn how to start and scale a dropshipping business with minimal inventory.</li>
                <li><strong>Vendor Relations:</strong> Develop the skills to build strong supplier networks and negotiate effectively.</li>
                <li><strong>Import Solutions:</strong> Navigate international procurement, customs, and logistics with confidence.</li>
                <li><strong>Orbi.pk Platform:</strong> Master the tools and features of the Orbi.pk marketplace to maximize your sales.</li>
                <li><strong>E-commerce Marketing:</strong> Learn modern digital marketing strategies specifically for e-commerce success.</li>
              </ul>
              
              <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#043455", marginTop: "3rem", marginBottom: "1rem" }}>Our Experts</h2>
              <p>
                Our courses are developed and taught by industry professionals with years of hands-on experience 
                in the e-commerce space. From successful store owners to logistics experts and marketing specialists, 
                our instructors bring real-world expertise to every lesson.
              </p>
              
              <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#043455", marginTop: "3rem", marginBottom: "1rem" }}>The Orbi Ecosystem</h2>
              <p>Orbi University is part of the broader Orbi ecosystem, which includes:</p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
                <li><strong>Orbi.pk:</strong> Our flagship e-commerce marketplace where sellers and buyers connect.</li>
                <li><strong>Orbi Logistics:</strong> End-to-end logistics solutions for e-commerce businesses.</li>
                <li><strong>Orbi University:</strong> Educational resources to help you succeed in e-commerce.</li>
              </ul>
              
              <p style={{ marginTop: "2rem" }}>
                Join us at Orbi University and embark on your journey to e-commerce success. 
                Whether you're just starting out or looking to scale your existing business, 
                we have the knowledge and resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer1 />
    </div>
  );
};

export default About;
