// Comp_04_1487
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7435 from './Comp_05_7435';
import Comp_05_7436 from './Comp_05_7436';
import Comp_05_7437 from './Comp_05_7437';
import Comp_05_7438 from './Comp_05_7438';
import Comp_05_7439 from './Comp_05_7439';

const Comp_04_1487: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1487
      <div>
      <Comp_05_7435></Comp_05_7435>';
<Comp_05_7436></Comp_05_7436>';
<Comp_05_7437></Comp_05_7437>';
<Comp_05_7438></Comp_05_7438>';
<Comp_05_7439></Comp_05_7439>';
        </div>
      </div>;
};

export default Comp_04_1487;
