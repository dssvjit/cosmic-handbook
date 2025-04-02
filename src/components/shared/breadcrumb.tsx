import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

const NavbarBreadcrumb = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");

  const ignorePaths = ["handbook", "resource"];

  const filteredPaths = paths.filter((path) => !ignorePaths.includes(path));

  return (
    <Breadcrumb className="hidden md:flex items-center px-3">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            className="hover:text-app-primary-dark
          "
            href="/"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {filteredPaths.map((path, index) => (
          <BreadcrumbItem key={index}>
            <span>{path.charAt(0).toUpperCase() + path.slice(1)}</span>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavbarBreadcrumb;
