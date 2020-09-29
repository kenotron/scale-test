// Comp_04_1212
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6060 from './Comp_05_6060';
import Comp_05_6061 from './Comp_05_6061';
import Comp_05_6062 from './Comp_05_6062';
import Comp_05_6063 from './Comp_05_6063';
import Comp_05_6064 from './Comp_05_6064';

const Comp_04_1212: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1212
      <div>
      <Comp_05_6060></Comp_05_6060>';
<Comp_05_6061></Comp_05_6061>';
<Comp_05_6062></Comp_05_6062>';
<Comp_05_6063></Comp_05_6063>';
<Comp_05_6064></Comp_05_6064>';
        </div>
      </div>;
};

export default Comp_04_1212;
