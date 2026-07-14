export interface Brand {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Google",
    logo: "/brands/google.svg",
    website: "#",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "/brands/microsoft.svg",
    website: "#",
  },
  {
    id: 3,
    name: "Spotify",
    logo: "/brands/spotify.svg",
    website: "#",
  },
  {
    id: 4,
    name: "Netflix",
    logo: "/brands/netflix.svg",
    website: "#",
  },
  {
    id: 5,
    name: "Slack",
    logo: "/brands/slack.svg",
    website: "#",
  },
  {
    id: 6,
    name: "Adobe",
    logo: "/brands/adobe.svg",
    website: "#",
  },
  {
    id: 7,
    name: "Airbnb",
    logo: "/brands/airbnb.svg",
    website: "#",
  },
  {
    id: 8,
    name: "Sancho Nepal",
    logo: "/logo/Sampresan.png",
    website: "#",
  },
];
