export function activeTabRefresh(activeTab, location, handler) {
  switch (location) {
    case "/home":
      if (activeTab !== "Home") return handler("Home");
      break;
    case "/about":
      if (activeTab !== "About") return handler("About");
      break;
    case "/login":
      if (activeTab !== "Login") return handler("Login");
      break;
    case "/contact":
      if (activeTab !== "Contact") return handler("Contact");
      break;
    case "/projects":
      if (activeTab !== "Projects") return handler("Projects");
      break;
    case "/project-manager":
      if (activeTab !== "Project_Manager") return handler("Project_Manager");
      break;
  }
}
