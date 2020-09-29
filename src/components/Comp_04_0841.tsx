// Comp_04_0841
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4205 from './Comp_05_4205';
import Comp_05_4206 from './Comp_05_4206';
import Comp_05_4207 from './Comp_05_4207';
import Comp_05_4208 from './Comp_05_4208';
import Comp_05_4209 from './Comp_05_4209';

const Comp_04_0841: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0841
      <div>
      <Comp_05_4205></Comp_05_4205>';
<Comp_05_4206></Comp_05_4206>';
<Comp_05_4207></Comp_05_4207>';
<Comp_05_4208></Comp_05_4208>';
<Comp_05_4209></Comp_05_4209>';
        </div>
      </div>;
};

export default Comp_04_0841;
