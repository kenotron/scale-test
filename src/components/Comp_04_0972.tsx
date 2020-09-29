// Comp_04_0972
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4860 from './Comp_05_4860';
import Comp_05_4861 from './Comp_05_4861';
import Comp_05_4862 from './Comp_05_4862';
import Comp_05_4863 from './Comp_05_4863';
import Comp_05_4864 from './Comp_05_4864';

const Comp_04_0972: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0972
      <div>
      <Comp_05_4860></Comp_05_4860>';
<Comp_05_4861></Comp_05_4861>';
<Comp_05_4862></Comp_05_4862>';
<Comp_05_4863></Comp_05_4863>';
<Comp_05_4864></Comp_05_4864>';
        </div>
      </div>;
};

export default Comp_04_0972;
