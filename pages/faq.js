import Head from 'next/head'
import Link from 'next/link'

export default function Faq() {
  return (
    <div className="container">
      <Head>
        <title>The Barrioings Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lora:wght@500&family=Work+Sans:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>

      <main>
        <Link href="/"><h1 className="title">Welcome to the Barrioings Wedding</h1></Link>
        <h2>brought to you by Elizabeth Barrios & Dylan Goings</h2>

        <h3 className="description">
          Frequently Asked Questions
        </h3>
        <div className="listContainer">
          <ul className="faqlist">
            <li className="toc">Dress Code & Gifts</li>
            <li><Link href="/faq#dresscode"><a>What is the dress code? What should I wear? Is there a theme?</a></Link></li>
            <li><Link href="/faq#weather"><a>What weather should I expect?</a></Link></li>
            <li><Link href="/faq#indoor"><a>Will the wedding be indoors or outdoors?</a></Link></li>
            <li><Link href="/faq#registry"><a>Are you registered? Where should we ship your gift?</a></Link></li>
            <li><Link href="/faq#pictures"><a>You want me to bring/ship you a framed picture? Can you be more specific about this?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">COVID Protocols</li>
            <li><Link href="/faq#covid"><a>What COVID health and safety measures will you be taking during the event?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">Phone Protocols</li>
            <li><Link href="/faq#social"><a>Can I post pictures of the wedding on social media? Is there an event hashtag?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">What Do I Need To Know About The Event</li>
            <li><Link href="/faq#location"><a>Where is the wedding taking place?</a></Link></li>
            <li><Link href="/faq#schedule"><a>What time is the ceremony? What time is the reception?</a></Link></li>
            <li><Link href="/faq#rsvp"><a>How do I RSVP?</a></Link></li>
            <li><Link href="/faq#rsvpdeadline"><a>When is the RSVP deadline?</a></Link></li>
            <li><Link href="/faq#kids"><a>Can I bring my kids? Will there be a babysitter?</a></Link></li>
            <li><Link href="/faq#plusone"><a>Can I bring my partner/spouse/romantic other?</a></Link></li>
            <li><Link href="/faq#virtual"><a>I can’t attend the wedding in person. Will there be a virtual wedding celebration?</a></Link></li>
            <li><Link href="/faq#food"><a>What type of food and drink will be served during the cocktail hour and reception?</a></Link></li>
            <li><Link href="/faq#diet"><a>I have dietary restrictions, what’s the best way to communicate that with you?</a></Link></li>
            <li><Link href="/faq#bar"><a>Will there be an open bar?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">Lodging and Transport</li>
            <li><Link href="/faq#hotel"><a>Do you have a hotel block for guests? Where do you recommend I stay?</a></Link></li>
            <li><Link href="/faq#transportation"><a>Will transportation be provided? Is there parking at the venue(s)?</a></Link></li>
            <li><Link href="/faq#accessibility"><a>Are the ceremony and reception location wheelchair accessible?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">Other Events We Hope You Can Attend</li>
            <li><Link href="/faq#events"><a>Are there other wedding events I can attend?</a></Link></li>
          </ul>
          <ul className="faqlist">
            <li className="toc">Other Questions</li>
            <li><Link href="/faq#unanswered"><a>I have a question that I just can’t find the answer to, what is the best way to contact you?</a></Link></li>
          </ul>
          <hr></hr>
          <ul className="faqs">
            <li id="location">
              <p className="question">Where is the wedding taking place?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Both the ceremony and reception will take place at the <a href="https://goo.gl/maps/Ge6i28KAUbpqtEdU7">Ypsilanti Freighthouse, 100 Market Pl, Ypsilanti, MI 48198</a></p>
            </li>
            <li id="schedule">
              <p className="question">What time is the ceremony? What time is the reception?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We’re starting the celebration with dinner! There will be a short cocktail “hour” beginning at 5:15 with drinks and appetizers. Please plan to be seated at your dinner table no later than 6:00pm. Dinner will be followed directly by the ceremony. Then we’ll transition to dessert, coffee, drinks and dancing!</p>
              <p className="answer">Please refer to this <Link href="/#schedule"><a>timeline</a></Link> if needed.</p>
            </li>
            <li id="dresscode">
              <p className="question">What is the dress code? What should I wear? Is there a theme?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We don’t have a theme or official wedding colors. Attire is semi-formal.</p>
              <p className="answer">Dylan and Elizabeth value fun and creativity over convention. Vintage, non-traditional, very traditional, gender-queer outfits are all encouraged. The more memorable you can make this for us, the better!</p>
            </li>
            <li id="weather">
              <p className="question">What weather should I expect?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">June can sometimes be hot and humid in Michigan. Plan for warm weather but be prepared for it to cool off later in the evening.</p>
            </li>
            <li id="indoor">
              <p className="question">Will the wedding be indoors or outdoors?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">The wedding and reception will be indoors. As a result, proof of vaccination will be required for all. That said, we are making sure that the event will have excellent ventilation, to ensure everyone’s safety.</p>
              <p className="answer">You can read more about it in the <Link href="/faq#covid"><a>COVID protocols</a></Link> section.</p>
            </li>
            <li id="transportation">
              <p className="question">Will transportation be provided? Is there easy parking at the venue(s)?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We are not providing any formal transportation for the event, unless you are staying at our <a href="https://www.marriott.com/events/start.mi?id=1646233047781&key=GRP">designated hotel</a> for which there will be a shuttle.</p>
              <p className="answer">Our ceremony and reception are located in the same space, so there won’t be any transit between them.</p>
              <p className="answer">There is not private parking at our event location, but there is ample, free public parking for those who feel comfortable driving, and we’ll provide parking maps closer to the event. Lyft/Uber is a great option for those who don’t want to drive themselves. Please stay safe and default to a ride service or carpooling if you plan to drink.</p>
            </li>
            <li id="events">
              <p className="question">Are there other wedding events I can attend?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Yes! Our hope is to create opportunities to catch up with our guests outside of the wedding reception itself, so we have organized three different events open to all guests. No RSVP necessary, drop by and stay as long as you wish.Letting us know which events you are planning to attend would be greatly appreciated.</p>
              <p className="answer"><b>Thursday, June 23rd, 7:30-10:00pm - </b>Weather permitting, there will be an informal gathering with desserts and drinks hosted at Dylan’s mom’s house:</p>
              <blockquote>
                704 Patricia Avenue
                <br />Ann Arbor, MI 48104
              </blockquote>
              <p className="answer"><b>Saturday, June 25th, 11:00am - </b>Dylan and Elizabeth will host a brunch consisting of bagels and coffee for all guests at their house:</p>
              <blockquote>
                703 Collegewood Street
                <br />Ypsilanti, MI 48197
              </blockquote>
              <p className="answer"><b>Saturday evening:</b> We are planning to attend the <a href="https://a2sf.org/">A2 Summer Festival</a> at the University of Michigan, which is free and open to the public. Our plan is to show up at around 6pm, with some chairs and blankets. This is not an exclusive event for our wedding, just an opportunity for additional socializing with all our friends and family who’d like to join us for some live music!</p>
              <p className="answer bullet"><a href="https://a2sf.org/events/canopy-by-pneuhaus-and-bike-powered-events/">Canopy by Pinehouse, 6pm</a></p>
              <p className="answer bullet"><a href="https://a2sf.org/events/ladama/">LADAMA Concert, 8:30pm</a></p>
              <p className="answer">Closer to the date we will provide more information about getting to the A2 Summer Festival.</p>
            </li>
            <li id="rsvp">
              <p className="question">How do I RSVP?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Please <a href="https://barrioings.online-rsvp.com/">follow this link to RSVP</a>, or just communicate your intentions directly to Dylan via email, text, or phone call.</p>
            </li>
            <li id="rsvpdeadline">
              <p className="question">When is the RSVP deadline?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Please get us your RSVP by June 3rd, so we have time to buy enough booze.</p>
            </li>
            <li id="kids">
              <p className="question">Can I bring my kids? Will there be a babysitter?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Kids are absolutely invited. We won’t have any childcare provided, and please note that we are not expecting the DJ to keep the music kid-friendly during the party.</p>
            </li>
            <li id="plusone">
              <p className="question">Can I bring my partner/spouse/romantic other?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Yes please! Just make sure we know how many people you are RSVPing.</p>
            </li>
            <li id="virtual">
              <p className="question">I can’t attend the wedding in person. Will there be a virtual wedding celebration?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We won’t be streaming or otherwise broadcasting our wedding virtually. Our intention with this event was to bring together friends and family in person. Amidst this ongoing pandemic, the chance to be present with you all is a gift that we don’t want to distract from. For those of you unable to attend, we can’t wait for the next opportunity to see you in person!</p>
            </li>
            <li id="hotel">
              <p className="question">Do you have a hotel block for guests? Where do you recommend I stay?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Yes, please <a href="https://www.marriott.com/events/start.mi?id=1646233047781&key=GRP">follow this link</a>!</p>
            </li>
            <li id="accessibility">
              <p className="question">Are the ceremony and reception location wheelchair accessible?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Yes!</p>
            </li>
            <li id="food">
              <p className="question">What type of food and drink will be served during the cocktail hour and reception?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We’ll be serving light snacks during cocktail hour, followed by a delicious dinner, and of course dessert and coffee. There will be an open bar for the duration of the event.</p>
            </li>
            <li id="diet">
              <p className="question">I have dietary restrictions, what’s the best way to communicate that with you?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We definitely want to make sure you enjoy your meal on our wedding day. Please contact us directly if you have any specific dietary restrictions. We already have vegetarian options for the cocktail hour and dinner, but it is easy for us to accommodate individuals for whatever you might need.</p>
            </li>
            <li id="bar">
              <p className="question">Will there be an open bar?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Yes, please tip your bartender!</p>
            </li>
            <li id="registry">
              <p className="question">Are you registered? Where should we ship your gift?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">We are not registered and <b>do not wish to receive any physical gifts</b>. You are welcome but not expected to contribute to our wedding in these three ways:</p>
              <ol>
                <li>
                  <h3>Help us decorate our wedding and our house with pictures of you</h3>
                  <p className="answer">The only physical object we would like to receive is a framed picture of you with one or both of us. This event is all about celebrating our communities, and as a result, we want the main decor to be framed pictures of the attendees. After the event, we are planning to decorate a wall of our house with these pictures, as a reminder of our loved ones.</p>
                  <p className="answer">Even if you can’t attend the wedding, we would love to have your picture be part of the event and of our wall. You can either bring the picture <b>with no wrapping</b> to the wedding, or you can mail it to the following address (just make sure it arrives before June 24th):</p>
                  <blockquote>
                    Dylan Goings & Elizabeth Barrios
                    <br />703 Collegewood Street
                    <br />Ypsilanti, MI 48197
                  </blockquote>
                </li>
                <li>
                  <h3>Help us make this a carbon neutral event</h3>
                  <p className="answer">While individual actions by themselves are not a sufficient solution to the climate change crisis, they can reframe our assumptions and expectations about life on this planet, which in turn can help drive more sweeping and collective changes. We are attempting to reduce the carbon footprint of our event as much as possible.</p>
                  <p className="answer">We would appreciate it if you helped us offset your climate impact while attending this event by purchasing carbon offsets for your travel. To get you started, here are two resources for calculating your carbon footprint and purchasing offsets:
                  <br /><a href="https://terrapass.com/product-category/individuals">https://terrapass.com/product-category/individuals</a>
                  <br /><a href="https://native.eco/for-individuals/calculators/">https://native.eco/for-individuals/calculators/</a></p>
                  <p  className="answer">If you do purchase carbon offsets, please let us know! Just send an email or a text with the total offests purchased, so we can account for that in the final evaluation of our event.</p>
                </li>
                <li>
                  <h3>Help us make life easier for our loved ones in Venezuela</h3>
                  <p className="answer">Venezuela is still undergoing <a href="https://www.worldvision.org/disaster-relief-news-stories/venezuela-crisis-facts">a humanitarian crisis</a>, which continues to impact everyone in the country (minus the super rich and top members of the military). As a result, any monetary gifts we receive for our wedding will be sent to Venezuela to continue securing access to food and medical care for <a href="https://www.thenewhumanitarian.org/news-feature/2020/02/25/Venezuela-elderly-hunger-crisis">elderly members</a> of Elizabeth’s family.</p>
                  <p className="answer">Monetary gifts can be made via check, cash, <a href="paypal.me/dylangoings">paypal</a>, or <a href="https://www.venmo.com/u/Dylan-Goings-1">venmo</a></p>
                </li>
              </ol>
            </li>
            <li id="pictures">
              <p className="question">You want me to bring/ship you a framed picture? Can you be more specific about this?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Ideally we would like for the frame to be black or silver, in any size up to 8x10.</p>
              <p className="answer">As far as the picture itself goes, we want to make sure that we can see your face (you’re the most important person in this picture), and hopefully one of the people getting married. We’re more than happy to have these pictures be silly or old, but we will settle for any presentable picture featuring a guest with one of the people getting married.</p>
            </li>
            <li id="social">
              <p className="question">Can I post pictures of the wedding on social media? Is there an event hashtag?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Help us make this an <a href="https://www.lecindaward.com.au/journal/2018/the-benefits-of-an-unplugged-wedding-ceremony">unplugged wedding</a>. This is a rare chance for so many of us to gather together in one place, and we want to take that opportunity to appreciate and be present with each other during the event. We don’t want posts on social media strengthening the bad feelings of missing out for those that can’t be with us at the wedding.</p>
              <p className="answer">We are hiring a professional photographer who will do an excellent job of capturing the important moments and memories, and those photos will be made available to all the attendees after the event.</p>
              <p className="answer">If you’d like to take selfies for your own personal memories, we understand and that’s fine. Please try to limit those to the time before the ceremony. If you’re going to take pictures of groups or other people at the event, please make sure they have your consent before doing so.</p>
            </li>
            <li id="covid">
              <p className="question">What COVID health and safety measures will you be taking during the event?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Getting married in the midst of a global pandemic means that everyone’s health and safety is a top priority for us. Part of our RSVP process has been requesting vaccination status, and expecting all attending guests to be fully vaccinated (including boosters) by the day of the wedding.</p>
              <p className="answer">Our venue, while indoors, is a large high-ceilinged space with bay doors that will be open to provide airflow. We are also equipping the space around the dining tables with high-powered air purifiers rated to filter COVID-19 particles. Guests are encouraged to mask up if they’d prefer.</p>
              <p className="answer">We are <b>STRONGLY REQUESTING</b> that all attendees observe social distancing guidelines and wear a mask whenever indoors and while traveling <b>FOR ONE FULL WEEK</b> prior to the event.</p>
              <p className="answer"><b>We will have guests visiting from abroad and immuno-compromised individuals in attendance. Despite current government policies and media messaging, this pandemic is NOT over. We encourage everyone to get tested for COVID before traveling and to NOT ATTEND if you test positive up to 3 days before the event.</b></p>
              <p className="answer">While this may seem severe, we would rather not have the wedding than put family and loved ones at risk. This is our wedding and event, so please set aside any personal opinions or politics around this issue and adhere to these guidelines we are setting out. If you have to make some personal sacrifices, please do it out of your love and respect for us.</p>
            </li>
            <li id="unanswered">
              <p className="question">I have a question that I just can’t find the answer to, what is the best way to contact you?<Link href="/faq"><a>🔝</a></Link></p>
              <p className="answer">Send us an email, a text, or give us a phone call! We’re happy to answer any questions you might have.</p>
            </li>
          </ul>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgb(255 255 241);
          color: rgb(70 70 70);
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: "Work Sans";
        }

        h1, h2 {
          text-align: center;
        }

        b {
          font-weight: bold;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
          cursor: pointer;
          font-family: "Lora";
        }

        .description {
          text-align: center;
          line-height: 1.5;
          font-size: 2rem;
        }

        .listContainer {
          max-width: 800px;
        }

        ul {
          margin: 0;
          padding: 1.5rem;
          width: 100%;
        }

        .faqlist {
          padding: 0.5rem 3rem;
        }

        .faqlist li {
          margin: .5rem 0;
        }

        a,
        a:visited {
          text-decoration: none;
          font-size: 1.25rem;
          color: black;
        }

        a:hover {
          background-color: #95f6e6;
        }

        .faqlist .toc {
          list-style-type: square;
          padding-left: 0;
          margin-left: -1.5rem;
          font-weight: bold;
          font-size: 1.5rem;
          font-family: "Lora";
        }

        .faqs {
          list-style-type: none;
          max-width: 800px;
        }

        .faqs li {
          margin: 2rem 0;
        }

        .faqs a {
          text-decoration: underline;
        }

        .faqs li p {
          margin: 0;
          line-height: 1.5;
        }

        .faqs li p.question {
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Lora";
        }

        .faqs li p.question a {
          text-decoration: none;
        }

        .faqs li p.answer {
          margin-top: 0.5rem;
          font-size: 1.2rem;
        }

        .faqs li blockquote {
          font-size: 1.25rem;
        }

        .faqs li p.answer.bullet {
          padding-left: 1rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
