import { cn } from "@/utils/cn.util";

interface TestimonialProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const Testimonial = ({ img, name, username, body }: TestimonialProps) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-app-border-dark/10 hover:bg-app-border-dark/60",
        "border-app-border-dark hover:bg-app-secondary-dark/5",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-app-primary-dark">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-app-secondary-dark">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-app-secondary-dark">
        {body}
      </blockquote>
    </figure>
  );
};

export default Testimonial;
