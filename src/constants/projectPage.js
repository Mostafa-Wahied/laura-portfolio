import takenoteBanner from "../assets/takenoteBanner.png";
// import takenoteLogo from "../assets/takenoteLogo.png";
// import takenoteOpportunity from "../assets/takenoteOpportunity.png";
import pathwaysBanner from "../assets/pathwaysBanner.png";
// import pathwaysLogo from "../assets/pathwaysLogo.png";
import pathwaysOpportunity from "../assets/pathwaysOpportunity.jpg";
import alightBanner from "../assets/alightBanner.png";
import alightLogo from "../assets/alight.png";
// import alightOpportunity from "../assets/alightOpportunity.png";
import galleryImage1 from "../assets/pathwaysGalleryImage1.png";
import galleryImage2 from "../assets/pathwaysGalleryImage2.jpg";
import galleryImage3 from "../assets/pathwaysGalleryImage3.png";

export const projectPage = {
  takenote: {
    title: "TakeNote",
    subTitle:
      "A web-based application by teachers, for teachers to seamlessly capture, analyze, and represent student growth data.",
    banner: takenoteBanner,
    logo: "",
    challenge: {
      part1:
        "Teachers are experts at recognizing students' strengths and areas for development, adeptly tailoring their instruction in real-time to foster growth and maximize learning. Yet traditional methods of tracking student data gained from in-class interactions have been plagued by inefficiency and underutilization of valuable information.",
      part2:
        "As a former teacher with nearly seven years of experience teaching in under-resourced schools, I understand deeply that students who have access to high-quality instruction go on to lead choice-filled lives. Through one-on-one interactions with students, teachers assess skills and provide in-the-moment feedback. Yet teachers struggle to capture formative data from these interactions in ways that can be easily organized, analyzed, and shared.",
      part3:
        "How might we enable teachers to seamlessly capture qualitative observational data about student learning to support ongoing instructional innovation?",
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
      part2:
        "The result is TakeNote, an app by teachers for teachers, offering an intuitive and user-friendly platform for capturing, analyzing, and sharing data gained from interactions with students — ultimately leading to more informed instructional decisions and improved student outcomes.",
    },
    opportunityImage: "",
    slug: "takenote",
  },
  pathways: {
    title: "Pathways",
    subTitle: "Empowerment through information, compassion through connection",
    banner: pathwaysBanner,
    logo: "",
    challenge: {
      part1:
        "With over 100 million people forcibly displaced worldwide, the urgency to address human development in the face of displacement has never been more critical.",
      part2:
        "Displacement disrupts lives, uproots communities, and often results in a loss of access to education, healthcare, livelihoods, and social networks. Without targeted supports, individuals experiencing displacement face heightened vulnerability to poverty, exploitation, and long-term social exclusion.",
      part3:
        "While the traditional humanitarian model has typically centered around sheltering displaced people in refugee camps, now more than half of people who have been displaced migrate to urban areas.",
      part4:
        "Investing in human development initiatives tailored to displaced populations not only fosters resilience but also unlocks immense potential. Amidst a complex landscape of borders and bureaucracy, displaced individuals deserve the tools and resources to rebuild their lives with dignity, contribute to their communities, and ultimately drive sustainable development.",
    },
    detailsBox: {
      role: "Human-centered Designer",
      context: "Thomas J. Watson Fellowship",
      partners: "Thomas J. Watson Foundation",
      timeline: "Jul 2016 - Aug 2018",
      focus: "UX Research, Service Design",
    },
    opportunity: {
      part1:
        "In 2017 I was awarded the Thomas J. Watson Fellowship, an opportunity to pursue a multi-country independent project addressing a critical global issue. During my year as a Watson Fellow, I engaged in participatory design methods to gain an in-depth understanding of refugee experiences from the perspective of refugees themselves.",
      part2:
        "I collaborated with communities of displaced people at different points along their paths into the Eurozone, as well as organizations like UNHCR, Questscope for Social Development in the Middle East, and Elpida Home.",
      part3:
        "The result is Pathways, a mobile app that guides refugees through their journeys, empowering them with the information to build meaningful connections wherever their journey takes them.",
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
      part2:
        "Through a collaborative design sprint, conducted in the vibrant community of Kyangwali Settlement in Uganda, we embarked on a journey to understand the needs and aspirations of residents living in refugee settlements. Our central inquiry revolved around the question: How might NGOs support residents of refugee settlements on the journey to living the lives they want?",
      part3:
        "Through immersive engagement with refugees, we co-designed innovative service models that prioritized the voices and agency of those directly affected by displacement. This pioneering approach led to the formulation of a set of design principles that would guide ARC's evolution towards a more inclusive, empathetic, and responsive organization.",
      part4:
        "The culmination of our efforts resulted in the birth of a new entity, Alight, dedicated to illuminating the path forward for refugees, empowering them to reclaim agency over their lives and futures. This project reveals the power of human-centered design to catalyze meaningful change and create lasting impact within humanitarian organizations.",
    },
    opportunityImage: "",
    slug: "alight",
  },
};
