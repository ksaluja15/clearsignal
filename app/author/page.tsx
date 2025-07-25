// author page
import TiltedCard from '../components/TiltedCard';

const heroImage = '/ks.jpg';

export default function Page() {
  return (
    <article className="pb-8 sm:pb-16">
      
      <div className="flex flex-col items-center justify-center mt-16">
        <TiltedCard
          imageSrc={heroImage}
          altText="Kunal Saluja"
          captionText="Kunal Saluja"
          containerHeight="400px"
          containerWidth="300px"
          imageHeight="400px"
          imageWidth="300px"
          rotateAmplitude={15}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
          >Kunal Saluja</TiltedCard>
            <h2 className="flex justify-center mt-12 items-center text-white text-3xl md:text-4xl font-bold h-full">
            Kunal Saluja
            </h2>
        </div>

      <div className="post-content content-grid mt-16 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <hr className="!my-12 border-gray-700" />
        <h2 className="!mt-8 text-3xl font-bold text-white md:text-4xl">
          About Me
        </h2>
        <ul className="list-inside list-disc space-y-3">
          <li>
            Seasoned Computer Vision Researcher with over a decade of experience
            crafting innovative AI solutions across diverse industries including
            AR/VR, robotics, retail, and agriculture.
          </li>
          <li>
            Demonstrated success in leading high-performance teams and delivering
            scalable, production-ready machine learning models.
          </li>
          <li>
            Passionate about bridging the gap between cutting-edge research and
            real-world applications.
          </li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Experience
        </h2>
        <ul className="list-inside list-disc space-y-3">
          <li>Bonsai Robotics - Director, Computer vision (2022 - 2024)</li>
          <li>Apple - Tech Lead Manager (2018 - 2022)</li>
          <li>Gumgum - Computer Vision Scientist (2016-2018)</li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Education
        </h2>
        <ul className="list-inside list-disc space-y-3">
          <li>MS Robotics, Johns Hopkins University</li>
          <li>BE Mechanical Engineering, BITS Pilani</li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Academic associations
        </h2>
        <ul className="list-inside list-disc space-y-3">
          <li>Bossa Nova Robotics</li>
          <li>Grey Orange Robotics</li>
          <li>Technical University of Munich</li>
          <li>Bhabha Atomic Research Center</li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Publications
        </h2>
        <ul className="list-inside list-disc space-y-4">
          <li>
            High Fidelity 3D Reconstructions with Limited Physical Views{' '}
            <a
              href="https://machinelearning.apple.com/research/high-fidelity-3d-reconstructions?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </li>
          <li>
            Resonance-driven dynamic manipulation: Dribbling and juggling with
            elastic beam{' '}
            <a
              href="https://ieeexplore.ieee.org/abstract/document/6906967?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </li>
          <li>
            Learning obstacle behavior for improved threat mapping during
            navigation{' '}
            <a
              href="https://jscholarship.library.jhu.edu/items/512c0c34-7053-4893-8590-8871c41f765c?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">Awards</h2>
        <ul className="list-inside list-disc space-y-3">
          <li>
            Classified as an "alien of extraordinary ability" by the United
            States government and awarded the EB-1A Green Card (2024).
          </li>
          <li>
            Awarded the prestigious Narotam Sekhsaria Foundation (NSF)
            Scholarship to pursue a higher degree (MS) in the United States
            (2014).
          </li>
          <li>
            Awarded the DAAD WISE Scholarship as an undergraduate student to
            pursue robotics research at TU Munich (2013).
          </li>
        </ul>

        <hr className="!my-12 border-gray-700" />

        <h2 className="text-3xl font-bold text-white md:text-4xl">Contact</h2>
        <blockquote className="border-l-4 border-gray-600 pl-4 italic">
          <p>
            For further queries, please email me at{' '}
            <a
              href="mailto:kunalsaluja15@gmail.com"
              className="text-[var(--color-accent)] hover:underline"
            >
              kunalsaluja15@gmail.com
            </a>
          </p>
        </blockquote>
      </div>
    </article>
  );
}