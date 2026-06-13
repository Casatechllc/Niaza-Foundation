export const useProjects = () => {
  // 1. Only scan using the absolute root path format to prevent duplicates
  const allProjectImages = import.meta.glob('/public/images/projects/*/*.{png,jpg,jpeg,webp,JPG,JPEG}', { eager: true });

  const getImagesForProject = (projectFolder) => {
    return Object.keys(allProjectImages)
      .filter((path) => {
        const cleanPath = path.replace(/\\/g, '/');
        return cleanPath.includes(`/images/projects/${projectFolder}/`);
      })
      .map((path, index) => {
        const cleanPath = path.replace(/\\/g, '/');
        // Clean the asset path for Nuxt's web server
        const webUrl = cleanPath.replace('/public', '');
        
        // Format file names cleanly for image overlays
        const fileName = cleanPath.split('/').pop().split('.').shift().replace(/[-_]/g, ' ');

        return {
          id: `${projectFolder}-${index + 1}`,
          url: webUrl,
        //   alt: fileName.charAt(0).toUpperCase() + fileName.slice(1)
        };
      });
  };

  const projects = [
    {
      id: 1,
      folder: "project1",
      title: "The Kinshasa Orphanage Sanctuary",
      subtitle: "Phase 1: Transitioning from Floor Mattresses to Safe Haven Infrastructure",
      // ADDED LOCATION STRING (Can be a specific city/region, or "" if none exists)
      location: "Kinshasa, DRC", 
      description: "Currently, our children sleep on shared mattresses laid directly across the floor each night—a temporary measure in an unfinished structure. This project allocates all funding toward securing the physical integrity of the construction site. Our immediate objectives are to build a dedicated, secure separate sleeping wing and construct a proper cafeteria, ensuring every child transitions from vulnerable floor conditions to a structured environment of safety, nutrition, and dignity.",
      images: getImagesForProject("project1")
    },
    // {
    //   id: 2,
    //   folder: "project2",
    //   title: "Future Community Development Hub",
    //   subtitle: "Phase 2: Regional Empowerment Frameworks",
    //   // ACCOUNTING FOR EMPTY STRING CASE
    //   location: "", 
    //   description: "An overview of upcoming regional structural frameworks aimed at long-term educational stabilization and local development tracks.",
    //   images: getImagesForProject("project2")
    // }
  ];

  return { projects };
};