export interface HeroData {
  title: string;
  worth: string;
  footer: {
    terms: string;
    copyright: string;
    disclaimer: string;
  };
  pricing: {
    saveText: string;
    currentPrice: string;
    regularPrice: string;
  };
  benefits: string[];
  features: string[];
  subtitle: string;
  countdown: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  saveAmount: string;
  giftMessage: string;
  productName: string;
  testimonial: {
    data: Array<{
      name: string;
      role: string;
      image: string;
      rating: number;
      company: string;
      content: string;
      highlight: string;
    }>;
    heading: string;
  };
  productDetails: {
    heading: string;
    description: string;
    keyFeatures: Array<{
      title: string;
      description: string;
    }>;
  };
  paymentFeatures: string[];
  productFeatures: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  trustIndicators: {
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    timeOffer: string;
  };
}
