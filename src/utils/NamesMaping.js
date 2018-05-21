export const names = (key)=>{
  const map = {
    index: "#",
    name: "Name",
    projectName: "Project Name",
    label: "Label",
    labels: "Labels",
    active: "Active",
    completed: "Completed",
    lastActive: "Last Active",
    comet: "Comet.ml",
    duration: "Duration"
  };
  return map[key] ? map[key] : key;
}