// Comp_04_1754
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8770 from './Comp_05_8770';
import Comp_05_8771 from './Comp_05_8771';
import Comp_05_8772 from './Comp_05_8772';
import Comp_05_8773 from './Comp_05_8773';
import Comp_05_8774 from './Comp_05_8774';

const Comp_04_1754: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1754
      <div>
      <Comp_05_8770></Comp_05_8770>';
<Comp_05_8771></Comp_05_8771>';
<Comp_05_8772></Comp_05_8772>';
<Comp_05_8773></Comp_05_8773>';
<Comp_05_8774></Comp_05_8774>';
        </div>
      </div>;
};

export default Comp_04_1754;
