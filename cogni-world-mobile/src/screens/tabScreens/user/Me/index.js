import React from 'react';
import { connect } from 'react-redux';
import MainRowsCard from '../../../../common/components/UI/MainRowsCard';
import EnhancedView from '../../../../common/components/EnhancedView';

const Me = ({ currentUser }) => {
  const { canteen, catering } = currentUser;
  const { canteenBalance } = canteen;
  const { cateringBalance } = catering;

  return (
    <EnhancedView>
      <MainRowsCard
        rows={[
          { key: 'My Canteen Balance 🍟', value: `${canteenBalance}  EGP` },
        ]}
      />
      <MainRowsCard
        rows={[
          { key: 'My Catering Balance 🍔', value: `${cateringBalance}  EGP` },
        ]}
      />
    </EnhancedView>
  );
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Me);
