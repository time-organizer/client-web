import React from 'react';
import { mount } from 'enzyme';

import AssetPreviewer from './AssetPreviewer';

const props = {
  asset: {
    assetId: 'testAssetId',
  },
};

describe('<AssetPreviewer />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AssetPreviewer
        asset={props.asset}
        imagePath="testImagePath"
      />
    );

    expect(wrapper.find(AssetPreviewer)).toHaveLength(1);
  });
});
