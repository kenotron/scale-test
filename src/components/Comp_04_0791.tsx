// Comp_04_0791
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3955 from './Comp_05_3955';
import Comp_05_3956 from './Comp_05_3956';
import Comp_05_3957 from './Comp_05_3957';
import Comp_05_3958 from './Comp_05_3958';
import Comp_05_3959 from './Comp_05_3959';

const Comp_04_0791: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0791
      <div>
      <Comp_05_3955></Comp_05_3955>';
<Comp_05_3956></Comp_05_3956>';
<Comp_05_3957></Comp_05_3957>';
<Comp_05_3958></Comp_05_3958>';
<Comp_05_3959></Comp_05_3959>';
        </div>
      </div>;
};

export default Comp_04_0791;
