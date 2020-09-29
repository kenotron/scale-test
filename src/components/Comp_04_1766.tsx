// Comp_04_1766
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8830 from './Comp_05_8830';
import Comp_05_8831 from './Comp_05_8831';
import Comp_05_8832 from './Comp_05_8832';
import Comp_05_8833 from './Comp_05_8833';
import Comp_05_8834 from './Comp_05_8834';

const Comp_04_1766: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1766
      <div>
      <Comp_05_8830></Comp_05_8830>';
<Comp_05_8831></Comp_05_8831>';
<Comp_05_8832></Comp_05_8832>';
<Comp_05_8833></Comp_05_8833>';
<Comp_05_8834></Comp_05_8834>';
        </div>
      </div>;
};

export default Comp_04_1766;
