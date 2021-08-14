import * as React from "react";
import { ProjectCards } from "../../Components/Cards/Cards";

import data from "../../data.json";

function AllProjects() {
  const [projects] = React.useState(data.projects);
  return <ProjectCards projects={projects} />;
}

export default AllProjects;
