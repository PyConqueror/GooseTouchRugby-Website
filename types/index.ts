export interface NewsArticle {
  id: number; // Required number
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string; // Required string
  category: string;
  featured?: boolean; // Keeping optional featured flag from modal's original type
} 