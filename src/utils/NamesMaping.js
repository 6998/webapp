export const names = (key)=>{
  const map = {
    index: "#",
    name: "Name",
    projectName: "Project Name",
    label: "Label",
    labels: "Labels"
  };
  return map[key] ? map[key] : key;
}