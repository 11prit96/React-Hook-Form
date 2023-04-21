import { useEffect, useState } from "react";

export default function About() {
  const [forceRender, setForceRender] = useState(false);
  useEffect(() => {
    setForceRender(true);
  }, []);

  useEffect(()=>{
    document.querySelector(".aboutContainer").classList.toggle("changeLeftRight")
  },[forceRender])

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div className="aboutContainer">
        <p className="aboutHeading">History</p>
        <div>
          <p className="aboutDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            unde mollitia quae, nostrum, cupiditate doloremque eligendi debitis
            numquam officiis blanditiis commodi harum! Nobis, dolorem quibusdam
            nesciunt eligendi ipsum quia hic harum, maxime beatae ab corporis
            ratione officia est quaerat doloribus et dolore tenetur nostrum
            dignissimos? Soluta, culpa similique beatae delectus consequuntur
            esse corrupti adipisci doloribus! Corporis necessitatibus est
            voluptas debitis molestiae libero eaque deleniti tempora ducimus,
            reprehenderit incidunt nam fuga odit consequatur enim perspiciatis
            tempore suscipit rem velit natus unde obcaecati, animi molestias
            blanditiis! Eligendi sit harum quaerat! Accusantium, praesentium.
            Labore, nisi eum in laudantium rerum necessitatibus soluta sint hic.
          </p>
        </div>
        <div className="menu">
          <div className="follow">Follow Us</div>
          <div className="line" />
          <div className="menuLink">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </div>
  );
}
