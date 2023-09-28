import React from "react";

import Footer from "../layouts/Footer";
import "../styles/pages/faq.scss";
import Button from "../components/ui/Button";
import message from ".././assets/svg/faq-message.svg";
import delivery from ".././assets/svg/faq-delivery.svg";
import cancel from ".././assets/svg/faq-cancel.svg";
import search from ".././assets/svg/faq-search.svg";
import refund from ".././assets/svg/faq-refund.svg";
import payment from ".././assets/svg/faq-payment.svg";
import service from ".././assets/svg/faq-message.svg";

const FAQ = () => {
  const faqData = [
    {
      icon: message,
      title: "How do I change my account email?",
      text: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email.",
    },
    {
      icon: payment,
      title: "What should I do if my payment fails?",
      text: "If your payment fails, you can use the (COD) payment option, if available on that order. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days.",
    },
    {
      icon: cancel,
      title: "What is your cancellation policy?",
      text: "Once you make a reservation with us, you bind us to make the subject property available only to you. This means we are then obliged to turn down any more offers from other interested renters. Even if we receive better offers from other interested parties, we have to decline them; even if your lease or rental period hasn’t started yet...Read More",
    },
    {
      icon: delivery,
      title: "How do I check order delivery status ?",
      text: "Please tap on “Property Data” section under main Dashboard of App/Website/M-site to check your order status.",
    },
    {
      icon: refund,
      title: "What is Our Refund Policy?",
      text: "We will reimburse You no later than 14 days from the day on which We receive your cancellation confirmation. We will use the same means of...Read More",
    },
    {
      icon: service,
      title: "How do I become a Service Provider?",
      text: "You can Signup to be a “Service Provider” by going to “Switch Mode” on your “Dashboard” and then Register, or Click on “Services” on the Landing page of App/Website/M-site to apply.",
    },
  ];

  return (
    <div className="faq-container">

      <header className="faq-header">
        <section className="faq-header-section">
          <p>FAQs</p>
          <h1>Ask us anything</h1>
          <h4>Have any questions? We're here to assist you.</h4>
          <form>
            <div>
              {" "}
              <img src={search} alt="search" />{" "}
              <input type="search" name="" id="" placeholder="Search" />
            </div>
          </form>
        </section>
      </header>
      <div className="faq-info-container">
        <section className="faq-info">
          {faqData.map((item) => {
            const { icon, title, text } = item;
            return (
              <article className="faq-info-article" key={title}>
                <img src={icon} alt="icon" />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </section>
        <section className="faq-last">
          <div>
            <h4>Still have questions?</h4>
            <p>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <Button
            link="/"
            text="Get in touch"
            styles={{
              borderRadius: "0%",
              padding: "0.5rem 1rem",
              fontWeight: "600",
              fontSize: "12px",
            }}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
