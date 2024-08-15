import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skill from "@/components/main/Skill";
import SkillTexts from "@/components/sub/SkillText";

import Image from "next/image";

export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col h-[800px] gap-20">
       <Hero/>  
       <Skill/>
       <Projects/>
    </div>
    
   </main>
  );
}
