import React, { useEffect, useState } from "react";
import Member from "../Member/Member";
import "./About.css";

const About = () => {
  // data fetching
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./teams.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <section>
      {/* about maliha tech */}
      <div>
        <h3 className='text-capitalize py-4' style={{ backgroundColor: "#F5F5F5" }}>
          about maliha tech
        </h3>

        {/* about description */}
        <div className='container'>
          <p className='text-start'>
            <strong>Maliha tech.</strong> is an institution where empowering the community for an excellent
            standard of learning is what we desire. We endeavor for the continuous improvement of our leaders
            who will work for constructing a better future. The institute is dedicated to serving the quality
            training programs under ISO 87024M: 2013 certification which remarks us in the IT world. We will
            continue to share our knowledge for contributing to the success of individuals and to serve
            society with the best interest.
          </p>
          <p className='text-start'>
            We are committed to providing our students with a platform where superiority is the mantra. We
            nurture the young talent by sharing knowledge, providing supports in learning techniques,
            co-operating them for international standard projects, making successful freelancers and driving
            our youth towards a world of entrepreneurship and thus reducing inequalities. Our culture is
            important to us and our team of experts drives our culture. The skilled human resource make our
            deliverables valuable that really helps us to set our standard internationally.
          </p>
          <p className='text-start'>
            In this fast-paced digital world, achieving in career and reaching in targeted goal is depending
            on the proper execution of planning, implementing and sustaining changes. So getting there with an
            institution like us will be your wise choice. Your great experience of learning influences our way
            of training and thus we serve our students and engage with our commitments. Here we invite you to
            come and join us to have a change in the result of your life and thus we would be grateful to know
            you and to strengthen a long-lasting relationship.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className='container'>
        <h3 className='text-danger my-5 team-title'>Our Team</h3>
        <div className='teams-container '>
          {members.map((member) => (
            <Member member={member} key={member.id}></Member>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
