import { Avatar } from "@/components/Avatar"
import Footer from "@/components/Footer"
import { Project } from "@/components/Project"
import { Raleway, Roboto } from "next/font/google"

import GoogleDesignImage from "@/assets/google-thumb.png"
import MegaphoneImage from "@/assets/megaphone-thumb.png"
import NetflixImage from "@/assets/netflix-leportal.png"
import AtlassianImage from "@/assets/plant-your-code-thumbnail.png"
import PensoCoImage from "@/assets/pensoco-thumbnail.png"
import RaheemImage from "@/assets/raheem-thumbnail.png"
import TeachingBooksImage from "@/assets/teaching-books-thumbnail.png"
import RideReportImage from "@/assets/ride-report-thumbnail.png"
import { Job } from "@/components/Job"

const ralewayFont = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
})

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
})

export default function Home() {
  return (
    <div className={`${ralewayFont.variable} ${robotoFont.variable}`}>
      <main className="mx-auto max-w-5xl text-sm md:text-base px-10 md:px-14 xl:px-5">
        <div className="text-center flex flex-col gap-2 items-center justify-center my-20">
          <Avatar />

          <h1 className="font-serif text-6xl font-black text-teal">
            Jared Moran
          </h1>
          <p>
            <strong>
              Father / Husband / Friend / Engineer / Web Developer
            </strong>
          </p>
          <p>Visalia, CA, USA</p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-black text-teal">
              About Me
            </h2>
            <p>
              I enjoy making designs a reality. I am an engineer who specializes
              in taking responsible, thoughtful designs and turning them into
              responsive, user-friendly experiences using HTML, CSS and
              JavaScript.
            </p>
            <p>
              When I&rsquo;m not working it&rsquo;s a pretty safe bet that
              you&rsquo;ll find me spending time with my wife and our two
              daughters. On the side I consider myself a bit of an amateur
              woodworker and a very occasional gamer.{" "}
              <span role="img" aria-label="smiley face emoji">
                😄
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-black text-teal">
              Currently
            </h2>
            <p>
              Currently working as a UI Developer at{" "}
              <a
                href="https://bestomer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink underline hover:text-pink-dark"
              >
                Bestomer
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-black text-teal">
              Recent Work (that I can share)
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-10 gap-y-20 justify-center">
              <Project
                title="Google Design"
                description="With Instrument, I helped build out a fully customizable website
                  to showcase Design at Google. Primary tech: NextJS/React and
                  Wagtail."
                url="https://design.google"
                image={GoogleDesignImage}
              />

              <Project
                title="Megaphone by Spotify"
                description="With Penso Co (engineering) and The Brigade (design), I built out a shiny new site for the Megaphone team to help market their great product. Primary tech: NextJS/React and Contentful."
                url="https://megaphone.spotify.com"
                image={MegaphoneImage}
              />

              <Project
                title="Netflix - Law Enforcement Request Portal"
                description="Via BlueInGreen, we built out an application for law enforcement
                  officials in 20+ countries to submit formal, legal requests to
                  Netflix in order to assist in ongoing investigations. I handled
                  the front end while working with another BiG engineer who built
                  out our API. Primary tech: NextJS/React."
                url="https://leportal.netflix.com"
                image={NetflixImage}
              />

              <Project
                title="Atlassian - Plant Your Code, v2"
                description="Penso Co. was tasked with making some UX improvements to
                  Atlassian's PYC coding challenge. We adjusted the design, reworked
                  the application flow and elevated the real winners of the coding
                  challenges - the charities."
                image={AtlassianImage}
              />

              <Project
                title="Penso Co."
                description="New portofolio site to showcase new work, a new studio, and some
                  new faces."
                image={PensoCoImage}
              />

              <Project
                title="Raheem"
                description="An independent service for collecting data on police encounters in
                  the US. We created the MVP to get the app up and running."
                image={RaheemImage}
              />

              <Project
                title="TeachingBooks"
                description="Complete redesign and modernization of a web app that's been
                  around since 2001."
                image={TeachingBooksImage}
              />

              <Project
                title="Ride Report"
                description="Marketing site refresh for the Portland-based micromobility
                  startup."
                image={RideReportImage}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl font-black text-teal">
              Work History
            </h2>

            <div className="flex flex-col gap-10">
              <Job
                company="Bestomer"
                title="UI Developer"
                dates="2024 - Present"
              />
              <Job
                company="Matcha"
                title="Senior Software Engineer"
                dates="2023 - 2024"
              />
              <Job
                company="Netflix"
                title="Software Engineer (Contract)"
                dates="April 2020 - May 2022"
              />
              <Job company="Independent Contractor" dates="2020 - 2023" />
              <Job
                company="Penso Co."
                title="Technology Lead"
                dates="2018 - 2020"
              />
              <Job
                company="Cozy (acquired 2018)"
                title="Senior Software Engineer"
                dates="2014 - 2018"
              />
              <Job
                company="Instrument"
                title="Senior Web Developer"
                dates="2010 - 2014"
              />
              <Job
                company="Opus Creative"
                title="Web Developer"
                dates="2008 - 2010"
              />
              <Job
                company="TheBigDay.com"
                title="Web Developer"
                dates="2005 - 2008"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div className="triangle-left"></div>
      <div className="triangle-right"></div>
      <div className="triangle-bottom"></div>
    </div>
  )
}
