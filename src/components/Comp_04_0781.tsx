// Comp_04_0781
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3905 from './Comp_05_3905';
import Comp_05_3906 from './Comp_05_3906';
import Comp_05_3907 from './Comp_05_3907';
import Comp_05_3908 from './Comp_05_3908';
import Comp_05_3909 from './Comp_05_3909';

const Comp_04_0781: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0781
      <div>
      <Comp_05_3905></Comp_05_3905>';
<Comp_05_3906></Comp_05_3906>';
<Comp_05_3907></Comp_05_3907>';
<Comp_05_3908></Comp_05_3908>';
<Comp_05_3909></Comp_05_3909>';
        </div>
      </div>;
};

export default Comp_04_0781;
