// Comp_04_1417
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7085 from './Comp_05_7085';
import Comp_05_7086 from './Comp_05_7086';
import Comp_05_7087 from './Comp_05_7087';
import Comp_05_7088 from './Comp_05_7088';
import Comp_05_7089 from './Comp_05_7089';

const Comp_04_1417: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1417
      <div>
      <Comp_05_7085></Comp_05_7085>';
<Comp_05_7086></Comp_05_7086>';
<Comp_05_7087></Comp_05_7087>';
<Comp_05_7088></Comp_05_7088>';
<Comp_05_7089></Comp_05_7089>';
        </div>
      </div>;
};

export default Comp_04_1417;
