// Comp_04_1412
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7060 from './Comp_05_7060';
import Comp_05_7061 from './Comp_05_7061';
import Comp_05_7062 from './Comp_05_7062';
import Comp_05_7063 from './Comp_05_7063';
import Comp_05_7064 from './Comp_05_7064';

const Comp_04_1412: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1412
      <div>
      <Comp_05_7060></Comp_05_7060>';
<Comp_05_7061></Comp_05_7061>';
<Comp_05_7062></Comp_05_7062>';
<Comp_05_7063></Comp_05_7063>';
<Comp_05_7064></Comp_05_7064>';
        </div>
      </div>;
};

export default Comp_04_1412;
