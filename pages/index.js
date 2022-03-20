import Head from 'next/head'
import Link from 'next/link'
import Schedule from '../components/schedule'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Barrioings Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header_container">
        <h1 className="title">Welcome to the Barrioings Wedding</h1>
        <h2>brought to you by Elizabeth Barrios & Dylan Goings</h2>
        <p className="description">
          Friday, June 24th, 2022, 6:00pm EST
        </p>
        <p className="description">
          <a href="https://goo.gl/maps/Ge6i28KAUbpqtEdU7">Ypsilanti Freighthouse</a><br />
          100 Market Pl, Ypsilanti, MI 48198
        </p>
      </div>
      <div className="background_block"></div>
      <main>
        <div className="grid">
          <div className="intro">
            <p>We're getting married, mainly because we needed an excuse to throw a dance party!</p>

            <p>It turns out there's still a global pandemic happening, but we're pushing ahead.
              We want to see all your lovely faces and create a safe environment for us to revel in each others company.</p>

            <p>We're planning to host some non-traditional events both the day before and the day after the wedding for different groups of family and friends.
              We'll communicate more details as we have them.
              For now, please plan your travel to be here on Friday and Saturday, and if you're able to, on Thursday evening as well.</p>
          </div>
          <Link href="/faq">
            <a className="card">
              <h3>FAQs &rarr;</h3>
              <p>The answers to life, the universe, and everything</p>
            </a>
          </Link>

          <a href="https://barrioings.online-rsvp.com" className="card">
            <h3>RSVP &rarr;</h3>
            <img src="qrcode_1879.png" width="150px"></img>
          </a>
          <a href="https://www.marriott.com/events/start.mi?id=1646233047781&key=GRP" className="card">
            <h3>Hotel Reservations &rarr;</h3>
            <p>User our hotel room block for your stay</p>
          </a>
          <a href="mailto:dylan@dgoings.com" className="card">
            <h3>Questions? &rarr;</h3>
            <p>Email Dylan with whatever's on your mind!</p>
          </a>
        </div>
        <h2>Schedule of Events</h2>
        <Schedule />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header_container {
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-column: space-between;
          height: 100vh;
          max-height: 100vh;
          position: fixed;
          top: 0;
          width: 100%;
          padding: 5rem 0;
          text-align: center;
          background-image: url('/couple1.jpg');
          background-position: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          transition: margin-top 0.2s;
        }
        .header_container p {
          background-color: rgba(255,255,255,50%);
        }
        .background_block {
          pointer-events: none;
          height: 100vh;
          max-height: 100vh;
        }

        main {
          z-index: 3;
          overflow: visible;
          min-height: 101vh;
          width: 100%;
          transition: margin-top 0.4s;
          margin-bottom: -100vh;
          padding: 2rem 0;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
        }

        a {
          // color: inherit;
          // text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
            Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          align-self: stretch;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
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
