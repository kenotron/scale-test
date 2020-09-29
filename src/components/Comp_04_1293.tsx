// Comp_04_1293
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6465 from './Comp_05_6465';
import Comp_05_6466 from './Comp_05_6466';
import Comp_05_6467 from './Comp_05_6467';
import Comp_05_6468 from './Comp_05_6468';
import Comp_05_6469 from './Comp_05_6469';

const Comp_04_1293: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1293
      <div>
      <Comp_05_6465></Comp_05_6465>';
<Comp_05_6466></Comp_05_6466>';
<Comp_05_6467></Comp_05_6467>';
<Comp_05_6468></Comp_05_6468>';
<Comp_05_6469></Comp_05_6469>';
        </div>
      </div>;
};

export default Comp_04_1293;
