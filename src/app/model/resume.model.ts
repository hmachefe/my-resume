export interface Info {
    name: string;
    job: string;
    company: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    about: string[];
}

export interface Skill {
    techno: string;
    detail: string;
    level: number;
}

export interface Ability {
    title: string;
    skills: Skill[];
}

export interface Career {
    company: string;
    status: string;
    date: string;
    logo: string;
    quote: string;
    description: string[];
}

export interface Link {
    type: string;
    href: string;
    value: string;
}

export interface Project {
    title: string;
    detail: string;
    tags: string[];
    quote: string;
    description: string[];
    links: Link[];
}

export interface Education {
    school: string;
    diploma: string;
    date: string;
    detail: string;
    quote: string;
    link: Link;
    logo: string;
}

export interface Language {
    lang: string;
    level: string;
    certification: string;
    flag: string;
}

export interface Resume {
    info: Info;
    abilities: Ability[];
    career: Career[];
    projects: Project[];
    education: Education[];
    languages: Language[];
}
