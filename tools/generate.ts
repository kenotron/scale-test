import fs from "fs";
import path from "path";

interface ComponentInfo {
  id: string;
  name: string;
  depth: number;
  children: string[];
}

const root = path.resolve(__dirname, "../");

// 5, 3, 5 is original
const MaxComponentDepth = 5;
const EntryComponentNumber = 1;
const ChildrenPerComponent = 5;

fs.rmdirSync(path.join(root, "src/components"), { recursive: true });

let idCount: number[] = [];

const componentMap = new Map<string, ComponentInfo>();

for (let i = 0; i < EntryComponentNumber; i++) {
  const component = generateComponent(0, 'Entry_');
}

function generateComponent(depth: number = 0, prefix: string = 'Comp_',) {
  idCount[depth] = idCount[depth] || 0;
  const id = `${depth.toString().padStart(2, "0")}_${(idCount[depth]++).toString().padStart(4, "0")}`;

  const children = [];
  const component = {
    id,
    depth,
    name: `${prefix}${id}`,
    children,
  };

  componentMap.set(component.id, component);

  if (depth < MaxComponentDepth) {
    for (let i = 0; i < ChildrenPerComponent; i++) {
      const child = generateComponent(depth + 1);
      component.children.push(child.id);
    }
  }

  return component;
}

for (const [id, component] of componentMap.entries()) {
  const componentPath = path.join(
    root,
    "src/components",
    `${component.name}.tsx`
  );
  const contents = `// ${component.name}
import React from 'react';
import { incModCount } from '../modCount';
${component.children &&
    component.children
      .map(
        (child) =>
          `import ${componentMap.get(child).name} from './${componentMap.get(child).name
          }';`
      )
      .join("\n")
    }

const ${component.name}: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component ${component.name}
      <div>
      ${component.children &&
    component.children
      .map(
        (child) =>
          `<${componentMap.get(child).name}></${componentMap.get(child).name
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
