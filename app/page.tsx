import Category from "@/components/Category";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import RecetPost from "@/components/RecetPost";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <div className="bg-darkGreen">
        <Header />
        <Hero />
      </div>
      <Menu />
      <Features />
      <RecetPost />
      <Category />
      <Testimonials />
    </main>
  );
}
