"use client";

import { Tabs } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import GalleryContentImage from "./gallery-content";

interface GalleryProps {
  images: {
    url: string;
  }[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Tabs defaultValue={images[0].url} className="w-full">
      {images.map((tab) => (
        <TabsContent key={tab.url} value={tab.url.toString()}>
          <GalleryContentImage url={tab.url} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Gallery;
