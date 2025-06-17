export interface CountryCardProps {
  country: string;
  flag: string;
}

export interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
} 