// Comp_04_0988
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4940 from './Comp_05_4940';
import Comp_05_4941 from './Comp_05_4941';
import Comp_05_4942 from './Comp_05_4942';
import Comp_05_4943 from './Comp_05_4943';
import Comp_05_4944 from './Comp_05_4944';

const Comp_04_0988: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0988
      <div>
      <Comp_05_4940></Comp_05_4940>';
<Comp_05_4941></Comp_05_4941>';
<Comp_05_4942></Comp_05_4942>';
<Comp_05_4943></Comp_05_4943>';
<Comp_05_4944></Comp_05_4944>';
        </div>
      </div>;
};

export default Comp_04_0988;
