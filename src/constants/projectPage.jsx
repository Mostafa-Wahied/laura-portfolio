import takenoteBanner from "../assets/takenoteBanner.png";
import takenoteBannerImage from "../assets/takenote-banner-image.png";
import takenoteBanner2 from "../assets/takenoteBanner2.png";
// import takenoteLogo from "../assets/takenoteLogo.png";
// import takenoteOpportunity from "../assets/takenoteOpportunity.png";
import pathwaysBanner from "../assets/pathwaysBanner.png";
// import pathwaysLogo from "../assets/pathwaysLogo.png";
import pathwaysOpportunity from "../assets/pathwaysOpportunity.jpg";
// import alightOpportunity from "../assets/alightOpportunity.png";
import galleryImage1 from "../assets/pathwaysGalleryImage1.png";
import galleryImage2 from "../assets/pathwaysGalleryImage2.jpg";
import galleryImage3 from "../assets/pathwaysGalleryImage3.png";
import persona1Image from "../assets/persona1-img.jpg";
import persona2Image from "../assets/persona2-img.jpg";
import persona3Image from "../assets/persona3-img.jpg";
import persona4Image from "../assets/persona4-img.jpg";
import takenoteInsightsSideImage from "../assets/takenote-insights-side-image.jpeg";
import design1 from "../assets/takenote-design-1.jpg";
import design2 from "../assets/takenote-design-2.png";
import design3 from "../assets/takenote-design-3.gif";
import alightBanner from "../assets/alight-banner.png";
import alightLogo from "../assets/alight-logo.png";
import alightFastCompanyImage from "../assets/alight-fast-company-image.png";
import alightReachImage from "../assets/alight-reach-image.png";

export const projectPage = {
  takenote: {
    title: "TakeNote",
    subTitle:
      "A web-based application by teachers, for teachers to seamlessly capture, analyze, and represent student growth data.",
    banner: takenoteBanner,
    // banner: takenoteBanner2,
    // banner: takenoteBannerImage,
    logo: "",
    challenge: {
      part1: (
        <>
          Teachers are experts at recognizing students' strengths and areas for
          development, adeptly tailoring their instruction in real-time to
          foster growth and maximize learning. Yet traditional methods of
          tracking student data gained from in-class interactions have been{" "}
          <strong style={{ fontWeight: "800" }}>
            plagued by inefficiency and underutilization of valuable
            information.
          </strong>
        </>
      ),
      part2: (
        <>
          As a former teacher with nearly seven years of experience teaching in
          under-resourced schools, I understand deeply that{" "}
          <strong style={{ fontWeight: "800" }}>
            students who have access to high-quality instruction go on to lead
            choice-filled lives.
          </strong>{" "}
          Through one-on-one interactions with students, teachers assess skills
          and provide in-the-moment feedback. Yet teachers struggle to capture
          formative data from these interactions in ways that can be easily
          organized, analyzed, and shared.
        </>
      ),
      part3: (
        <>
          <strong style={{ fontWeight: "800" }}>
            How might we enable teachers to seamlessly capture qualitative
            observational data about student learning to support ongoing
            instructional innovation?
          </strong>
        </>
      ),
    },
    detailsBox: {
      role: "UX Researcher, Designer",
      context: "U.S. Public School",
      partners: "Mostafa Wahied, Software Engineer",
      timeline: "Sep 2023 - Feb 2024",
      focus: "UX Research, Service Design",
    },
    opportunity: {
      part1:
        "In my last year as a teacher, I worked within my school to observe teacher-student interactions, understand gaps and opportunities related to formative data collection, and prototype designs based on stakeholders’ needs and expectations.",
      part2: (
        <>
          The result is TakeNote, an app by teachers for teachers,{" "}
          <strong style={{ fontWeight: "800" }}>
            offering an intuitive and user-friendly platform for capturing,
            analyzing, and sharing data gained from interactions with students
          </strong>{" "}
          — ultimately leading to more informed instructional decisions and
          improved student outcomes.
        </>
      ),
    },
    opportunityImage: "",
    insightsSideImage: takenoteInsightsSideImage,
    design1: design1,
    design2: design2,
    design3: design3,
    slug: "takenote",
  },
  pathways: {
    title: "Pathways",
    subTitle: "Empowerment through information, compassion through connection",
    banner: pathwaysBanner,
    logo: "",
    challenge: {
      part1: (
        <>
          With{" "}
          <a
            href="https://www.unhcr.org/us/about-unhcr/who-we-are/figures-glance"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            over 100 million people forcibly displaced worldwide
          </a>
          , the urgency to address human development in the face of displacement
          has never been more critical.
        </>
      ),
      part2: (
        <>
          Displacement disrupts lives, uproots communities, and often results in
          a loss of access to education, healthcare, livelihoods, and social
          networks. Without targeted supports, individuals experiencing
          displacement face
          <strong style={{ fontWeight: "800" }}>
            {" "}
            heightened vulnerability to poverty, exploitation, and long-term
            social exclusion.
          </strong>
        </>
      ),
      part3: (
        <>
          While the traditional humanitarian model has typically centered around
          sheltering displaced people in refugee camps, now{" "}
          <a
            href="https://www.refugee-economies.org/library/theme-7"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            more than half
          </a>{" "}
          of people who have been displaced migrate to urban areas.
        </>
      ),
      part4: (
        <>
          Investing in human development initiatives tailored to displaced
          populations not only fosters resilience but also unlocks immense
          potential. Amidst a complex landscape of borders and bureaucracy,
          displaced individuals deserve the tools and resources to{" "}
          <strong style={{ fontWeight: "800" }}>
            rebuild their lives with dignity, contribute to their communities,
            and ultimately drive sustainable development.
          </strong>
        </>
      ),
    },
    detailsBox: {
      role: "Human-centered Designer",
      context: "Thomas J. Watson Fellowship",
      partners: "Thomas J. Watson Foundation",
      timeline: "Jul 2016 - Aug 2018",
      focus: "UX Research, Service Design",
    },
    opportunity: {
      part1: (
        <>
          In 2017 I was awarded the{" "}
          <a
            href="https://watson.foundation/fellowships/tj"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            Thomas J. Watson Fellowship
          </a>
          , an opportunity to pursue a multi-country independent project
          addressing a critical global issue. During my year as a Watson Fellow,
          I engaged in participatory design methods to gain an in-depth
          understanding of refugee experiences from the perspective of refugees
          themselves.
        </>
      ),
      part2: (
        <>
          I collaborated with communities of displaced people at different
          points along their paths into the Eurozone, as well as organizations
          like{" "}
          <a
            href="https://www.unhcr.org/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            UNHCR
          </a>
          ,{" "}
          <a
            href="https://www.questscope.org/en/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            Questscope for Social Development in the Middle East
          </a>
          , and{" "}
          <a
            href="https://www.elpidahome.org/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            Elpida Home
          </a>
          .
        </>
      ),
    },
    opportunityImage: pathwaysOpportunity,
    ImageGalleryImages: [
      { src: galleryImage1, alt: "Gallery Image 1" },
      { src: galleryImage2, alt: "Gallery Image 2" },
      { src: galleryImage3, alt: "Gallery Image 3" },
    ],
    slug: "pathways",
  },
  alight: {
    title: "Alight",
    subTitle: "Co-designing the future of aid with and for refugees",
    banner: alightBanner,
    logo: alightLogo,
    challenge: {
      part1:
        "Protracted refugee settlements represent a persistent challenge within the humanitarian landscape, characterized by prolonged displacement and limited prospects for durable solutions. These settlements often emerge in contexts where conflicts or persecution endure for years, leaving millions of affected people stranded in limbo.",
      part2:
        "The traditional humanitarian service model, designed primarily for emergency response, often struggles to adequately address the complex and protracted nature of these situations. As a result, refugees in protracted settlements frequently face enduring challenges related to access to basic services, livelihood opportunities, education, and psychosocial support.",
      part3:
        "HThe traditional humanitarian model is inherently one-directional, primarily centered on providing services to refugees without adequately considering the invaluable contributions refugees can offer in the design and delivery of those services. This approach overlooks the wealth of knowledge, skills, and perspectives within refugee communities, resulting in solutions that may not fully address their diverse needs and aspirations.",
      part4:
        "Embracing a more inclusive and participatory approach, which actively engages refugees as partners in the co-creation of services, holds the potential to foster greater effectiveness, relevance, and sustainability in humanitarian interventions. Recognizing that approach, the American Refugee Committee, one of the foremost organizations on the forefront of humanitarian aid, sought to rebrand its efforts using a participatory design approach.",
    },
    detailsBox: {
      role: "Human-centered Designer",
      context: "Kyangwali Refugee Settlement, Uganda",
      partners: "ARC & Ideo.org",
      timeline: "March 2016",
      focus: "UX Research, Service Design",
    },
    opportunity: {
      part1:
        "Through a partnership between the American Refugee Committee (ARC) and Ideo.org, I engaged in a transformative project aimed at rebranding and redefining the organization's mission to center the voices of the refugee populations that ARC serves.",
      part2: (
        <>
          Through a collaborative design sprint, conducted in the vibrant
          community of Kyangwali Settlement in Uganda, we embarked on a journey
          to understand the needs and aspirations of residents living in refugee
          settlements. Our central inquiry revolved around the question:{" "}
          <strong style={{ fontWeight: "800" }}>
            How might NGOs support residents of refugee settlements on the
            journey to living the lives they want?
          </strong>
        </>
      ),
      part3: (
        <>
          "Through immersive engagement with refugees, we{" "}
          <strong style={{ fontWeight: "800" }}>
            co-designed innovative service models
          </strong>{" "}
          that prioritized the voices and agency of those directly affected by
          displacement. This pioneering approach led to the formulation of a set
          of design principles that would guide ARC's evolution towards a more
          inclusive, empathetic, and responsive organization.",
        </>
      ),
      part4: (
        <>
          "The culmination of our efforts resulted in the birth of a new entity,
          <strong style={{ fontWeight: "800" }}>
            {" "}
            Alight, dedicated to illuminating the path forward for refugees,
          </strong>{" "}
          empowering them to reclaim agency over their lives and futures. This
          project reveals the power of human-centered design to catalyze
          meaningful change and create lasting impact within humanitarian
          organizations.",
        </>
      ),
    },
    opportunityImage: "",
    slug: "alight",
  },
};

export const takenotePersonas = [
  {
    image: persona1Image,
    name: "Amiyah",
    role: "EXPERIENCED TEACHER",
    description:
      "Amiyah is a skilled teacher who understands how to connect with students. She wants to monitor how well her teaching strategies are working so that each student can progress by a full grade level by the end of the year.",
    quote:
      "I believe equitable instruction means that 100% of students make growth, and I’m ready to meet students where they’re at to provide targeted support.",
  },
  {
    image: persona2Image,
    name: "Alejandro",
    role: "INCOMING TEACHER",
    description:
      "Alejandro is a first-year teacher who needs support organizing classroom systems — especially 1:1 and small group instruction — because he is navigating a steep learning curve and managing competing priorities.",
    quote:
      "There are so many demands on teachers’ time and I want to prioritize what will make the biggest impact for my students and for my own growth as a teacher.",
  },
  {
    image: persona3Image,
    name: "Avery",
    role: "PRINCIPAL",
    description:
      "Avery is a talented principal with a passion for staff development. She needs clear evidence of teachers’ impact so she can conduct annual performance evaluations that feel meaningful and supportive.",
    quote:
      "If we are not pushing to continually grow as educators, we are not serving our students the best we possibly can. We’re all teachers an we’re all learners.",
  },
  {
    image: persona4Image,
    name: "Alan",
    role: "INSTRUCTIONAL COACH",
    description:
      "Alan is an instructional coach who supports teachers in improving their classroom practice. He needs a way for teachers to collaborate to share data so he can support them in designing instructional interventions.",
    quote:
      "We spent a lot of time working with young people and much less collaborating with other adults — that’s where the real magic happens.",
  },
];

export const alightCards = [
  {
    image: alightLogo,
    title: "Visit Alight's Website",
    description: [
      "Read more about how Alight is pioneering a new kind of humanitarian institution and learn more about the initiative to co-design the future of aid alongside refugees.",
    ],
    buttonLink: "https://wearealight.org/",
    buttonText: "Visit Alight",
  },
  {
    image: alightFastCompanyImage,
    title: "Check out our work in Fast Company",
    description: [
      "“How the American Refugee Committee transformed its brand and changed its name”",
      "Adele Peters | 04-03-2020",
    ],
    buttonLink:
      "https://www.fastcompany.com/90475107/how-the-american-refugee-committee-transformed-its-brand-and-changed-its-name",
    buttonText: "Read More",
  },
  {
    image: alightReachImage,
    title: "Reach ou, let's chat!",
    description: [
      "I’d love to connect and share more about the project! While this was an internal initiative, I’d be happy to share more about the process and impact through a conversation.",
    ],
    buttonLink: "https://laurawahied.com/contact",
    buttonText: "Reach Out",
  },
];
