import React from 'react';
import '../styles/About.scss';

function About() {
  return (
    <section id="about" className="about-section">
     <div class="container">
        <div class="row">
            <div class="col-md-5">
                <img src={`${process.env.PUBLIC_URL}/undraw_data_trends_re_2cdy.svg`} class="img-fluid" alt="Deskripsi Gambar" />
            </div>
            <div class="col-md-7">
                <h2>About Us</h2>
                <p>
                    We are a startup that provides an ERP-like platform to help entrepreneurs
                    easily manage their inventory and profits. Our platform offers a tiered system
                    where customers can purchase products according to their needs and level.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
