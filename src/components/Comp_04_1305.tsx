// Comp_04_1305
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6525 from './Comp_05_6525';
import Comp_05_6526 from './Comp_05_6526';
import Comp_05_6527 from './Comp_05_6527';
import Comp_05_6528 from './Comp_05_6528';
import Comp_05_6529 from './Comp_05_6529';

const Comp_04_1305: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1305
      <div>
      <Comp_05_6525></Comp_05_6525>';
<Comp_05_6526></Comp_05_6526>';
<Comp_05_6527></Comp_05_6527>';
<Comp_05_6528></Comp_05_6528>';
<Comp_05_6529></Comp_05_6529>';
        </div>
      </div>;
};

export default Comp_04_1305;
