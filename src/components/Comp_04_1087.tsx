// Comp_04_1087
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5435 from './Comp_05_5435';
import Comp_05_5436 from './Comp_05_5436';
import Comp_05_5437 from './Comp_05_5437';
import Comp_05_5438 from './Comp_05_5438';
import Comp_05_5439 from './Comp_05_5439';

const Comp_04_1087: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1087
      <div>
      <Comp_05_5435></Comp_05_5435>';
<Comp_05_5436></Comp_05_5436>';
<Comp_05_5437></Comp_05_5437>';
<Comp_05_5438></Comp_05_5438>';
<Comp_05_5439></Comp_05_5439>';
        </div>
      </div>;
};

export default Comp_04_1087;
