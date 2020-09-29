// Comp_04_1041
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5205 from './Comp_05_5205';
import Comp_05_5206 from './Comp_05_5206';
import Comp_05_5207 from './Comp_05_5207';
import Comp_05_5208 from './Comp_05_5208';
import Comp_05_5209 from './Comp_05_5209';

const Comp_04_1041: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1041
      <div>
      <Comp_05_5205></Comp_05_5205>';
<Comp_05_5206></Comp_05_5206>';
<Comp_05_5207></Comp_05_5207>';
<Comp_05_5208></Comp_05_5208>';
<Comp_05_5209></Comp_05_5209>';
        </div>
      </div>;
};

export default Comp_04_1041;
