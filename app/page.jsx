import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
