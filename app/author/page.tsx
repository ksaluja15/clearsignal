// author page
import Card from "@/app/components/Card";
import TiltedCard from "@/app/components/TiltedCard";
const heroImage = "/ks.jpg";
import TextType from '@/app/components/TextType';

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
        />
        <h2 className="flex justify-center mt-12 items-center text-white text-3xl md:text-4xl font-bold h-full">
          <TextType 
              text={["Kunal Saluja", "Computer Vision Researcher"]}
              typingSpeed={40}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
        </h2>
      </div>

      <div className="post-content content-grid mt-8 space-y-8 px-4 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
        <hr className="!my-12 border-gray-700" />
        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          About Me
        </h2>

        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            A decade of experience
            crafting innovative AI solutions across diverse industries including
            AR/VR, robotics, retail, and agriculture.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Demonstrated success in leading high-performance teams and
            delivering scalable, production-ready machine learning models.
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Passionate about bridging the gap between cutting-edge research and
            real-world applications.
          </p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          Experience
        </h2>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Bonsai Robotics - Director, Computer vision (2022 - 2024)
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">Apple - Tech Lead Manager (2018 - 2022)</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Gumgum - Computer Vision Scientist (2016-2018)
          </p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          Education
        </h2>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">MS Robotics, Johns Hopkins University</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">BE Mechanical Engineering, BITS Pilani</p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          Academic associations
        </h2>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">Carnegie Mellon University</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">Technical University of Munich</p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">Bhabha Atomic Research Center</p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          Publications
        </h2>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            High Fidelity 3D Reconstructions with Limited Physical Views{" "}
            <a
              href="https://machinelearning.apple.com/research/high-fidelity-3d-reconstructions?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Resonance-driven dynamic manipulation{" "}
            <a
              href="https://ieeexplore.ieee.org/abstract/document/6906967?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Learning obstacle behavior for improved threat mapping during
            navigation{" "}
            <a
              href="https://jscholarship.library.jhu.edu/items/512c0c34-7053-4893-8590-8871c41f765c?ref=clearsignal.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              (Link)
            </a>
          </p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <h2 className=" mb-12 text-3xl font-bold text-white md:text-4xl flex justify-center">
          Awards
        </h2>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Classified as an "alien of extraordinary ability" by the United
            States government and awarded the EB-1A Green Card (2024).
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Awarded the prestigious Narotam Sekhsaria Foundation (NSF)
            Scholarship to pursue a higher degree (MS) in the United States
            (2014).
          </p>
        </Card>
        <Card className="flex flex-col items-center justify-center">
          <p className="text-center">
            Awarded the DAAD WISE Scholarship as an undergraduate student to
            pursue robotics research at TU Munich (2013).
          </p>
        </Card>

        <hr className="!my-12 border-gray-700" />

        <blockquote className="border-l-4 border-gray-600 pl-4 italic">
          <p>
            For further queries, please email me at{" "}
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
