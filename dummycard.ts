import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
}

const NewsCard = ({ image, title, description, tags, date, readTime }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="p-6 pb-0">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">{title}</h3>
        </div>
        <div className="px-6">
          <p className="text-sm text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center p-6 pt-4 mt-auto">
          <Button variant="link" className="p-0 h-auto gap-2">
            Read more
            <ArrowRight className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
      </div>
    </div>
  );
};
