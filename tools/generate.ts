import fs from "fs";
import path from "path";

interface ComponentInfo {
  id: string;
  name: string;
  depth: number;
  children: string[];
}

const root = path.resolve(__dirname, "../");
const MaxComponentDepth = 5;
const EntryComponentNumber = 3;
const ChildrenPerComponent = 5;

let idCount = 0;

const componentMap = new Map<string, ComponentInfo>();

for (let i = 0; i < EntryComponentNumber; i++) {
  const component = generateComponent();
  componentMap.set(component.id, component);
}

function generateComponent(depth: number = 0) {
  const id = idCount++;
  const children = [];

  if (depth < MaxComponentDepth) {
    for (let i = 0; i < ChildrenPerComponent; i++) {
      const child = generateComponent(depth + 1);
      componentMap.set(child.id, child);
      children.push(child.id);
    }
  }

  return {
    id: id.toString(),
    depth,
    name: `Comp_${id}`,
    children,
  };
}

for (const [id, component] of componentMap.entries()) {
  const componentPath = path.join(
    root,
    "src/components",
    `${component.name}.tsx`
  );
  const contents = `// ${component.name}
import React from 'react';
${
  component.children &&
  component.children
    .map(
      (child) =>
        `import ${componentMap.get(child).name} from './${
          componentMap.get(child).name
        }';`
    )
    .join("\n")
}

const ${component.name}: React.FC = () => {
  return <div>
    I'm component ${component.name}
    <div>
    ${
      component.children &&
      component.children
        .map(
          (child) =>
            `<${componentMap.get(child).name}></${
              componentMap.get(child).name
            }>';`
        )
        .join("\n")
    }
    </div>
  </div>;
};

export default ${component.name};
`;
  fs.mkdirSync(path.dirname(componentPath), { recursive: true });
  fs.writeFileSync(componentPath, contents);
}
