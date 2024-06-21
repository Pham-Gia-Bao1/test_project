// Import các thành phần cần thiết từ Next.js và components
import { Metadata } from "next";

import BoxCard from "@/component/box-card/page";

// Khai báo metadata cho trang
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "BitStorm",
    template: "%s | BitStorm",
  },
  description: "Generated by create next app",
};

// Dữ liệu cho các thẻ Card
const cardsData = [
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamZkCycG4D7z-GWtlOgXH6N3xTvBHlODgng&s',
    title: 'Thiên Hạ Nghe Gì',
    description: 'Những gì người bên cạnh đang nghe. Ả…'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW45osF1CTbZr7OI7ggvedIAcOWw7Zoi_IQg&s',
    title: 'Thiên Hạ Nghe Gì',
    description: 'Những gì người bên cạnh đang nghe. Ả…'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX9J4s0V2xPyu38_m_XfiHdffmdkZJhdhUQ&s',
    title: 'Hot Hits Vietnam',
    description: 'Đông tới Tây, đây là những ca khúc thịnh…'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWuhWys3p23knKvHebto0yeEGHWENOdMYXg&s',
    title: 'phonk',
    description: 'the beat of your drift'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    title: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    title: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  },
  {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    title: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  }
  , {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    title: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  }
  , {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    title: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  }, {
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdUf7Kluxm0CAv5EQ9AiHH-i_ptxr0dGZCg&s',
    name: 'Top 50 - Global',
    description: 'Your daily update of the most played…'
  }
];

// Component chính của trang chủ
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BoxCard cards={cardsData} />
    </main>
  );
}
