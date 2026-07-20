export const siteConfig = {
  name: "Sampreshan Media",
  alternateName: "Sampreshan",
  url: "https://sampreshanmedia.com",
  description:
    "Sampreshan Media is a Bharatpur, Nepal creative and technology agency for branding, digital marketing, video production, web development, and IT solutions.",
  email: "contact@sampreshanmedia.com",
  telephone: "+9779807126533",
  address: {
    streetAddress: "Bharatpur 10",
    addressLocality: "Bharatpur",
    addressRegion: "Bagmati",
    postalCode: "44207",
    addressCountry: "NP",
  },
  geo: {
    latitude: 27.690146226344098,
    longitude: 84.43136800840769,
  },
  socialLinks: [
    "https://np.linkedin.com/company/sampreshan-media",
    "https://www.facebook.com/Sampreshanmedia",
    "https://www.instagram.com/sampreshanmedia/",
    "https://www.tiktok.com/@sampreshan6?lang=en",
  ],
  services: [
    {
      name: "Branding and Graphic Design",
      description:
        "Brand strategy, visual identity, campaign design, and creative assets for growing organizations.",
    },
    {
      name: "Digital Marketing",
      description:
        "Digital campaigns, content, and growth strategy designed to reach and engage the right audience.",
    },
    {
      name: "Video Production",
      description:
        "Scripting, filming, editing, motion graphics, voiceovers, and post-production from an in-house studio.",
    },
    {
      name: "Web and Mobile Development",
      description:
        "Modern websites, web applications, mobile apps, APIs, and dependable digital products.",
    },
    {
      name: "IT Solutions",
      description:
        "Technical consulting, cloud infrastructure, systems integration, and ongoing product support.",
    },
  ],
} as const;

export type SitePath =
  | "/"
  | "/about"
  | "/careers"
  | "/contact"
  | "/portfolio"
  | "/pricing"
  | "/studio"
  | "/terms";
