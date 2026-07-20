export const API_ENDPOINTS = {
  pricing: "/public/pricing-packages/",

  team: "/public/team-members/",

  portfolio: "/public/portfolios/",

  brands: "/public/client-logos/",

  studio: "/public/studio-projects/",

  service: "/public/services/",

  testimonials: "/public/testimonials/",

  careers: "/public/careers/",

  serviceOption: "/public/service/",

  careersApply: (slug: string) => `/public/careers/${slug}/apply/`,
} as const;
