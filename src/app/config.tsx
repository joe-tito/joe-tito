interface Config {
  testimonials: Array<Testimonial>;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  pic: string;
}

export const config: Config = {
  testimonials: [
    {
      quote:
        "Joe was a pleasure to work with, and helped me on several projects. Some were on a tight deadline, and Joe always delivered quality work. I'd use him again in a heartbeat!!",
      name: "Troy W",
      company: "Dataperk",
      pic: "ok",
    },
    {
      quote:
        "Joe is very detail oriented and a great addition to any team. Joe continues to impress me with his great attitude towards learning new technologies, his ability to quickly grasp what's at hand and his tenacity to get things done right the first time.",
      name: "Brian S",
      company: "Discover",
      pic: "ok",
    },
    {
      quote:
        "Joe is a fantastic leader and proven expert in leading technologies.",
      name: "Andy H",
      company: "Optiv",
      pic: "ok",
    },
    {
      quote:
        "When it comes to HashiCorp, Joe is the best in the business, and any company looking to instantly raise their game would benefit from hiring him to lead their engineering teams.",
      name: "Dave H",
      company: "HashiCorp",
      pic: "ok",
    },
    {
      quote:
        "Joe is an amazing individual to work with. His extensive knowledge on products, client management and understanding of business and process has helped us a lot. He has been a great mentor to juniors and his never say no attitude helped others to do better as well.",
      name: "Magbool M",
      company: "Optiv",
      pic: "ok",
    },
  ],
};
