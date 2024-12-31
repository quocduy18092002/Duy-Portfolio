export default function scrollToSection(
  sectionName: string,
  options?: { headerOffset?: number },
) {
  const element = document.getElementById(sectionName);
  const headerHeight = options?.headerOffset || 85;
  const elementPosition = element?.getBoundingClientRect()?.top;
  const offsetPosition =
    (elementPosition || 0) + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
