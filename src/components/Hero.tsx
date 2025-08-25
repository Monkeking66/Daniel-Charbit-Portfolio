import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              Daniel{" "}
              <span className="text-primary bg-gradient-hero bg-clip-text text-transparent">
                Charbit
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-light">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-accent font-medium">
              Transforming Ideas into Digital Excellence
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-4">
              I craft cutting-edge web applications that drive business growth.
              From concept to deployment, I deliver scalable solutions that
              exceed expectations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                size="lg"
                className="bg-gradient-hero hover:shadow-glow-lg hover:scale-105 transition-bounce px-8 animate-glow-pulse text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-accent/10 hover:scale-105 transition-bounce border-accent/30 text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary/10 hover:scale-105 transition-bounce text-base"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;