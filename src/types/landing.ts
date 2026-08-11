export interface NavItem {
    id: string;
    label: string;
    href: string;
  }
  
  export interface HeaderData {
    logoText: string;
    navItems: NavItem[];
    actions: {
      loginText: string;
      signupText: string;
    };
  }
  
  export interface HeroSlide {
    id: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    buttonText: string;
    imageUrl: string;
  }
  
  export interface ClientLogo {
    id: string;
    name: string;
    logoUrl: string;
  }
  
  export interface CommunityFeature {
    id: string;
    title: string;
    description: string;
    iconName: string;
  }
  
  export interface SplitContentData {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
  }
  
  export interface StatItem {
    id: string;
    number: string;
    label: string;
    iconName: string;
  }
  
  export interface TestimonialData {
    imageUrl: string;
    quote: string;
    authorName: string;
    authorRole: string;
    clientLogos: ClientLogo[];
    linkText: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    imageUrl: string;
    readMoreText: string;
    linkHref: string;
  }
  
  export interface FooterLink {
    label: string;
    href: string;
  }
  
  export interface FooterColumn {
    title: string;
    links: FooterLink[];
  }
  
  export interface FooterData {
    companyName: string;
    copyrightText: string;
    socialLinks: {
      platform: string;
      iconName: string;
      href: string;
    }[];
    columns: FooterColumn[];
    newsletter: {
      title: string;
      placeholder: string;
    };
  }
  
  export interface LandingPageContent {
    header: HeaderData;
    hero: {
      slides: HeroSlide[];
    };
    clients: {
      title: string;
      subtitle: string;
      logos: ClientLogo[];
    };
    community: {
      title: string;
      subtitle: string;
      features: CommunityFeature[];
    };
    splitContent1: SplitContentData;
    stats: {
      titlePrefix: string;
      titleHighlight: string;
      subtitle: string;
      items: StatItem[];
    };
    splitContent2: SplitContentData;
    testimonial: TestimonialData;
    blog: {
      title: string;
      subtitle: string;
      posts: BlogPost[];
    };
    cta: {
      title: string;
      buttonText: string;
    };
    footer: FooterData;
  }