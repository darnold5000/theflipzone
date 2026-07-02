import { wixImage } from "@/lib/wix-image";

export interface ProgramAssets {
  image: string;
  parentHighlights: string[];
}

export const programAssets: Record<string, ProgramAssets> = {
  "preschool-gymnastics": {
    image: wixImage("3c407f_20c4205ef7d447b9b93eca2fbf73055d~mv2.jpg", 800, 500, "fill"),
    parentHighlights: ["Balance", "Coordination", "Listening skills", "Confidence & smiles"],
  },
  "recreational-gymnastics": {
    image: wixImage("3c407f_76362b8ee1a44252a7d590af253908e6~mv2.jpg", 800, 500, "fill"),
    parentHighlights: ["Cartwheels & rolls", "Strength", "New friendships", "Healthy activity"],
  },
  tumbling: {
    image: wixImage("3c407f_05c63b07987d4f91a32940c76767c6ad~mv2.jpg", 800, 500, "fill"),
    parentHighlights: ["Floor skills", "Handsprings", "Cheer prep", "Power & flexibility"],
  },
  ninjanastics: {
    image: wixImage("3c407f_38bea8ee7e854a5a93fae89b31aa5c1f~mv2.jpg", 800, 500, "fill"),
    parentHighlights: ["Obstacle courses", "Agility", "Ninja moves", "High-energy fun"],
  },
  "competitive-team": {
    image: wixImage("3c407f_98fde81a17c7440689a55084d54570eb~mv2.jpeg", 800, 500, "fit"),
    parentHighlights: ["USAG & Xcel pathways", "Elite coaching", "Competition experience", "Team family"],
  },
  "ssgnl-preschool": {
    image: wixImage("3c407f_416818c43bb245e18c0258df612bd9a5~mv2.jpeg", 800, 500, "fill"),
    parentHighlights: ["Academics + gym daily", "School readiness", "Making friends", "Whole-child growth"],
  },
  gymstars: {
    image: wixImage("3c407f_a677b389973c4d069067ff62ae94286c~mv2.jpeg", 800, 500, "fill"),
    parentHighlights: ["Inclusive environment", "Patient coaches", "Motor skills", "Joy through movement"],
  },
  camps: {
    image: wixImage("3c407f_eb5a9f0e1c544d62bfe57bbea8132fc0~mv2.jpeg", 800, 500, "fill"),
    parentHighlights: ["Full-day fun", "New friends", "Gymnastics skills", "Safe supervision"],
  },
  "birthday-parties": {
    image: wixImage("3c407f_d9533c1b39a14531aff4908be1eaf3b5~mv2.jpeg", 800, 500, "fill"),
    parentHighlights: ["Private gym time", "Party host included", "Games & activities", "Stress-free for parents"],
  },
  "private-lessons": {
    image: wixImage("4f2eb8b29e8c44ef90777c751852aeed.jpg", 800, 500, "fit"),
    parentHighlights: ["One-on-one attention", "Faster progress", "Custom goals", "Flexible scheduling"],
  },
  "open-gym": {
    image: wixImage("3c407f_b6a374987554492b85d31094980acac4~mv2.jpeg", 800, 500, "fit"),
    parentHighlights: ["Extra practice time", "Supervised play", "Explore the gym", "Affordable add-on"],
  },
};

export function getProgramAssets(slug: string): ProgramAssets | undefined {
  return programAssets[slug];
}
