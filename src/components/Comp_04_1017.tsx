// Comp_04_1017
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5085 from './Comp_05_5085';
import Comp_05_5086 from './Comp_05_5086';
import Comp_05_5087 from './Comp_05_5087';
import Comp_05_5088 from './Comp_05_5088';
import Comp_05_5089 from './Comp_05_5089';

const Comp_04_1017: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1017
      <div>
      <Comp_05_5085></Comp_05_5085>';
<Comp_05_5086></Comp_05_5086>';
<Comp_05_5087></Comp_05_5087>';
<Comp_05_5088></Comp_05_5088>';
<Comp_05_5089></Comp_05_5089>';
        </div>
      </div>;
};

export default Comp_04_1017;
