export interface FAQ {
  question: string;
  answer: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: "What class should my child start with?",
    answer:
      "For most children, we recommend starting with a preschool or recreational gymnastics class based on their age. Ages 3–5 typically begin in preschool gymnastics, while ages 5+ start in recreational classes. Use our Class Finder tool or contact your local Flip Zone for personalized recommendations.",
  },
  {
    question: "Do you offer trial classes?",
    answer:
      "Trial class availability varies by location and program. Contact your local Flip Zone or check the iClassPro portal for trial class options and current availability.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Enrollment is easy through our iClassPro parent portal. Choose your location (Indiana or Florida), browse available classes, create a parent account, and register online. You can also call your local gym for assistance.",
  },
  {
    question: "Do you use iClassPro?",
    answer:
      "Yes! We use iClassPro for class enrollment, parent accounts, billing, camps, and event registration. All enrollment happens through our secure parent portals.",
  },
  {
    question: "Do you offer private lessons?",
    answer:
      "Yes, both locations offer private lessons for athletes who want one-on-one coaching. Contact your local Flip Zone to schedule and discuss availability.",
  },
  {
    question: "Do you offer birthday parties?",
    answer:
      "Birthday parties are available at our Bradenton, Florida location. Contact Flip Zone Gymnastics of SWFL for party packages and availability.",
  },
  {
    question: "Do you offer camps?",
    answer:
      "Yes! Summer camps and school break camps are offered at our Florida location. Check the iClassPro portal for current camp schedules and registration.",
  },
  {
    question: "What should my child wear?",
    answer:
      "Athletes should wear comfortable athletic clothing or a leotard. Hair should be pulled back securely. No jewelry, zippers, or buttons. Bare feet or gymnastics shoes as directed by your coach.",
  },
  {
    question: "How do waitlists work?",
    answer:
      "If a class is full, you can join the waitlist through iClassPro. When a spot opens, you'll be notified automatically. We recommend enrolling early as popular classes fill quickly.",
  },
  {
    question: "How do I contact the correct location?",
    answer:
      "Indiana (Plainfield): theflipzonegym@gmail.com or 317-838-0667 (Recreational) / 317-268-4810 (SSGNL & Team). Florida (Bradenton): Support@flipzoneswfl.com or 941-297-7293.",
  },
];

export const programFaqs: Record<string, FAQ[]> = {
  "preschool-gymnastics": [
    {
      question: "Does my child need prior experience?",
      answer:
        "No prior experience is needed. Our preschool classes are designed for beginners and focus on fun, safe introduction to movement.",
    },
    {
      question: "Can parents watch class?",
      answer:
        "Parent observation policies vary. Contact your local Flip Zone for details on viewing areas and parent participation.",
    },
  ],
  "competitive-team": [
    {
      question: "How does my child join the competitive team?",
      answer:
        "Team placement is by evaluation or invitation. Contact your local Flip Zone to schedule a team evaluation or learn about upcoming tryouts.",
    },
    {
      question: "What levels do you offer?",
      answer:
        "Indiana offers comprehensive competitive programming. Florida features women's USAG Levels 1–10 and Xcel pathways.",
    },
  ],
};
