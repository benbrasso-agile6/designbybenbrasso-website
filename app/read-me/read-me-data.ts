import {
  ZapIcon,
  CloudFogIcon,
  MessagesSquareIcon,
  PuzzleIcon,
  LifeBuoyIcon,
  HandHelpingIcon,
  SparklesIcon,
  InfoIcon,
} from "lucide-react"
import type { ReadMeSectionItem } from "./read-me-types"

export const readMeSectionsData: ReadMeSectionItem[] = [
  {
    id: "energizes-me",
    title: "What energizes me",
    icon: ZapIcon,
    content: {
      type: "list",
      items: [
        "Energizing the room",
        "Aha! moments",
        "Purposeful work",
        "Getting end users to smile knowing that we’re here to help",
        "When a team member learns something new or has a great accomplishment",
        "When a team member wants to solicit feedback or have a conversation",
        "Excited product and business leaders",
        "Sharing work",
        "Delivering first; ceremonies later",
        "Collaborators that want to partner to deliver purposeful user experiences",
      ],
    },
  },
  {
    id: "grumpy",
    title: "What makes me grumpy",
    icon: CloudFogIcon,
    content: {
      type: "list",
      items: [
        "Negative energy, but I accept everyone when they walk through the, sometimes metaphorical, door",
        "Negative energy that permeates the room",
        "When someone responds “No.” For example, there’s always light to be found in bad or uncomfortable situations. (Let’s find the “good” together.)",
        "Too many back-to-back full meeting days in a row",
        "When information is not shared or published out in the open",
        "Aggressive tone",
      ],
    },
  },
  {
    id: "feedback",
    title: "How I like to get feedback",
    icon: MessagesSquareIcon,
    content: {
      type: "list",
      items: [
        "Feedback that’s framed within the context of meeting product goals and/or measures of success",
        "Based on the type of feedback that I (always try to) communicate would be most helpful to me",
        "Early and often; nothing’s ever finished",
      ],
    },
  },
  {
    id: "struggle-with",
    title: "I struggle with",
    icon: PuzzleIcon,
    content: {
      type: "list",
      items: [
        "A closed-communication environment where information is kept need-to-know.",
        "A working environment that’s not open to sensing and responding",
        "Acronyms at the start of any new project",
        "Remembering to explain acronyms to new team members or external partners",
        "Trying to not always be the metaphorical anchor",
        "An agile environment where product and HCD aren’t partners",
      ],
    },
  },
  {
    id: "help-me",
    title: "The best way to help me",
    icon: LifeBuoyIcon,
    content: {
      type: "list",
      items: [
        "Tag me or CC me in conversations that might be beneficial",
        "Be respectful",
        "Show faith in one another’s design thinking or problem solving process",
        "Remain open-minded and flexible",
        "When providing feedback, provide an example or alternative solution vs. simply pointing out areas that need improvement",
      ],
    },
  },
  {
    id: "help-you",
    title: "I’d love to help you with",
    icon: HandHelpingIcon,
    content: {
      type: "list",
      items: [
        "Anything; I like to help people, products, and services grow",
        "Creating, simplifying, and pulling out what’s most important for the audience and create visuals to aid in that communication",
        "Mapping out product and service blueprints",
        "Planning, conducting, synthesizing, and presenting research",
        "Contributing back to design systems and research repositories",
        "Understanding how consumers and Veterans make health care decisions",
        "Understanding VA Design System and content style guide",
        "Leveraging AI for deep research",
      ],
    },
  },
  {
    id: "strengths-interests",
    title: "My strengths/Areas of interest at work",
    icon: SparklesIcon,
    content: {
      type: "custom", // Using custom to handle subheadings
      subheadings: [
        {
          title: "Characteristics and traits",
          items: [
            "Motivating, communication, abundance mindset",
            "Simplify the complex and charting out feasibility and value",
            "Navigating ambiguity",
            "Ability to pivot",
            "Self-starter",
            "Analytical",
            "Continuous learner",
            "Conquering new goals",
          ],
        },
        {
          title: "Areas of interest at work",
          items: [
            "Documentation (that’s out in the open)",
            "Exploring AI across ideation, deep research, design, prototyping, documentation, and collaboration",
            "Research spectrum",
            "UX, UI, and content design",
            "Choosing the right fidelity or tool for communicating to a specific audience",
            "Measuring the human impact on digital services",
            "Modernizing and increasing access to health care for everyone",
            "Reducing provider burnout and improving (measurable) patient outcomes",
            "Creating service blueprints",
            "Using plain language and keeping content simple",
          ],
        },
      ],
    },
  },
  {
    id: "other-info",
    title: "Other things you might want to know",
    icon: InfoIcon,
    content: {
      type: "custom", // Using custom to handle subheadings
      subheadings: [
        {
          title: "At work",
          items: [
            "I’m open and transparent",
            "Software agnostic",
            "Attempt to avoid complaining",
            "I tend to work a lot and respond to inquiries at all times of the day. I need help from my peers to tell me to take a break. But, I really do enjoy helping others and making an impact on purposeful work.",
            "Comfortable presenting. E.g., I’ve spoken and presented to every level of health care worker: hospital leadership, health system leadership, deans, providers, marketing, IT, clinic managers, clinic administrative staff, etc. I’ve spoken at digital marketing health care conferences.",
            "Have worked within VA’s OCTO health pod for 3 years. Have worked with academic medical centers, private health systems, and medical groups to transform their digital presence and modernize their “digital front doors” for almost a dozen years.",
            "Familiar with EHRs, including Epic, Cerner Millennium, Oracle's  Federal EHR, and VA's VistA.",
          ],
        },
        {
          title: "Outside of work",
          items: [
            "I enjoy cooking; whole foods, healthy ingredients",
            "I love film; most recently the horror genre",
            "Fitness and weightlifting",
            "Reading a book (typically non-fiction, self improvement, or motivational) or listening to a podcast at the pool or beach",
            "Listening to dance, pop, or electronic dance music",
            "Ending the day with a glass of white wine with the neighbors watching the sun set",
            "Organizing and decorating my home",
            "Love keeping a clean car interior and exterior",
          ],
        },
      ],
    },
  },
]
