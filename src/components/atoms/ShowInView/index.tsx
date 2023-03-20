import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { container } from "constants/animations";
import { useInView } from "react-intersection-observer";
import { ShowInViewProps } from "./interface";
import { Container } from "./styles";

export const ShowInView = ({
  children,
  variants,
  className,
  fullWidth,
}: ShowInViewProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) controls.start("animate");
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      data-testid="section"
      animate={controls}
      initial="initial"
      transition={{ duration: 0.35 }}
      variants={variants || container[2]}
      className={className}
      $fullWidth={fullWidth}
    >
      {children}
    </Container>
  );
};

export default ShowInView;
