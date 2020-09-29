// Comp_04_0754
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3770 from './Comp_05_3770';
import Comp_05_3771 from './Comp_05_3771';
import Comp_05_3772 from './Comp_05_3772';
import Comp_05_3773 from './Comp_05_3773';
import Comp_05_3774 from './Comp_05_3774';

const Comp_04_0754: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0754
      <div>
      <Comp_05_3770></Comp_05_3770>';
<Comp_05_3771></Comp_05_3771>';
<Comp_05_3772></Comp_05_3772>';
<Comp_05_3773></Comp_05_3773>';
<Comp_05_3774></Comp_05_3774>';
        </div>
      </div>;
};

export default Comp_04_0754;
