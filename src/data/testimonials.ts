export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter was so shy before her first class. Now she runs in the door smiling every week. The coaches make her feel safe and celebrated.",
    author: "Flip Zone Parent",
    location: "Plainfield, Indiana",
  },
  {
    quote:
      "We tried other activities, but nothing stuck like gymnastics. She's made real friends here and actually asks to practice at home.",
    author: "Flip Zone Parent",
    location: "Bradenton, Florida",
  },
  {
    quote:
      "SSGNL has been incredible — my son comes home talking about what he learned in the classroom AND the gym. He loves school now.",
    author: "SSGNL Parent",
    location: "Plainfield, Indiana",
  },
  {
    quote:
      "Stephanie and her team genuinely care about every kid. You can tell this isn't just a business — it's a community.",
    author: "Team Parent",
    location: "Bradenton, Florida",
  },
];
