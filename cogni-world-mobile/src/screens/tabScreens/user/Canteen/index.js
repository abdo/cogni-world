import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as CanteenActions from '../../../../store/actions/canteenActions';
import CanteenItemsList from './components/CanteenItemsList';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainRowsCard from '../../../../common/components/UI/MainRowsCard';

const Canteen = ({
  currentUser,
  canteenItems,
  getAllCanteenItems,
  purchaseCanteenItem,
}) => {
  useEffect(() => {
    getAllCanteenItems();
  }, []);
  const { canteen, isAdmin } = currentUser;
  const { canteenBalance } = canteen;

  return (
    <EnhancedView>
      <MainRowsCard
        rows={[{ key: 'Balance', value: `${canteenBalance}  EGP` }]}
      />
      <CanteenItemsList
        items={canteenItems}
        isAdmin={isAdmin}
        purchaseCanteenItem={purchaseCanteenItem}
      />
    </EnhancedView>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  canteenItems: state.canteen.canteenItems,
});

const mapDispatchToProps = {
  getAllCanteenItems: CanteenActions.getAllCanteenItems,
  purchaseCanteenItem: CanteenActions.purchaseCanteenItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Canteen);
