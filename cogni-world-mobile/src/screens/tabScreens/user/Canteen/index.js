import React from 'react';

import EnhancedView from '../../../../common/components/EnhancedView';
import MainRowsCard from '../../../../common/components/UI/MainRowsCard';

const Canteen = () => (
  <EnhancedView>
    <MainRowsCard rows={[{ key: 'My Canteen Balance', value: 23 }]} />
  </EnhancedView>
);

export default Canteen;
