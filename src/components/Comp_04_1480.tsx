// Comp_04_1480
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7400 from './Comp_05_7400';
import Comp_05_7401 from './Comp_05_7401';
import Comp_05_7402 from './Comp_05_7402';
import Comp_05_7403 from './Comp_05_7403';
import Comp_05_7404 from './Comp_05_7404';

const Comp_04_1480: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1480
      <div>
      <Comp_05_7400></Comp_05_7400>';
<Comp_05_7401></Comp_05_7401>';
<Comp_05_7402></Comp_05_7402>';
<Comp_05_7403></Comp_05_7403>';
<Comp_05_7404></Comp_05_7404>';
        </div>
      </div>;
};

export default Comp_04_1480;
