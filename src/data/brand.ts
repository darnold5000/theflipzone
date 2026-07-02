import { wixImage } from "@/lib/wix-image";

export const brand = {
  logo: wixImage("3c407f_f92aab5f784344a78fe846a7a2144181~mv2.png", 315, 315),
  logoAlt: "The Flip Zone",

  /** Hero collage — smiling kids, action, energy */
  heroCollage: [
    {
      src: wixImage("3c407f_20c4205ef7d447b9b93eca2fbf73055d~mv2.jpg", 800, 1000, "fill"),
      alt: "Preschool gymnast smiling at Flip Zone",
    },
    {
      src: wixImage("3c407f_76362b8ee1a44252a7d590af253908e6~mv2.jpg", 800, 600, "fill"),
      alt: "Kids learning gymnastics at Flip Zone",
    },
    {
      src: wixImage("3c407f_98fde81a17c7440689a55084d54570eb~mv2.jpeg", 800, 600, "fit"),
      alt: "Competitive gymnast in action",
    },
  ],

  homepageHero: wixImage(
    "3c407f_05c63b07987d4f91a32940c76767c6ad~mv2.jpg",
    1920,
    1080,
    "fill"
  ),
  indianaHero: wixImage(
    "3c407f_13a9a9f4073540be9a657fbc9a0bb6f0~mv2.png",
    1600,
    900,
    "fill"
  ),
  floridaHero: wixImage(
    "3c407f_34f8d46778f94d97b682e6c1bea90ed5~mv2.jpeg",
    1600,
    900,
    "fill"
  ),
  preschoolHero: wixImage(
    "3c407f_20c4205ef7d447b9b93eca2fbf73055d~mv2.jpg",
    1600,
    900,
    "fill"
  ),
  teamHero: wixImage(
    "3c407f_98fde81a17c7440689a55084d54570eb~mv2.jpeg",
    1600,
    900,
    "fit"
  ),
  privateLessonsHero: wixImage(
    "4f2eb8b29e8c44ef90777c751852aeed.jpg",
    1600,
    900,
    "fit"
  ),

  /** Coaches in action — not headshots */
  coaching: [
    {
      src: wixImage("4f2eb8b29e8c44ef90777c751852aeed.jpg", 600, 400, "fit"),
      alt: "Coach spotting a gymnast",
      caption: "Hands-on coaching every class",
    },
    {
      src: wixImage("3c407f_b6a374987554492b85d31094980acac4~mv2.jpeg", 600, 400, "fit"),
      alt: "Coach cheering on young gymnasts",
      caption: "Coaches who celebrate every win",
    },
    {
      src: wixImage("3c407f_51a78953e34140e79d64393e5b857ebb~mv2.jpeg", 600, 400, "fit"),
      alt: "Team celebration at Flip Zone",
      caption: "A community your child belongs to",
    },
  ],

  badges: {
    usagIndiana: wixImage(
      "3c407f_013ab78843ac441fa1de2be15ea5f928~mv2.png",
      269,
      192,
      "fill"
    ),
    safeSport: wixImage(
      "3c407f_68888437e7384618b50c0417a8ea2569~mv2.png",
      604,
      215,
      "fill"
    ),
  },
};
