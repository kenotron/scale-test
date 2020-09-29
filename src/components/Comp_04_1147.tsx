// Comp_04_1147
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5735 from './Comp_05_5735';
import Comp_05_5736 from './Comp_05_5736';
import Comp_05_5737 from './Comp_05_5737';
import Comp_05_5738 from './Comp_05_5738';
import Comp_05_5739 from './Comp_05_5739';

const Comp_04_1147: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1147
      <div>
      <Comp_05_5735></Comp_05_5735>';
<Comp_05_5736></Comp_05_5736>';
<Comp_05_5737></Comp_05_5737>';
<Comp_05_5738></Comp_05_5738>';
<Comp_05_5739></Comp_05_5739>';
        </div>
      </div>;
};

export default Comp_04_1147;
