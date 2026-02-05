import TestimonialV2 from "../components/ui/testimonial-v2";

const TestimonialsSection = () => {
  return (
    <div className="w-full bg-background bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] border-t border-border py-12 md:py-20 lg:py-24">
       <TestimonialV2 />
    </div>
  );
};

export default TestimonialsSection;
