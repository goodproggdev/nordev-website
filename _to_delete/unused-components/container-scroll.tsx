"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: any;
  scale: any;
  translate: any;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, 
        scale,
        translateY: translate,
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-2 md:p-4 bg-white/[0.03] backdrop-blur-3xl rounded-[32px] relative border border-white/10"
    >
      {/* Container Under-Glow */}
      <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10 opacity-40" />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent rounded-[32px] pointer-events-none" />
      <div className="h-full w-full overflow-hidden rounded-[24px] bg-background-dark/50 border border-white/5 md:p-2">
        {children}
      </div>
    </motion.div>
  );
};
