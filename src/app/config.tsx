interface Config {
  jobs: Array<Job>;
  testimonials: Array<Testimonial>;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface Job {
  company: string;
  title: string;
  logo: string;
  start: string;
  end: string;
  responsibilities: string[];
  technologies: string[];
}

export const config: Config = {
  jobs: [
    {
      company: "NextOrbit",
      title: "Freelance Full Stack Software & DevOps Engineer",
      logo: "images/companies/nextorbit.png",
      start: "2024",
      end: "Present",
      responsibilities: [
        "Architecting and deploying HashiCorp Vault secrets management programs",
        "Building CI/CD pipelines, automating cloud application deployments, deploying infrastructure as code using Terraform",
      ],
      technologies: [
        "Terraform",
        "HashiCorp Vault",
        "Gitlab",
        "GitHub",
        "AWS",
        "DevSecOps",
        "Consulting",
      ],
    },
    {
      company: "Optiv",
      title: "Engineering Manager / DevOps & Engineering Consultant",
      logo: "images/companies/optiv.jpeg",
      start: "2020",
      end: "2024",
      responsibilities: [
        "Managed, mentored and project oversight for a team of consultants",
        "Project scoping, pre-sales, pricing and developed statements of work",
        "Architected & deployed HashiCorp Vault secrets management programs",
        "Developed methods for and conducted DevSecOps and container security maturity assessments",
        "Built re-usable Vault/Terraform modules, documentation and training to accelerate delivery speed",
        "Earned HashiCorp Security & Infrastructure competencies, achieving top-tier partner status",
      ],
      technologies: [
        "HashiCorp Vault",
        "Terraform",
        "AWS",
        "CI/CD",
        "Gitlab",
        "GitHub",
        "Kubernetes",
        "Docker",
        "DevSecOps",
        "Consulting",
      ],
    },
    // {
    //   company: "Systolic",
    //   title: "Software Engineering Manager / Full Stack Software Engineer",
    //   logo: "/images/companies/systolic.png",
    //   start: "2014",
    //   end: "2020",
    //   responsibilities: [
    //     "Managed and coached team of 10 multidisciplinary software engineers",
    //     "Customer engagement, requirements gathering, code reviews and led team agile processes",
    //     "Led full scale application and architecture updates",
    //     "Full stack software engineering across multiple projects",
    //     "Implemented CI/CD pipelines to automate infrastructure and application deployments",
    //     "Containerized and deployed applications to Kubernetes",
    //   ],
    //   technologies: [
    //     "Typescript",
    //     "Angular",
    //     "TailwindCSS",
    //     "HTML",
    //     "CSS",
    //     "NodeJS",
    //     "Kubernetes",
    //     "Docker",
    //     "CI/CD",
    //     "Gitlab",
    //     "MySQL",
    //     "MongoDB",
    //     "Java",
    //   ],
    // },
    // {
    //   company: "Parsons",
    //   title: "Full Stack Software Engineer",
    //   logo: "/images/companies/parsons.png",
    //   start: "2011",
    //   end: "2014",
    //   responsibilities: [
    //     "Designed and developed scalable PHP web applications",
    //     "Built dynamic and responsive UIs using Angular",
    //     "Collaborated with cross-functional teams including product managers, database team, and QA engineers.",
    //     "Led team agile processes, mentored junior developers and managed customer requirements",
    //   ],
    //   technologies: [
    //     "PHP",
    //     "Angular",
    //     "Javascript",
    //     "HTML",
    //     "CSS",
    //     "jQuery",
    //     "Oracle",
    //     "Java",
    //   ],
    // },
    // {
    //   company: "Discover Financial Services",
    //   title: "Full Stack Software Engineer",
    //   logo: "/images/companies/discover.png",
    //   start: "2009",
    //   end: "2011",
    //   responsibilities: [
    //     "Designed, developed and implemented enterprise application modernization and migration strategies",
    //     "Redesigned and converted legacy applications to Java Spring",
    //     "Built and developed new features and functionality for Java microservices",
    //   ],
    //   technologies: ["Java", "Spring", "Bash", "JSP"],
    // },
  ],
  testimonials: [
    {
      quote:
        "Joe was a pleasure to work with, and helped me on several projects. Some were on a tight deadline, and Joe always delivered quality work. I'd use him again in a heartbeat!!",
      name: "Troy W",
      company: "Dataperk",
    },
    {
      quote:
        "Joe is very detail oriented and a great addition to any team. Joe continues to impress me with his great attitude towards learning new technologies, his ability to quickly grasp what's at hand and his tenacity to get things done right the first time.",
      name: "Brian S",
      company: "Discover Financial Services",
    },
    {
      quote:
        "Joe is a fantastic leader and proven expert in leading technologies.",
      name: "Andy H",
      company: "Optiv",
    },
    {
      quote:
        "When it comes to HashiCorp, Joe is the best in the business, and any company looking to instantly raise their game would benefit from hiring him to lead their engineering teams.",
      name: "Dave H",
      company: "HashiCorp",
    },
    {
      quote:
        "Joe is an amazing individual to work with. His extensive knowledge on products, client management and understanding of business and process has helped us a lot. He has been a great mentor to juniors and his never say no attitude helped others to do better as well.",
      name: "Magbool M",
      company: "Optiv",
    },
  ],
};
